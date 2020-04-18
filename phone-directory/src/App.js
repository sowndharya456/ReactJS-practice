import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {

  render() {

    let subscribers = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Srishti Gupta",
        phone: "9999999999"
      }
    ];

    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            })
          }
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

