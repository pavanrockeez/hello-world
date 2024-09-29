import React from 'react'

const Greet = (props) => {
    const onClickHandler =()=>{
        console.log("button clicked");
    }
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}

      <button onClick={onClickHandler}>Click Me</button>
    </div>
  )
}

// import React, { Component } from 'react'
// class Greet extends Component {
//     constructor() {
//         super();
//         this.state = {
//             message: 'Welcome User'
//         }
//     }
//     changeMessage() {
//         this.setState({
//             message: 'User Subscribed Successfully'
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p>{this.state.message}</p>
//                 <button onClick={() => this.changeMessage()}>Subscribe</button>
//             </div>
//         )
//     }
// }

export default Greet;
