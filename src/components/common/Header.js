import React from "react";

class Header extends React.Component{
    render(){

        return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img src="https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg"/>
                </a>
                <ul className="nav navbar-nav">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#authors">Authors</a>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default Header;