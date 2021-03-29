import React, { useState } from 'react'

// class Education extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             university: "",
//             title: "",
//             qualification: "",
//             from: "",
//             to: ""
//         }
//     }

//     handleChange = (event) => {
//         const {name, value} = event.target
//         this.setState({[name]: value})
//     }

//     render() {
//         const university = props.editable ?
//         <input 
//         type="text"
//         name="university"
//         value={university}
//         onChange={handleChange}
//         style={{width: "80%"}}
//         placeholder="Enter here"
//         required
//         /> :
//         <span>{university}</span> 

//         const title = props.editable ?
//         <input 
//         type="text"
//         name="title"
//         value={title}
//         onChange={handleChange}
//         placeholder="Enter here"
//         required
//         /> :
//         <span>{title}</span> 

//         const qualification = props.editable ?
//         <input 
//         type="text"
//         name="qualification"
//         value={qualification}
//         onChange={handleChange}
//         placeholder="Enter here"
//         required
//         /> :
//         <span>{qualification}</span> 
        
//         const from = props.editable ?
//         <input 
//         type="date"
//         name="from"
//         value={from}
//         onChange={handleChange}
//         required
//         /> :
//         <span>{from}</span> 
        
//         const to = props.editable ?
//         <input 
//         type="date"
//         name="to"
//         value={to}
//         onChange={handleChange}
//         required
//         /> :
//         <span>{to}</span> 
        
//         return (
//             <section className="education">
//                 <b>Name of University or School: </b>
//                 {university}
//                 <div className="title-qualification">
//                     <b>Title of study: <p style={{fontWeight: "normal"}}>{title}</p></b>
//                     <b>Qualification: <p style={{fontWeight: "normal"}}>{qualification}</p></b>
//                 </div>
//                 <div className="from-to">
//                     <b>From: <p style={{fontWeight: "normal"}}>{from}</p></b>
//                     <b>To: <p style={{fontWeight: "normal"}}>{to}</p></b>
//                 </div>
//             </section>
//         )
//     }
// }

function Education(props) {
    const [inputValues, setInputValues] = useState({
        university: "",
        title: "",
        qualification: "",
        from: "",
        to: ""
    })

    const handleChange = event => {
        const {name, value} = event.target
        setInputValues({...inputValues, [name]: value})
    }

    const university = props.editable ?
        <input 
        type="text"
        name="university"
        value={inputValues.university}
        onChange={handleChange}
        style={{width: "80%"}}
        placeholder="Enter here"
        required
        /> :
        <span>{inputValues.university}</span> 

    const title = props.editable ?
        <input 
        type="text"
        name="title"
        value={inputValues.title}
        onChange={handleChange}
        placeholder="Enter here"
        required
        /> :
        <span>{inputValues.title}</span> 

    const qualification = props.editable ?
        <input 
        type="text"
        name="qualification"
        value={inputValues.qualification}
        onChange={handleChange}
        placeholder="Enter here"
        required
        /> :
        <span>{inputValues.qualification}</span> 
        
    const from = props.editable ?
        <input 
        type="date"
        name="from"
        value={inputValues.from}
        onChange={handleChange}
        required
        /> :
        <span>{inputValues.from}</span> 
        
    const to = props.editable ?
        <input 
        type="date"
        name="to"
        value={inputValues.to}
        onChange={handleChange}
        required
        /> :
        <span>{inputValues.to}</span>

        return (
            <section className="education">
                <b>Name of University or School: </b>
                {university}
                <div className="title-qualification">
                    <b>Title of study: <p style={{fontWeight: "normal"}}>{title}</p></b>
                    <b>Qualification: <p style={{fontWeight: "normal"}}>{qualification}</p></b>
                </div>
                <div className="from-to">
                    <b>From: <p style={{fontWeight: "normal"}}>{from}</p></b>
                    <b>To: <p style={{fontWeight: "normal"}}>{to}</p></b>
                </div>
            </section>
        )

}

export default Education