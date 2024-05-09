import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

export default function Todos() {
    const [todos, setTodos] = useState<Object[]>([
        {
            id: uuidv4(),
            title: 'go to school and read books',
            status: true
        },
        {
            id: uuidv4(),
            title: 'go to gym at 17:00',
            status: false
        }
    ]);
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const onInputNewTodoChangeHandler = (event:any) => {
        setNewTodoTitle(event.target.value)
    }

    const addNewTodoHandler = (event:any) => {
        if (event.key === 'Enter' && newTodoTitle !== "") {
            let modifyTodo: {
                id: String,
                title: String,
                status: Boolean,
            }
            setTodos([
                ...todos,
                modifyTodo = {
                    id: uuidv4(),
                    title: newTodoTitle,
                    status: false,
                }
            ])

            setNewTodoTitle("");
        }
    }

    const deleteTodoHandler = (todo: any) => {
        let newTodos = todos.filter((todoItem:any) => {
            return todo.id != todoItem.id;
        })

        setTodos(newTodos);
    }

    const toggleTodoStatusHandler = (todo: any) => {
        let newTodos = todos.map((todoItem: any) => {
            if (todo.id === todoItem.id) {
                todoItem.status = !todoItem.status
            }

            return todoItem;
        })

        setTodos(newTodos);
    }

    const editTodoTitleHandler = (todo: any, newTitleValue:String) => {
        let newTodos = todos.map((todoItem: any) => {
            if (todo.id === todoItem.id) {
                todoItem.title = newTitleValue
            }

            return todoItem;
        })

        setTodos(newTodos);
    }


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?"
                        onChange={onInputNewTodoChangeHandler}
                        onKeyDown={addNewTodoHandler}
                        value={newTodoTitle}
                        className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                </div>
                <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodoStatus={toggleTodoStatusHandler} editTodoTitle={editTodoTitleHandler} />
            </div>
        </div>
    )
}
