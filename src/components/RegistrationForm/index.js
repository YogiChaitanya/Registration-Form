// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    formStatus: false,
  }

  addForm = event => {
    event.preventDefault()

    this.setState(prevState => ({
      formStatus: !prevState.formStatus,
    }))
  }

  onChangeFirstName = event => {
    let firstNameErrorMsgEl = document.getElementById('firstNameErrorMsgEl')
    let idFirstNameEl = document.getElementById('idFirstName')

    if (event.target.value === '') {
      firstNameErrorMsgEl.textContent = 'Required'
      idFirstNameEl.style.backgroundColor = '#fef2f4'
      idFirstNameEl.style.border = '#ff0b37'
    } else {
      this.setState({
        firstNameInput: event.target.value,
      })
    }
  }

  onChangeLastName = event => {
    let lastNameErrorMsgEl = document.getElementById('lastNameErrorMsg')
    let idLastNameEl = document.getElementById('idLastName')

    if (event.target.value === '') {
      lastNameErrorMsgEl.textContent = 'Required'
      idLastNameEl.style.backgroundColor = '#fef2f4'
      idLastNameEl.style.border = ' #ff0b37'
    } else {
      this.setState({
        lastNameInput: event.target.value,
      })
    }
  }

  render() {
    const {firstNameInput, lastNameInput, formStatus} = this.state

    return (
      <div className="bg-container">
        {formStatus ? (
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              className="success"
              alt="success"
            />
            <p>Submited Successfully</p>
            <button className="button">Submit Another Response</button>
          </div>
        ) : (
          <form className="form-control" onSubmit={this.addForm}>
            <h1 className="heading1">Registration</h1>
            <div className="card">
              <label htmlFor="idFirstName">FIRST NAME</label>
              <input
                onBlur={eventHandler}
                id="idFirstName"
                type="text"
                className="first-name-input"
                placeholder="First name"
                value={firstNameInput}
                onChange={this.onChangeFirstName}
              />
              <p id="firstNameErrorMsg" className="error-msg"></p>
              <label htmlFor="idLastName">LAST NAME</label>
              <input
                onBlur={eventHandler}
                id="idLastName"
                type="text"
                className="last-name-input"
                placeholder="Last name"
                value={lastNameInput}
                onChange={this.onChangeLastName}
              />
              <p id="lastNameErrorMsg" className="error-msg"></p>

              <div className="button-container">
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
