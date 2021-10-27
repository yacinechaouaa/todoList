import React from "react";
import { useState } from "react";
import { form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addtodo } from "./redux/action/actions";

const AddTodo = ({ addtodo }) => {
  const [title, setTitle] = useState("");
  const handlSubmit = () => {
    let todotoadd = {
      title: title,
      id: Math.random(),
      complete: false,
    };
    console.log(todotoadd);
    addtodo(todotoadd);
    setTitle("");
  };
  return (
    <div className="add">
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="add your todo here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
        </div>
      </form>

      <Button
        style={{ marginLeft: "10px" }}
        variant="info"
        type="submit"
        className="mb-2"
        onClick={handlSubmit}
      >
        +
      </Button>
    </div>
  );
};

export default connect(null, { addtodo })(AddTodo);
