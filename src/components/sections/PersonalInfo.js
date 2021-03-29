import React, { useState } from 'react'
import Photo from './Photo'

// class PersonalInfo extends React.Component {
//     constructor(props) {
//         super(props)
//         state = {
//             firstName: "",
//             lastName: "",
//             phone: "",
//             email: "",
//         }
//     }

//     handleChange = (event) => {
//         const {name, value} = event.target
//         setState({[name]: value})
//     }

//     render() {
//         const firstName = props.editable ? 
//         <input 
//         type="text"
//         name="firstName"
//         value={firstName}
//         onChange={handleChange}
//         placeholder="Your first name"
//         required
//         /> :
//         <span>{firstName}</span> 
        
//         const lastName = props.editable ? 
//         <input 
//         type="text"
//         name="lastName"
//         value={lastName}
//         onChange={handleChange}
//         placeholder="Your last name"
//         required
//         /> : 
//         <span>{lastName}</span> 

//         const phone = props.editable ? 
//         <input 
//         type="text"
//         name="phone"
//         value={phone}
//         onChange={handleChange}
//         placeholder="Your number"
//         required
//         /> : 
//         <span>{phone}</span> 

//         const email = props.editable ? 
//         <input 
//         type="text"
//         name="email"
//         value={email}
//         onChange={handleChange}
//         placeholder="Your email address"
//         required
//         /> : 
//         <span>{email}</span> 

//         return (
//             <section className="personal-info">
//                 <div>
//                     <p className="personal"><b>First name: </b>{firstName}</p>
//                     <p className="personal"><b>Last name: </b>{lastName}</p>
//                     <p className="personal"><b>Phone number: </b>{phone}</p>
//                     <p className="personal"><b>Email address: </b>{email}</p>
//                 </div>
//                 <div>
//                     <Photo />
//                 </div>
//             </section>
//         )
//     }
// }

function PersonalInfo(props) {
    const [inputValues, setInputValues] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    })
    

    const handleChange = event => {
        const {name, value} = event.target
        setInputValues({...inputValues, [name]: value})
    }

    const firstName = props.editable ? 
        <input 
        type="text"
        name="firstName"
        value={inputValues.firstName}
        onChange={handleChange}
        placeholder="Your first name"
        required
        /> :
        <span>{inputValues.firstName}</span> 
        
    const lastName = props.editable ? 
        <input 
        type="text"
        name="lastName"
        value={inputValues.lastName}
        onChange={handleChange}
        placeholder="Your last name"
        required
        /> : 
        <span>{inputValues.lastName}</span> 

    const phone = props.editable ? 
        <input 
        type="text"
        name="phone"
        value={inputValues.phone}
        onChange={handleChange}
        placeholder="Your number"
        required
        /> : 
        <span>{inputValues.phone}</span> 

    const email = props.editable ? 
        <input 
        type="text"
        name="email"
        value={inputValues.email}
        onChange={handleChange}
        placeholder="Your email address"
        required
        /> : 
        <span>{inputValues.email}</span> 

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

export default PersonalInfo