// TODO 4: Create 'StrengthCriteria' as a functional component to render the list of criteria for analyzing a strong password. Write necessary import statement(s) too.
import React from 'react';
const StrengthCriteria=function(){
    return (
      <div>
      <p>Minimum 8 characters long<br/>
      Atleast 1 special character<br/>
      Atleast 1 number<br/>
      Atleast 1 capital letter</p><br/>
      </div>
      )
}

export default StrengthCriteria;