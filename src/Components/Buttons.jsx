import React from "react";
import "../Styles/style.css";

const Buttons = (props) => {

return props.task ? (
<div className="div">
{props.task.text}
<button
className="box"
onClick={() => props.handledelete(props.task.id)}
>
Delete
</button>
<button
className="backgr"
onClick={() => props.handleComplete(props.task.id)}
>
Mark as Complete
</button>
<button className="edit" onClick={() => props.handleEdit(props.task.id)}>
Edit
</button>
<button
className="up"
onClick={() => props.handleMoveUp(props.index)}
disabled={props.index === 0}
>
Move Up
</button>
<button
className="down"
onClick={() => props.handleMoveDown(props.index)}
disabled={props.index === props.newtext.length - 1}
>
Move Down
</button>
</div>
) : (
<></>
);
};

export default Buttons;