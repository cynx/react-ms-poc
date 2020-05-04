import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './LikeButton.css';

type LikeState = {
    likes: number
};

export default class LikeButton extends React.Component<{}, LikeState> {
    state: LikeState = {
        likes: 0
    };

    addLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }

    render() {
        const likes = this.state.likes;
        return (
            <button id="like-button" type="button" className="btn btn-light" onClick={this.addLikes}>
                <span className="float-left">
                    <FontAwesomeIcon icon={faHeart} style={likes ? {color : '#ff0057'} : {}} />
                </span>
                <span className="float-right">{likes}</span>
            </button>
        );
    }
}