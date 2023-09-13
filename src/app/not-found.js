import React from 'react';
import common from "@/style/common.module.css";

const NotFound = () => {
    return (
        <div className={common.main}>
            <div className={common.notFound}></div><br/>
            <p>Syntex Error: Line Number 35</p>
            <br/>
            <center>
                <h2> 404 PAGE NOT FOUND  </h2>
            </center>
        </div>
    )
};

export default NotFound;