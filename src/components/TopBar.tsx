import React from 'react';

function TopBar(){

    let userName: string = "Gopi";
    return (
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">Welcome {userName}</a>
        </div>
    );
}

export default TopBar;