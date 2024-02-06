//pass todo as array which consists like below:
/*  todos=[{
    title:"goto gym",
    description:"goto  gym"
 }]
 */

export function Todos({ todos }) {
    return <div>
        {todos.map(function (todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <div>
                    <button onClick={() => {
                        alert("done");
                    }} >{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                </div>
            </div>
        })}
    </div>
} 