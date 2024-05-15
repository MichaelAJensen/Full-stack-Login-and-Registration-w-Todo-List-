import ButtonDiv from "../blockElements/ButtonDiv.jsx"


const TodoLi = (props) => {
    return (
        <li className="todo-li">{props.todo.task}<ButtonDiv todo={props.todo} /></li>
    )
}


export default TodoLi