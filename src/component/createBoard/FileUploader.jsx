import React from 'react';

const FileUploader = ({ label, name, onChange }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
        <label htmlFor={name} style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            {label}
        </label>
        <input
            id={name}
            type="file"
            name={name}
            accept="image/*"
            onChange={onChange}
        />
        </div>
    );
}

export default FileUploader;