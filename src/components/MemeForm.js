import React, { useState } from 'react' 
import { v4 as uuid } from 'uuid'

const MemeForm = ({ addMeme }) => {

    // initialize INITIAL_STATE object
    const INITIAL_STATE = {
        url: '', 
        topText: '', 
        bottomText: ''
    }

    // initialize useState
    const [formData, setFormData] = useState(INITIAL_STATE) 

    // handleChange() 
    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData(form => ({ 
            ...form, 
            [name]: value }
        ))
    }

    // handleSubmit() 
    const handleSubmit = (e) => {
        e.preventDefault() 
        // to generate a unique ID 
        addMeme({ ...formData, id: uuid() })
        setFormData(INITIAL_STATE) 

    }

    return (
        <div>
            <h1>Meme Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="url">Image URL</label>
                    <input
                        id="url"
                        type="text"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="topText">Top Text</label>
                    <input
                        id="topText"
                        type="text"
                        name="topText"
                        value={formData.topText}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="bottomText">Bottom Text</label>
                    <input
                        id="bottomText"
                        type="text"
                        name="bottomText"
                        value={formData.bottomText}
                        onChange={handleChange}
                    />
                </div> 
                    <button>Generate Meme</button>

            </form>
        </div>
    )


}

export default MemeForm 