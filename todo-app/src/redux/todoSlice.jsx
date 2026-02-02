import { createSlice } from '@reduxjs/toolkit'


export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        value: [],
    },
    reducers: {
        createTodo: (state,action) => {
            state.value = [...state.value, action.payload];

        },
        deleteTodo: (state,action) => {
            state.value = state.value.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state,action) => {
            state.value = state.value.map((todo) => {
                if(todo.id !== action.payload.id) return todo;
                return action.payload;
            })
        }
    }
})

export default todoSlice.reducer;
export const  {createTodo, deleteTodo, updateTodo} = todoSlice.actions;