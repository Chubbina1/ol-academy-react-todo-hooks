import React from "react";

const Input =(props)=>{
  return (
    <div className="div">
      <input
        className="input"
        type="text"
        value={props.editValue}
        onChange={props.handleEditChange}
      />
      <button className="buttonsave" onClick={props.handleSaveEdit}>
        Save
      </button>
    </div>
  );
}



export default Input;
