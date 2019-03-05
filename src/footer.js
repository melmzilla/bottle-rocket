import React, { Component } from 'react';
import hotDog from './assets/tab_lunch@2x.png';
import internets from './assets/tab_internets@2x.png'


class Footer extends Component {
    render(){
        return(
            <div className="footer-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button type="" className="footer-btn col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <img src={hotDog} alt="" className="footer-img" />
                        <p className="header-text">Lunch</p>
                    </button>
                    <button type="" className="footer-btn col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <img src={internets} alt="" className="footer-img" />
                        <p className="header-text">Internets</p>
                    </button>
            </div>
        );
    }
}

export default Footer;