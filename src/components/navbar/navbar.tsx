import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import LikeButton from '../like/LikeButton';

type NavProps = {
    appName: string
};

const Header: React.FC<NavProps> = props => {
    return (
        <NavBar bg="primary" variant="dark">
            <NavBar.Brand>{props.appName}</NavBar.Brand>
            <nav className="ml-auto">
                <LikeButton></LikeButton>
            </nav>
        </NavBar>
    );
};

export default Header;