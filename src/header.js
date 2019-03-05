import React, { Component } from 'react';
import mapLogo from './assets/icon_map@2x.png';


class Header extends Component {
    render(){
        return(
            <div>
                <div className=" header col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{textAlign: 'center'}}>
                    <img src={mapLogo} alt="" className="map-btn" />
                    <h1 className="header-text">Lunch Tyme</h1>
                </div>
            </div>
        );
    }
}
export default Header;