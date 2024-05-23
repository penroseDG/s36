import React, { useState, useEffect } from 'react';

const ChangeTitle = () => {
    const [title, setTitle] = useState('');
    useEffect(() => {
        document.title = title;
    }, [title]);
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTitle(event.target.value);
    };
    return (
        <div>
            <p>Change Page Title</p>
            <input
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="nhap ten moi vao "
            />
        </div>
    );
};

export default ChangeTitle;
