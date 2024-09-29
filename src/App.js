import React from 'react'
import './App.css';
import Greet from './components/Greet';
import Parent from './components/Parent';


const App = () => {
  return (
    <div>
      <div className="App">
        {/* <Greet name="Pavan"><p>Child Props</p></Greet> */}
        <Parent />
      </div>
    </div>
  )
}
// import React, { Component } from 'react'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div className="App">
//             <Greet name="Pavan"></Greet>
//          </div>
//       </div>
//     )
//   }
// }


export default App;
