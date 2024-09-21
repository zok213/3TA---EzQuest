import React, { useState } from "react";
import { Button } from 'antd'
import "./quest.css";

export const Quest = () => {
    const [inputValue, setInputValue] = useState('');
    const [showUploadBox, setShowUploadBox] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
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
                    )
                    }
                </Button>

                <div className="text-wrapper">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Ask me"
                    />
                </div>
            </div>

            <div className="div-2">
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 16.875C13.2925 16.8735 14.5316 16.3594 15.4455 15.4455C16.3594 14.5316 16.8735 13.2925 16.875 12V6C16.875 4.70707 16.3614 3.46709 15.4471 2.55285C14.5329 1.63861 13.2929 1.125 12 1.125C10.7071 1.125 9.46709 1.63861 8.55285 2.55285C7.63861 3.46709 7.125 4.70707 7.125 6V12C7.12649 13.2925 7.64058 14.5316 8.5545 15.4455C9.46842 16.3594 10.7075 16.8735 12 16.875ZM9.375 6C9.375 5.30381 9.65156 4.63613 10.1438 4.14384C10.6361 3.65156 11.3038 3.375 12 3.375C12.6962 3.375 13.3639 3.65156 13.8562 4.14384C14.3484 4.63613 14.625 5.30381 14.625 6V12C14.625 12.6962 14.3484 13.3639 13.8562 13.8562C13.3639 14.3484 12.6962 14.625 12 14.625C11.3038 14.625 10.6361 14.3484 10.1438 13.8562C9.65156 13.3639 9.375 12.6962 9.375 12V6ZM13.125 20.5519V22.5C13.125 22.7984 13.0065 23.0845 12.7955 23.2955C12.5845 23.5065 12.2984 23.625 12 23.625C11.7016 23.625 11.4155 23.5065 11.2045 23.2955C10.9935 23.0845 10.875 22.7984 10.875 22.5V20.5519C8.80129 20.2762 6.89805 19.2574 5.51871 17.6847C4.13937 16.1119 3.37765 14.092 3.375 12C3.375 11.7016 3.49353 11.4155 3.7045 11.2045C3.91548 10.9935 4.20163 10.875 4.5 10.875C4.79837 10.875 5.08452 10.9935 5.2955 11.2045C5.50647 11.4155 5.625 11.7016 5.625 12C5.625 13.6908 6.29665 15.3123 7.49219 16.5078C8.68774 17.7034 10.3092 18.375 12 18.375C13.6908 18.375 15.3123 17.7034 16.5078 16.5078C17.7034 15.3123 18.375 13.6908 18.375 12C18.375 11.7016 18.4935 11.4155 18.7045 11.2045C18.9155 10.9935 19.2016 10.875 19.5 10.875C19.7984 10.875 20.0845 10.9935 20.2955 11.2045C20.5065 11.4155 20.625 11.7016 20.625 12C20.6223 14.092 19.8606 16.1119 18.4813 17.6847C17.1019 19.2574 15.1987 20.2762 13.125 20.5519Z" fill="#1E293B" />
                    </svg>
                </Button>

                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="format">
                        <path d="M19.9198 12.7959L12.2267 20.4834C11.1715 21.5383 9.74041 22.1308 8.24835 22.1305C6.75629 22.1302 5.32545 21.5373 4.27059 20.482C3.21574 19.4268 2.62327 17.9957 2.62354 16.5037C2.6238 15.0116 3.21677 13.5808 4.272 12.5259L13.4745 3.34875C14.178 2.64559 15.1321 2.25071 16.1267 2.25098C16.6193 2.25111 17.1069 2.34824 17.5619 2.53684C18.0169 2.72544 18.4302 3.0018 18.7784 3.35015C19.1266 3.69851 19.4027 4.11202 19.5911 4.5671C19.7794 5.02217 19.8763 5.50989 19.8762 6.0024C19.876 6.49491 19.7789 6.98258 19.5903 7.43755C19.4017 7.89252 19.1253 8.30589 18.777 8.65406L18.7611 8.66906L9.77981 17.3147C9.67332 17.4171 9.54769 17.4976 9.41011 17.5514C9.27252 17.6053 9.12567 17.6316 8.97794 17.6287C8.8302 17.6258 8.68448 17.5939 8.5491 17.5347C8.41371 17.4755 8.29131 17.3902 8.18887 17.2837C8.08644 17.1773 8.00599 17.0516 7.95211 16.914C7.89823 16.7765 7.87198 16.6296 7.87485 16.4819C7.87772 16.3341 7.90967 16.1884 7.96885 16.053C8.02804 15.9176 8.11332 15.7952 8.21981 15.6928L17.1926 7.05656C17.4731 6.77435 17.63 6.39229 17.6287 5.99442C17.6275 5.59655 17.4683 5.21546 17.1861 4.935C17.0463 4.79613 16.8806 4.68614 16.6984 4.61131C16.5161 4.53648 16.3209 4.49828 16.1239 4.49889C15.7261 4.50012 15.345 4.65935 15.0645 4.94156L5.862 14.1159C5.22908 14.7491 4.87362 15.6078 4.87379 16.503C4.87388 16.9463 4.96128 17.3852 5.13099 17.7947C5.30071 18.2042 5.54943 18.5763 5.86294 18.8897C6.17645 19.2031 6.54861 19.4516 6.95819 19.6212C7.36776 19.7908 7.80672 19.878 8.25001 19.8779C9.14526 19.8777 10.0038 19.5219 10.6367 18.8887L18.3298 11.2012C18.4345 11.0966 18.5587 11.0136 18.6954 10.957C18.8321 10.9003 18.9787 10.8712 19.1267 10.8712C19.2747 10.8712 19.4212 10.9003 19.558 10.957C19.6947 11.0136 19.8189 11.0966 19.9236 11.2012C20.0282 11.3059 20.1112 11.4301 20.1679 11.5669C20.2245 11.7036 20.2536 11.8501 20.2536 11.9981C20.2536 12.1461 20.2245 12.2927 20.1679 12.4294C20.1112 12.5661 20.0282 12.6904 19.9236 12.795L19.9198 12.7959Z" fill="#1E293B" />
                    </svg>
                </Button>

            </div>
        </div>
    );
};
export default Quest;