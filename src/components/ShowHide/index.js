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

/* solution 



import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onShowLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

*/
