import React from "react";



 const Footer =(props)=>{
  
  return (
    <div>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.handleChangeInputValue}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.handleonTodo();
          }
        }}
      />

      <button className="newtext" onClick={props.handleonTodo}>
        Add New Text
      </button>
      <div>
        <button className="deleteall" onClick={props.handleDeleteAll}>
          Delete All Tasks
        </button>
      </div>

      <button
        className="deletemark"
        onClick={props.handleDeleteCompleted}
      >
        Delete Completed Tasks
      </button>
    </div>
  );

 }
    


export default Footer;
