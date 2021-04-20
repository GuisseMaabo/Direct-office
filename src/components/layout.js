import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Header, Footer, GenericH2, GenereicPara } from '../styles/IndexStyles';
import { Link } from "gatsby";

export default ({ children }) => (
    <div>
        <Header>
            <GenericH2 none>
                <Link to="/"><img src="unnamed.png" alt="logo"  style={{width: '130px'}}/></Link>
            </GenericH2>
            <div className="menu__items"> 
                <Link to="#offres" ><GenereicPara lessSize lessSpacing grey style={{color: '#454541'}}>NOS OFFRES</GenereicPara></Link>
                <Link to="/about" ><GenereicPara lessSize lessSpacing grey style={{color: '#454541'}}>A PROPOS</GenereicPara></Link>
            </div>
        </Header>
        {children}
        <Footer>
            <div class="icons">
                <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
                <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
                <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
                <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
                <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
                <FontAwesomeIcon icon={faPinterest} size="2x" fixedWidth />
            </div>
            <div class="copyright">
                <span>&copy; 2021, JolofSystem | </span>
                <span>Made with ❤️ and ☕️ in Casablanca</span>
            </div>
        </Footer>
    </div>
)