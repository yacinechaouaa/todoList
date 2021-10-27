import React, { useState } from "react";

import { connect } from "react-redux";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import { edittodo } from "./redux/action/actions";

const EdiTodo = ({ edittodo, el }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(el.title);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const HandleSubmite = (e) => {
    e.preventDefault();
    const todoToedit = { ...el, title };
    edittodo(todoToedit);
    setTitle("");
    handleClose();
  };
  return (
    <>
      <button onClick={handleShow}>✐</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleSubmite}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(null, { edittodo })(EdiTodo);
