import React from 'react';
import './FooterBar.css';

function FooterBar(props){
    return (
        <div className="row row-space">
        <div className="col-md-12" style={{padding: 0}}>
            <div className="titlebar-nav">
                <p>dCC Library (Where kids learn good.)</p>
            </div>
        </div>
    </div>
    )
}

export default FooterBar;