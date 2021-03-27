import React from 'react'

class Education extends React.Component {
    constructor() {
        super()
        this.state = {
            university: "",
            title: "",
            qualification: "",
            from: "",
            to: ""
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        const university = this.props.editable ?
        <input 
        type="text"
        name="university"
        value={this.state.university}
        onChange={this.handleChange}
        style={{width: "80%"}}
        placeholder="Enter here"
        required
        /> :
        <span>{this.state.university}</span> 

        const title = this.props.editable ?
        <input 
        type="text"
        name="title"
        value={this.state.title}
        onChange={this.handleChange}
        placeholder="Enter here"
        required
        /> :
        <span>{this.state.title}</span> 

        const qualification = this.props.editable ?
        <input 
        type="text"
        name="qualification"
        value={this.state.qualification}
        onChange={this.handleChange}
        placeholder="Enter here"
        required
        /> :
        <span>{this.state.qualification}</span> 
        
        const from = this.props.editable ?
        <input 
        type="date"
        name="from"
        value={this.state.from}
        onChange={this.handleChange}
        required
        /> :
        <span>{this.state.from}</span> 
        
        const to = this.props.editable ?
        <input 
        type="date"
        name="to"
        value={this.state.to}
        onChange={this.handleChange}
        required
        /> :
        <span>{this.state.to}</span> 
        
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
}

export default Education