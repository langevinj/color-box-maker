import React, { useState } from 'react'

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {bgColor: "", height: "", width: ""}
    const [formData, setFormData] = useState(INITIAL_STATE); 


    const handleSubmit = evt => {
        evt.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bgColor">Background Color:</label>
            <input
                id="bgColor"
                name="bgColor"
                value={formData.bgColor}
                onChange={handleChange}
            />

            <label htmlFor="height">Height:</label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="width">Width:</label>
            <input  
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <button>Add a new box!</button>
        </form>
    );
};

export default NewBoxForm;