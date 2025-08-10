import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './CreateBoard.css';
import InputField from "../../component/createBoard/InputField";
import FileUploader from "../../component/createBoard/FileUploader";
import requestApi from "../../api/RequestApi";


const CreateBoard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const title = location.state.title;
    const boardType = location.state.boardType;

    const [form, setForm] = useState({
        title: '',
        content: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setForm(prev => ({
        ...prev,
        image: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('제출된 데이터:', form);

        const fetchBoardForm = async () => {
            try {
                const formData = new FormData();

                formData.append("title", form.title);
                formData.append("content", form.content);
                if (form.image) {
                    formData.append("image", form.image);
                }

                const res = await requestApi('/wake-up-log', 'POST', formData);
                console.log(res);
                navigate(`/${boardType}/${res.data.wakeUpId}`);

            } catch (error) {
                console.error('에러:', error.message);
                alert(error.message)
            }
        };

        fetchBoardForm(); 
    };

    const cancelChange = () => {
        navigate("/")
    }

    return(
        <div class="board-container">
            <form onSubmit={handleSubmit}>
                <h2 className="board-from-title">{title} 작성</h2>
                <InputField label="제목" type="text" name="title" placeholder="제목을 입력하세요" value={form.title} onChange={handleChange} />
                <InputField label="본문" type="textarea" name="content" placeholder="내용을 입력하세요" value={form.content} onChange={handleChange} />
                <FileUploader label="이미지 첨부" name="image" onChange={handleFileChange} />
                <button className="submit-btn" type="submit">등록</button>
                <button className="clean-btn" onClick={cancelChange}>취소</button>
            </form>
        </div>
    )
}

export default CreateBoard;