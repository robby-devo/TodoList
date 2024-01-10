import { useState } from "react";

const Item = (props) => {
  console.log("props", props);

  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(props.text);

  return (
    <div className="item">
      <div
        className="circle"
        onClick={() => {
          props.updatedCompleted(props.id);
        }}
      >
        {props.completed ? <span>&#10003;</span> : ""}
      </div>
      <div
        className={props.completed ? "strike" : ""}
        // onClick={()=>{
          
        // }}
        onDoubleClick={() => {
          if (!props.completed) {
            setEdit(true);
          }
        }}
      >
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}

            onBlur={()=>{
                setEdit(false)
                props.updatedText(props.id,editText)
            }}
          />
        ) : (
          props.text
        )}
      </div>

      <div
        className="close"
        onClick={() => {
          props.deleteTodo(props.id);
        }}
      >
        X
      </div>
    </div>
  );
};

export default Item;
