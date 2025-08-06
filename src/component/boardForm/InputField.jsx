import React from 'react';

const InputField = ({ label, name, type='text', placeholder, value, onChange }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label htmlFor={name} style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                {label}
            </label>

            {type === 'textarea' ? (
                <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    minHeight: '150px',
                    resize: 'vertical'
                }}
                />
            ) : (
                <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ccc'
                }}
                />
            )}
        </div>
    );
}

export default InputField;