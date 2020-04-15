// TODO 3: Create 'ProgressBar' as a functional component which is initially set at zero progress value. Write necessary import statement(s) too.
import React from 'react';
const ProgressBar=function(){
   return(<div className="passwordProgress">
      
            <progress id='progressBar' max='100' value='0'></progress>
            <span id='progressStatus'>Very Weak</span>
        </div>);
}
export default ProgressBar;