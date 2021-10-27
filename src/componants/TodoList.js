import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

const TodoList = ({ list }) => {
  return (
    <div className="todo">
      {list.map((el) => (
        <TodoItem el={el} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    list: state.todo,
  };
};

export default connect(mapStateToProps)(TodoList);
