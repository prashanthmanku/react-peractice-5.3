// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isHideLastName: true, isHideFirstName: true}

  onHideShowFirstname = () => {
    this.setState(prevState => ({isHideFirstName: !prevState.isHideFirstName}))
  }

  onHideShowLastname = () => {
    this.setState(prevState => ({isHideLastName: !prevState.isHideLastName}))
  }

  render() {
    const {isHideFirstName, isHideLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="names-container">
          <div className="buttns-container">
            <button type="button" onClick={this.onHideShowFirstname}>
              Show/Hide Firstname
            </button>
            {!isHideFirstName && <p>Joe</p>}
          </div>
          <div className="buttns-container">
            <button type="button" onClick={this.onHideShowLastname}>
              Show/Hide Lastname
            </button>
            {!isHideLastName && <p>Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
