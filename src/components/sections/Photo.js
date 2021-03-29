import React, { useState } from 'react'

// class Photo extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU"
//         }
//     }

//     handleChange = (event) => {
//         if (event.target.files.length > 0) {
//             this.setState({url: URL.createObjectURL(event.target.files[0])})    
//         }
//     }

//     render() {
//         return (
//             <div className="person-photo-container">
//                 <img className="person-photo" src={this.state.url} alt="profile"/>
//                 <div className="upload-photo">
//                     <input type="file" onChange={this.handleChange}/>
//                 </div>
//             </div>
//         )
//     }
// }

function Photo() {
    const [url, setUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU")

    const handleChange = event => {
        if (event.target.files.length > 0) {
            setUrl(URL.createObjectURL(event.target.files[0]))
        }
    }

    return (
        <div className="person-photo-container">
            <img className="person-photo" src={url} alt="profile"/>
            <div className="upload-photo">
                <input type="file" onChange={handleChange} />
            </div>
        </div>
    )
}

export default Photo

