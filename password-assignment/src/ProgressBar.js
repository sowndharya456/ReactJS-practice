// TODO 3: Create 'ProgressBar' as a functional component which is initially set at zero progress value. Write necessary import statement(s) too.
import React from 'react';
const ProgressBar=function(){
   return(<div>
   <progress id="file" value="32" max="100"> 32% </progress>
   <label htmlFor="file">Very weak</label>
   </div>)
}
export default ProgressBar;