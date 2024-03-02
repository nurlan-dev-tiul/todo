import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/slice/todo";

export default function FormAdd() {

    const [todo, setTodo] = useState("")

    const dispatch = useDispatch()

    // Функция для добавления задачи
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 888888) + 100000,
            name: todo,
            isDone: false,
            createdAt: (new Date().toLocaleString())
        }
        // Отправка на redux
        dispatch(addTodo(newTodo))
        setTodo('') // очистка формы
    }

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <div className="d-flex">
                <Form.Group style={{width: "100%"}}>
                    <Form.Control 
                        required
                        placeholder="Написать задачу. . ."
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="ms-2">
                    <Button type="submit">Добавить</Button>
                </Form.Group>
            </div>
        </Form>
    )
}