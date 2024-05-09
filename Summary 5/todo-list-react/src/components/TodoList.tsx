import TodoListItem from "./TodoListItem";


export default function TodoList({ todos , deleteTodo , toggleTodoStatus , editTodoTitle}:{todos:any,deleteTodo:Function,toggleTodoStatus:Function,editTodoTitle:Function}) {


    return (
        <ul className="list-reset">
            { todos.map( (todo:any, index:number) => <TodoListItem key={index} todo={todo} deleteTodo={deleteTodo} toggleTodoStatus={toggleTodoStatus} editTodoTitle={editTodoTitle} />) }
        </ul>
    )
}
