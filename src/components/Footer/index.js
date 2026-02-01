import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitter,
  FaInstagram,
  FaCopyright,
} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-text-icons">
      <div>
        <p className="footer-text">
          For any queries, contact +91-9876543210 or mail us help@nxtmart.co.in
        </p>
      </div>
      <div className="footer-icon-container">
        <FaFacebookSquare />
        <FaPinterestSquare />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
    <div>
      <p className="footer-terms-and-condition-text">
        Copyright <FaCopyright /> 2023 NxtMart Grocery Supplies Private Ltd
      </p>
    </div>
  </div>
)

export default Footer
