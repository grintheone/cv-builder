import React from 'react'

class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            company: "",
            position: "",
            from: "",
            to: "",
            tasks: "",
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        const company = this.props.editable ? 
        <input 
        type="text"
        name="company"
        value={this.state.company}
        onChange={this.handleChange}
        placeholder="Enter here"
        required
        /> :
        <span>{this.state.company}</span> 

        const position = this.props.editable ? 
        <input 
        type="text"
        name="position"
        value={this.state.position}
        onChange={this.handleChange}
        placeholder="Enter here"
        required
        /> :
        <span>{this.state.position}</span> 

        const from = this.props.editable ? 
        <input 
        type="date"
        name="from"
        value={this.state.from}
        onChange={this.handleChange}
        required
        />
         :
        <span>{this.state.from}</span> 
        const to = this.props.editable ? 
        <input 
        type="date"
        name="to"
        value={this.state.to}
        onChange={this.handleChange}
        required
        />
         :
        <span>{this.state.to}</span> 
        const tasks = this.props.editable ? 
        <textarea 
        type="text"
        name="tasks"
        value={this.state.tasks}
        onChange={this.handleChange}
        placeholder="Give a quick explanation of your responsibilities"
        required
        /> :
        <span>{this.state.tasks}</span> 
        return (
            <section className="work">
                <div className="company-position">
                    <b>Company: <p style={{fontWeight: "normal"}}>{company}</p></b>
                    <b>Position: <p style={{fontWeight: "normal"}}>{position}</p></b>
                </div>
                <div className="from-to">
                    <b className="right">From: <p style={{fontWeight: "normal"}}>{from}</p></b>
                    <b className="left">To: <p style={{fontWeight: "normal"}}>{to}</p></b>
                </div>
                <b style={{margin: "10px 0"}}>Description of chief responsibilities:</b>
                {tasks}
            </section>
        )
    }
}

export default Work