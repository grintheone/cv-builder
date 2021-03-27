import React from 'react'
import Photo from './Photo'

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        const firstName = this.props.editable ? 
        <input 
        type="text"
        name="firstName"
        value={this.state.firstName}
        onChange={this.handleChange}
        placeholder="Your first name"
        required
        /> :
        <span>{this.state.firstName}</span> 
        
        const lastName = this.props.editable ? 
        <input 
        type="text"
        name="lastName"
        value={this.state.lastName}
        onChange={this.handleChange}
        placeholder="Your last name"
        required
        /> : 
        <span>{this.state.lastName}</span> 

        const phone = this.props.editable ? 
        <input 
        type="text"
        name="phone"
        value={this.state.phone}
        onChange={this.handleChange}
        placeholder="Your number"
        required
        /> : 
        <span>{this.state.phone}</span> 

        const email = this.props.editable ? 
        <input 
        type="text"
        name="email"
        value={this.state.email}
        onChange={this.handleChange}
        placeholder="Your email address"
        required
        /> : 
        <span>{this.state.email}</span> 

        return (
            <section className="personal-info">
                <div>
                    <p className="personal"><b>First name: </b>{firstName}</p>
                    <p className="personal"><b>Last name: </b>{lastName}</p>
                    <p className="personal"><b>Phone number: </b>{phone}</p>
                    <p className="personal"><b>Email address: </b>{email}</p>
                </div>
                <div>
                    <Photo />
                </div>
            </section>
        )
    }
}

export default PersonalInfo