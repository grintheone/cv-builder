import React from 'react'

function Buttons(props) {
    const saveOrEdit = props.editable ? 
    <button type="submit" onClick={props.saveChanges}>Save</button> :
    <button type="button" onClick={props.editForms}>Edit</button>
    
    const print = !props.editable ?
    <button type="button" onClick={() => window.print()}>Print</button> :
    ""


    return (
        <div className="controls">
            {saveOrEdit}
            {print}
        </div>
    )
}

export default Buttons