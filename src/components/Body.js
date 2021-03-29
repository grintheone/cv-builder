import React, {useState} from 'react'
import Section from './Section'
import PersonalInfo from './sections/PersonalInfo'
import Education from './sections/Education'
import Work from './sections/Work'
import Buttons from './sections/Buttons'


// class Body extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             editable: true
//         }
//     }

//     saveChanges = (event) => {
//         if (event.target.form.checkValidity()) {
//             this.setState({editable: false})
//         }
//     }

//     editForms = (event) => {
//         event.preventDefault()
//         this.setState({editable: true})
//     }

//     render() {
//         return(
//             <div className="body">
//                 <form>
//                 <Section title="Personal Information" content={<PersonalInfo editable={this.state.editable}/>}/>
//                 <Section title="Education" content={<Education editable={this.state.editable}/>}/>
//                 <Section title="Work Experience" content={<Work editable={this.state.editable}/>}/>
//                 <Buttons editable={this.state.editable} saveChanges={this.saveChanges} editForms={this.editForms}/>
//                 </form>
//             </div>
//         )
//     }
// }

function Body() {
    const [editable, setEditable] = useState(true)

    const saveChanges = event => {
        if (event.target.form.checkValidity()) {
            setEditable(false)
        }
    }

    const editForms = event => {
        event.preventDefault() 
        setEditable(true)
    }

    return(
        <div className="body">
            <form>
            <Section title="Personal Information" content={<PersonalInfo editable={editable}/>}/>
            <Section title="Education" content={<Education editable={editable}/>}/>
            <Section title="Work Experience" content={<Work editable={editable}/>}/>
            <Buttons editable={editable} saveChanges={saveChanges} editForms={editForms}/>
            </form>
        </div>
    )
}

export default Body