import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Modal, Table } from "react-bootstrap";

import TodoItem from "./components/TodoItem";
import FormAdd from "./components/FormAdd";
import { removeTodo } from "./redux/slice/todo";

function App() {

  const dispatch = useDispatch()

  const todoList = useSelector(state => state.todo.list)

  const [show, setShow] = useState(false)
  const [deleteTodo, setDeleteTodo] = useState({})

  // Эта функция для модального окна
  const handleClickRemove = (todo) => {
    setShow(true)
    setDeleteTodo(todo)
  }

  // Удаление задачи 
  const handleRemove = () => {
    dispatch(removeTodo(deleteTodo))
    setShow(false)
  }

  return (
    <div className="App">
      <Container>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Удалить задачу?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Вы действительно хотите удалить эту задачу?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Закрыть
            </Button>
            <Button variant="primary" onClick={handleRemove}>
              Удалить
            </Button>
          </Modal.Footer>
        </Modal>
        <FormAdd />
        <h1 className="title">Todo App</h1>
        <Table striped hover bordered style={{ textAlign: "center", verticalAlign: "middle" }}>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Статус</th>
              <th colSpan={2}>Действие</th>
            </tr>
          </thead>
          <tbody>
            {todoList && todoList.map(todo => {
              return (
                <TodoItem 
                  key={todo.id} 
                  id={todo.id}
                  name={todo.name} 
                  isDone={todo.isDone} 
                  createdAt={todo.createdAt}
                  updatedAt={todo.updatedAt}
                  onClickRemove={handleClickRemove}
                />
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
