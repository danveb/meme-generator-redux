import React from 'react' 

const Meme = ({ id, url, topText, bottomText }) => {
    return (
        <div>
            <div className="container">
                <span>{topText}</span>
                <img src={url} alt="meme" />
                <span>{bottomText}</span>
                <button>X</button>
            </div>

        </div>
    )
}

export default Meme