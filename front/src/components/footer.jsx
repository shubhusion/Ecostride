import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane, faCopyright } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

const Footer = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    // Send message functionality here
    window.location.href = `mailto:adityaryk123@gmail.com?subject=Message from EcoStride Website&body=${encodeURIComponent(message)}`;
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>EcoStride : Sustainability Living Tracker</h4>
            <p>
              Jaypee Institute Of Information Technology, Noida, India<br />
              <strong>Phone :</strong> +91 91490 03706<br />
              <strong>Email :</strong> guptastuti1920@gmail.com
            </p>
            <div className="footer-message-input">
              <input type="text" placeholder="Send us a message" value={message} onChange={handleMessageChange} />
              <button onClick={sendMessage}><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
          </div>
          <div className="footer-section">
            <h4>Useful Links</h4>
            <ul>
              <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:adityaryk123@gmail.com">&nbsp;Email</a></li>
              <li><FontAwesomeIcon icon={faInstagram} /> <a href="https://www.instagram.com/shrivastava_aditya_/">&nbsp;Instagram</a></li>
              <li><FontAwesomeIcon icon={faFacebook} /> <a href="https://www.facebook.com/profile.php?id=100009027675998">&nbsp;Facebook</a></li>
              <li><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/shrivastavaditya">&nbsp;GitHub</a></li>
              <li><FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/aditya-shrivastava-14b6a6222/">&nbsp;LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="text-center">
            <div>
              <i>
                <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
              </i> 2023 Copyright <strong><span>EcoStride</span></strong>. All Rights Reserved.
            </div>
            <div className='design'>
              Designed by &nbsp; <a href="https://www.linkedin.com/in/aditya-shrivastava-14b6a6222/" className="text-purple-500"> Team EcoStride</a>
            </div>
          </div>
          <div className="footer-bottom-logo">
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
