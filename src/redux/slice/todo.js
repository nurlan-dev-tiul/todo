import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: { list: [] },
    reducers: {
        addTodo(state, action) {
            state.list.push(action.payload)
        },
        removeTodo(state, action) {
            state.list = state.list.filter(todo => todo?.id !== action.payload?.id)
        },
        updateStatus(state, action) {
            const updatedAt = (new Date().toLocaleString())
            state.list = state.list.map(todo => todo.id === action.payload.id ? { ...todo, isDone: true, updatedAt } : todo)
        }
    }
})

const { actions, reducer } = todoSlice

export const { addTodo, removeTodo, updateStatus } = actions

export default reducer