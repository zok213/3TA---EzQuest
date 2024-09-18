import React from 'react';
import './chat.css';
import Quest from './Quest/quest';

const Chat: React.FC = () => {
// <<<<<<< HEAD
// =======
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState('');
//   const [fileList, setFileList] = useState([]);

//   const handlePreview = async (file: any) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//     setPreviewOpen(true);
//   };

//   const handleChange = ({ fileList: newFileList }: any) => setFileList(newFileList);

//   const uploadButton = (
//     <button style={{ border: 0, background: 'none',}} type="button">
//       <PlusOutlined />
//       <div style={{marginTop: 8}}>Upload</div>
//     </button>
//   );

// >>>>>>> e579957588ac4d7c3b8da93c857f4a2ad77a6e10
  return (
    <div className="chat-group">
      <div className="anwser">
        <div className="stitle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6.09 14.999C5.70066 14.119 5.49969 13.1673 5.5 12.205C5.5 8.50002 8.41 5.49902 12 5.49902C15.59 5.49902 18.5 8.50102 18.5 12.205C18.5003 13.1673 18.2993 14.119 17.91 14.999M12 1.99902V2.99902M22 11.999H21M3 11.999H2M19.07 4.92802L18.363 5.63502M5.637 5.63602L4.93 4.92902M14.517 19.306C15.527 18.979 15.933 18.054 16.047 17.124C16.081 16.846 15.852 16.615 15.572 16.615H8.477C8.40862 16.6139 8.3408 16.6274 8.278 16.6545C8.21521 16.6815 8.15888 16.7217 8.11275 16.7721C8.06662 16.8226 8.03173 16.8823 8.0104 16.9473C7.98906 17.0123 7.98177 17.081 7.989 17.149C8.101 18.077 8.383 18.755 9.453 19.305M14.517 19.306L9.453 19.305M14.517 19.306C14.396 21.251 13.834 22.021 12.007 21.999C10.053 22.035 9.603 21.082 9.453 19.305"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3>Answer</h3>
          
        </div>
        
      </div>
      <Quest/>
    </div>
  );
};

export default Chat;
