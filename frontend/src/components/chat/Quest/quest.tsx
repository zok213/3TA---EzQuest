import React, { useState } from "react";
import { Button } from 'antd';
import axios from 'axios';
import "./quest.css";

interface QuestProps {
    handleSetResponse: (response: string, question: string) => void;
}

const Quest: React.FC<QuestProps> = ({ handleSetResponse }) => {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [showUploadBox, setShowUploadBox] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res = await axios.post('http://127.0.0.1:8000/post', { prom: inputValue });
            handleSetResponse(res.data.answer, inputValue);
        } catch (error) {
            console.error("Error fetching response:", error);
            handleSetResponse("Error fetching response", inputValue);
        } finally {
            setLoading(false);
        }
    };

    const handleButtonClick = () => {
        setShowUploadBox(!showUploadBox);
    };

    const handleClosePopup = () => {
        setShowUploadBox(false);
    };

    return (
        <div className="quest">
            <div className="div">
                <Button type="text" size="middle" onClick={handleButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM12 19.875C10.4425 19.875 8.91993 19.4131 7.62489 18.5478C6.32985 17.6825 5.32049 16.4526 4.72445 15.0136C4.12841 13.5747 3.97246 11.9913 4.27632 10.4637C4.58018 8.93606 5.3302 7.53287 6.43154 6.43153C7.53288 5.3302 8.93607 4.58017 10.4637 4.27632C11.9913 3.97246 13.5747 4.12841 15.0136 4.72445C16.4526 5.32049 17.6825 6.32985 18.5478 7.62488C19.4131 8.91992 19.875 10.4425 19.875 12C19.8728 14.0879 19.0424 16.0896 17.566 17.566C16.0896 19.0424 14.0879 19.8728 12 19.875ZM16.875 12C16.875 12.2984 16.7565 12.5845 16.5455 12.7955C16.3345 13.0065 16.0484 13.125 15.75 13.125H13.125V15.75C13.125 16.0484 13.0065 16.3345 12.7955 16.5455C12.5845 16.7565 12.2984 16.875 12 16.875C11.7016 16.875 11.4155 16.7565 11.2045 16.5455C10.9935 16.3345 10.875 16.0484 10.875 15.75V13.125H8.25C7.95164 13.125 7.66549 13.0065 7.45451 12.7955C7.24353 12.5845 7.125 12.2984 7.125 12C7.125 11.7016 7.24353 11.4155 7.45451 11.2045C7.66549 10.9935 7.95164 10.875 8.25 10.875H10.875V8.25C10.875 7.95163 10.9935 7.66548 11.2045 7.4545C11.4155 7.24353 11.7016 7.125 12 7.125C12.2984 7.125 12.5845 7.24353 12.7955 7.4545C13.0065 7.66548 13.125 7.95163 13.125 8.25V10.875H15.75C16.0484 10.875 16.3345 10.9935 16.5455 11.2045C16.7565 11.4155 16.875 11.7016 16.875 12Z" fill="#1E293B" />
                    </svg>
                    {showUploadBox && (
                        <div className="popup-overlay" onClick={handleButtonClick}>
                            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                                <label htmlFor="file-upload">Click to upload</label>
                                <input type="file" id="file-upload" />
                                <Button onClick={handleClosePopup}>Close</Button>
                            </div>
                        </div>
                    )}
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

            <div className="div-2">
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 16.875C13.2925 16.8735 14.5316 16.3594 15.4455 15.4455C16.3594 14.5316 16.8735 13.2925 16.875 12V6C16.875 4.70707 16.3614 3.46709 15.4471 2.55285C14.5329 1.63861 13.2929 1.125 12 1.125C10.7071 1.125 9.46709 1.63861 8.55285 2.55285C7.63861 3.46709 7.125 4.70707 7.125 6V12C7.12649 13.2925 7.64058 14.5316 8.5545 15.4455C9.46842 16.3594 10.7075 16.8735 12 16.875ZM9.375 6C9.375 5.30381 9.65156 4.63613 10.1438 4.14384C10.6361 3.65156 11.3038 3.375 12 3.375C12.6962 3.375 13.3639 3.65156 13.8562 4.14384C14.3484 4.63613 14.625 5.30381 14.625 6V12C14.625 12.6962 14.3484 13.3639 13.8562 13.8562C13.3639 14.3484 12.6962 14.625 12 14.625C11.3038 14.625 10.6361 14.3484 10.1438 13.8562C9.65156 13.3639 9.375 12.6962 9.375 12V6ZM18.375 18.375H5.625C5.22831 18.375 4.84838 18.5315 4.56102 18.8189C4.27366 19.1063 4.125 19.4862 4.125 19.875C4.125 20.2717 4.28147 20.6516 4.56883 20.939C4.85619 21.2264 5.23613 21.375 5.625 21.375H18.375C18.7717 21.375 19.1516 21.2185 19.439 20.9312C19.7263 20.6438 19.875 20.2639 19.875 19.875C19.875 19.4783 19.7185 19.0984 19.4312 18.811C19.1438 18.5237 18.7639 18.375 18.375 18.375Z" fill="#1E293B" />
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default Quest;
