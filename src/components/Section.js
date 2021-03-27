import React from 'react'

function Section(props) {
    return (
        <section>
            <h2 className="section-title">{props.title}</h2>
            {props.content}
        </section>
    )
    
}

export default Section