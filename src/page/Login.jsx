import Registercomponent from '../Components/forms/Registercomponent'
import React, { useState } from "react";
import Logincomponent from "../Components/forms/Logincomponent"

const Register = () => {
    const [currentForm, setCurrentForm] = useState('Logincomponent');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      {
        currentForm === "Logincomponent" ? <Logincomponent onFormSwitch={toggleForm} /> : <Registercomponent onFormSwitch={toggleForm} />
      }
    </div>
  );

}

export default Register
