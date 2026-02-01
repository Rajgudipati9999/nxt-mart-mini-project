import {TbLogout2} from 'react-icons/tb'
import './index.css'

const Navbar = () => (
  <div className="nav-container">
    <div>
      <img
        src="https://res.cloudinary.com/dx8rhno8y/image/upload/v1769930408/Logo_1_yd6jfw.png"
        alt="logo"
        className="nav-logo"
      />
    </div>

    <div className="nav-items">
      <p className="nav-item">Home</p>
      <p className="nav-item">Cart</p>
      <div className="logout">
        <TbLogout2 className="logout-icon" />
        <span className="nav-item logout-text"> Logout</span>
      </div>
    </div>
  </div>
)

export default Navbar
