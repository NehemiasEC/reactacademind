import React from "react";

export const Header=(props)=>{
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLink}</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">item3</a></li>
                        <li><a href="#">item4</a></li>
                        <li><a href="#">item5</a></li>
                    </ul>
                </div>
            </nav>
        )
};


