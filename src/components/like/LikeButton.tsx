import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './LikeButton.css';


const LikeButton: React.FC = () => {
    const [likes, addLikes] =  useState<number | 0>(0)

    return (
        <button id="like-button" type="button" className="btn btn-light" onClick={() => addLikes(likes + 1)}>
            <span className="float-left">
                <FontAwesomeIcon icon={faHeart} style={likes ? {color : '#ff0057'} : {}} />
            </span>
            <span className="float-right">{likes}</span>
        </button>
    );
    
}

export default LikeButton;