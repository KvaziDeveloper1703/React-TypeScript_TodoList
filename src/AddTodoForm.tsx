import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>("");

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    }

    const submitHandler = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addTodo(newTodo);
    }

    return <form>
        <input type="text" value = {newTodo} onChange = {changeHandler}/>
        <button type="submit" onClick = {submitHandler}>Add Todo</button>
    </form>
}