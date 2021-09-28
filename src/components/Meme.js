import React from 'react' 
import '../static/styles/Meme.css' 

const Meme = ({ id, url, topText, bottomText, deleteMeme }) => {

    // handleDelete() 
    const handleDelete = () => {
        deleteMeme(id) 
    }

    return (
        <div>
            <div className="Meme-container">
                <span className="Meme-topText">{topText}</span>
                <img src={url} alt="meme" />
                <span className="Meme-bottomText">{bottomText}</span>
                <button className="Meme-deleteBtn" onClick={handleDelete}>X</button>
            </div>

        </div>
    )
}

export default Meme