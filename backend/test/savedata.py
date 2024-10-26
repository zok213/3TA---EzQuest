from fastapi import FastAPI, HTTPException
import os
import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import uvicorn
import pymongo
from datetime import datetime

# Load the .env file and get the API key
load_dotenv()
key = os.getenv("GENAI_API_KEY")

# MongoDB Setup
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["3TA-Quest"]
collection = db["prompts_and_responses"]

# Check if the API key is loaded correctly
if not key:
    raise Exception("API key is missing or not set in the environment")

app = FastAPI()

# Allow all origins for CORS
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Test endpoint to ensure API is running
@app.get("/test")
async def test():
    return {"message": "API is working"}

# Define the model for receiving the prompt
class Prompt(BaseModel):
    prom: str

# POST endpoint to handle prompt generation and save to MongoDB
@app.post("/post")
async def create_item(prompt: Prompt):
    try:
        # Configure the GenAI with the API key from the environment
        genai.configure(api_key=key)

        # Generation configuration
        generation_config = {
            "temperature": 1,
            "top_p": 0.95,
            "top_k": 64,
            "max_output_tokens": 8192
        }

        # Create the GenerativeModel instance
        model = genai.GenerativeModel(
            model_name="gemini-1.5-flash",
            generation_config=generation_config,
        )

        # Start a chat session with an empty history
        chat_session = model.start_chat(history=[])

        # Send the prompt to the model and get the response
        response = chat_session.send_message(prompt.prom).text

        # Save the prompt and the response in MongoDB
        user_data = {
            "prompt": prompt.prom,
            "response": response,
            "created_at": datetime.now()
        }
        collection.insert_one(user_data)

        return {"answer": response}

    except Exception as e:
        # Log the error for easier debugging and return HTTP 500 error
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Endpoint to fetch all stored prompts and responses
@app.get("/history")
async def get_history():
    try:
        # Fetch all prompts and responses from MongoDB
        history = list(collection.find({}, {"_id": 0, "prompt": 1, "response": 1, "created_at": 1}))
        return {"history": history}
    except Exception as e:
        print(f"Error fetching history: {e}")
        raise HTTPException(status_code=500, detail="Error fetching history")

# Main entry point to run the FastAPI application
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
