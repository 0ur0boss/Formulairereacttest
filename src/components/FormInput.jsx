import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, id, ...inputProps } = props;

  const handleFocus = (event) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        // Quand on clique en dehors de l'input on change sont focus se qui change son css et fait apparaitre l'erreur
        onBlur={handleFocus}
        focused={focused.toString()}  
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
