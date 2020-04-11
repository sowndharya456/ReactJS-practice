import React from 'react';

class App extends Component{
   render() {
      return (
        <div>
          Phone Directory
          <div className="header">
            Phone Directory
          </div>
          <button>Add</button>
          <div>
            <span>Name</span><br />
            <span>Phone</span>
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