import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isLoading: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    if (username === '' || password === '') {
      this.setState({errorMsg: 'Username and Password are required'})
      return
    }

    this.setState({isLoading: true, errorMsg: ''})

    // 🔹 API call logic goes here
    // Example:
    // const response = await fetch(...)
    // handle success / failure

    this.setState({isLoading: false})
  }

  render() {
    const {username, password, errorMsg, isLoading} = this.state

    return (
      <div className="login-container">
        <div className="bg-layer bg1" />
        <div className="bg-layer bg2" />
        <div className="bg-layer bg3" />
        <div className="bg-layer bg4" />

        <form className="login-form" onSubmit={this.onSubmitForm}>
          <img
            src="https://res.cloudinary.com/dx8rhno8y/image/upload/v1769859675/Logo_2_pc3ydi.png"
            alt="logo"
            className="login-logo"
          />
          <div className="input-group">
            <label htmlFor={username} className="username">
              Username
            </label>
            <br />
            <input
              type="text"
              value={username}
              onChange={this.onChangeUsername}
              className="input"
              id={username}
            />
          </div>

          <div className="input-group">
            <label htmlFor={password} className="password">
              Password
            </label>
            <br />
            <input
              type="password"
              value={password}
              onChange={this.onChangePassword}
              className="input"
              id={password}
            />
          </div>

          <div className="check-box-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Show Password</label>
          </div>

          {errorMsg && <p className="error-msg">{errorMsg}</p>}

          <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    )
  }
}

export default Login
