import React from "react";
import { connect } from "react-redux";
import { deletetodo, complete } from "./redux/action/actions";
import Edittodo from "./Edittodo";

const TodoItem = ({ el, deletetodo, complete }) => {
  return (
    <div className="each">
      <span className="title">
        {el.complete ? (
          <h2 style={{ textDecoration: "line-through" }}>{el.title}</h2>
        ) : (
          <h2>{el.title}</h2>
        )}
      </span>
      <div className="button">
        <button onClick={() => deletetodo(el.id)}>✘</button>
        <button onClick={() => complete(el.id)}> 🗹 </button>
        <Edittodo el={el} />
      </div>
    </div>
  );
};

export default connect(null, { deletetodo, complete })(TodoItem);
