import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>EcoStride : Sustainability Living Tracker</h4>
            <p>
              Jaypee Institute Of Information Technology, Noida, India<br />
              <strong>Phone :</strong> +91 86904 09766<br />
              <strong>Email :</strong> adityaryk123@gmail.com
            </p>
          </div>
          <div className="footer-section">
            <h4>Useful Links</h4>
            <ul>
              <li><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:adityaryk123@gmail.com" target="_blank">Email</a></li>
              <li><FontAwesomeIcon icon={faInstagram} /><a href="https://www.instagram.com/shrivastava_aditya_/" target="_blank">Instagram</a></li>
              <li><FontAwesomeIcon icon={faFacebook} /><a href="https://www.facebook.com/profile.php?id=100009027675998" target="_blank">Facebook</a></li>
              <li><FontAwesomeIcon icon={faGithub} /><a href="https://github.com/shrivastavaditya" target="_blank">GitHub</a></li>
              <li><FontAwesomeIcon icon={faLinkedin} /><a href="https://www.linkedin.com/in/aditya-shrivastava-14b6a6222/" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-around items-center">
          <div className="text-center">
            <div>
              <i>
                <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
              </i> 2023 Copyright <strong><span>EcoStride</span></strong>. All Rights Reserved.
            </div>
            <div>
              Designed by <a href="https://www.linkedin.com/in/aditya-shrivastava-14b6a6222/" className="text-purple-500">Aditya Kumar</a>
            </div>
          </div>
          <div className="text-center text-xl text-white mb-2">
            <a href="mailto:adityaryk123@gmail.com" className="footer-icon"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://www.instagram.com/shrivastava_aditya_/" className="footer-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/profile.php?id=100009027675998" className="footer-icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://github.com/shrivastavaditya" className="footer-icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/aditya-shrivastava-14b6a6222/" className="footer-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
