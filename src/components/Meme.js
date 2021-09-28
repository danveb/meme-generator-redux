import React from 'react' 
import '../static/styles/Meme.css' 

const Meme = ({ id, url, topText, bottomText }) => {
    return (
        <div>
            <div className="Meme-container">
                <span className="Meme-topText">{topText}</span>
                <img src={url} alt="meme" />
                <span className="Meme-bottomText">{bottomText}</span>
                <button className="Meme-deleteBtn">X</button>
            </div>

        </div>
    )
}

export default Meme