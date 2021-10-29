import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputGroupText,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { TodoContext } from "../../context/TodoContext";

const EditModal = ({ visibility, setVisibility, selectedTodoId }) => {
  const { findTodoText, changeTodoText } = useContext(TodoContext);
  const [todoText, setTodoText] = useState(findTodoText(selectedTodoId));

  useEffect(() => {
    setTodoText(findTodoText(selectedTodoId));
  }, [selectedTodoId, findTodoText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeTodoText(selectedTodoId, todoText);
    setVisibility(false);
  };

  return (
    <Modal isOpen={visibility} toggle={() => setVisibility(false)} centered>
      <ModalHeader toggle={() => setVisibility(false)}>
        Edit Selected Todo
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroupText>Change Todo's Text</InputGroupText>
            <Input
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
          </InputGroup>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSubmit}>Edit</Button>
        <Button onClick={() => setVisibility(false)}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditModal;
