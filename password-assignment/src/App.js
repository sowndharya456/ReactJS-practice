import React , {Component} from 'react';
import Header from "./Header";
import Password from "./Password";
import ProgressBar from "./ProgressBar";
import StrengthCriteria from "./StrengthCriteria";

class App extends Component{
    render(){
        return(
          <div>
            <Header /><br />
            <Password />
            <ProgressBar />
            <StrengthCriteria />
            
            </div>
            );
    }
}
export default App;