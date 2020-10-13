import React, { Component } from 'react'
import {FaTwitter,FaFacebook,FaGooglePlus,FaInstagramSquare} from 'react-icons/fa'

export default class Footer extends Component {
    render() {
        return (
            <>
            <div className="footer">
                <div class="col span-1-of-2">
                    <ul class="footer-nav">
                        {/* <li><a href="#">About us</a></li>
                        <li><a href="jotonia/tut">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Android App</a></li> */}
                        <li><a href="#"></a></li>
                        <p>Email: info@jotonia.com</p>
                    </ul>
                </div>
                <div class="col span-1-of-2">
                    <ul class="social-links">
                        <li><a href="#"><i class="ion-social-facebook"><FaFacebook /></i></a></li>
                        <li><a href="#"><i class="ion-social-twitter"><FaTwitter /></i></a></li>
                        <li><a href="#"><i class="ion-social-googleplus"><FaGooglePlus /></i></a></li>
                        <li><a href="#"><i class="ion-social-instagram"><FaInstagramSquare /></i></a></li>
                    </ul>
                </div>
            
            <div class="row">
                <p>
                    Copyright &copy; 2020 by Jotonia. All rights reserved.
                </p>
            </div>
        </div>
        </>
        )
    }
}
