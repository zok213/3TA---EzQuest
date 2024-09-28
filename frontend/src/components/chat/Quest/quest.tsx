import React, { useState } from "react";
import { Button } from 'antd';
import axios from 'axios';
import "./quest.css";


interface QuestProps {
    handleSetResponse: (response: string,question: string) => void;
}

const Quest: React.FC<QuestProps> = ({ handleSetResponse }) => {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };


    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res = await axios.post('http://127.0.0.1:8000/post', { prom: inputValue });
            handleSetResponse(res.data.answer,inputValue);
        } catch (error) {
            console.error("Error fetching response:", error);
            handleSetResponse("Error fetching response",inputValue);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="quest">
            <div className="div">
                <Button type="text" size="middle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM12 19.875C10.4425 19.875 8.91993 19.4131 7.62489 18.5478C6.32985 17.6825 5.32049 16.4526 4.72445 15.0136C4.12841 13.5747 3.97246 11.9913 4.27632 10.4637C4.58018 8.93606 5.3302 7.53287 6.43154 6.43153C7.53288 5.3302 8.93607 4.58017 10.4637 4.27632C11.9913 3.97246 13.5747 4.12841 15.0136 4.72445C16.4526 5.32049 17.6825 6.32985 18.5478 7.62488C19.4131 8.91992 19.875 10.4425 19.875 12C19.8728 14.0879 19.0424 16.0896 17.566 17.566C16.0896 19.0424 14.0879 19.8728 12 19.875ZM16.875 12C16.875 12.2984 16.7565 12.5845 16.5455 12.7955C16.3345 13.0065 16.0484 13.125 15.75 13.125H13.125V15.75C13.125 16.0484 13.0065 16.3345 12.7955 16.5455C12.5845 16.7565 12.2984 16.875 12 16.875C11.7016 16.875 11.4155 16.7565 11.2045 16.5455C10.9935 16.3345 10.875 16.0484 10.875 15.75V13.125H8.25C7.95164 13.125 7.66549 13.0065 7.45451 12.7955C7.24353 12.5845 7.125 12.2984 7.125 12C7.125 11.7016 7.24353 11.4155 7.45451 11.2045C7.66549 10.9935 7.95164 10.875 8.25 10.875H10.875V8.25C10.875 7.95163 10.9935 7.66548 11.2045 7.4545C11.4155 7.24353 11.7016 7.125 12 7.125C12.2984 7.125 12.5845 7.24353 12.7955 7.4545C13.0065 7.66548 13.125 7.95163 13.125 8.25V10.875H15.75C16.0484 10.875 16.3345 10.9935 16.5455 11.2045C16.7565 11.4155 16.875 11.7016 16.875 12Z" fill="#1E293B" />
                    </svg>
                </Button>

                <div className="text-wrapper">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Ask me"
                    />
                </div>
                <Button onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Loading...' : 'Submit'}
                </Button>
            </div>
        </div>
    );
};

export default Quest;