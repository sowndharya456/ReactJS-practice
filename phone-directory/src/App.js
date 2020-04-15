import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="component-body-container">
        <button className="addBtn" >Add</button>
        <div className="grid-container">
          <span >Name</span><br />
          <span >Phone</span>
        </div>
        </div>
      </div>
    );
  }
}
export default App;


// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//     // TODO 1: Remove heading tag with text "Hello World"
//     // TODO 2: Render a textbox (in place of heading tag) with type text and placeholder "Your Name"
//     <div >
//     <input type = "text" placeholder = "Enter text" />
//     </div>
// );

// import React , {Component} from 'react';
// import Header from "./Header";
// import Password from "./Password";
// import ProgressBar from "./ProgressBar";
// import StrengthCriteria from "./StrengthCriteria";

// class App extends Component{
//     render(){
//         return(
//           <div>
//             <Header /><br />
//             <Password />
//             <ProgressBar />
//             <StrengthCriteria />
            
//             </div>
//             );
//     }
// }
// export default App;