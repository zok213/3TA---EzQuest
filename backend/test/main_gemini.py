from fastapi import FastAPI
import os
import google.generativeai as genai
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn 
app = FastAPI()
origins = [
    "http://10.12.80.197:3000 ",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.put("/home")
async def create_item(prom: str):
    try:
        genai.configure(api_key="AIzaSyAIR9eZ6fPz3VSvsndbGd_pIsC9SiSScl0")
        # Create the model
        generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 64,
        "max_output_tokens": 8192,
        "response_mime_type": "text/plain",
        }
        
        model = genai.GenerativeModel(
        model_name="gemini-1.5-flash",
        generation_config=generation_config,
        # safety_settings = Adjust safety settings
        # See https://ai.google.dev/gemini-api/docs/safety-settings
        )
        chat_session = model.start_chat(
        history=[
        ]
        )
        return chat_session.send_message(prom).text
    except Exception as e:
        return {"error": str(e)}

    
