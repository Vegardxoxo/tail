import todos from "@/app/lib/placeholder-data";
export default function LatestTodos() {
    const latestTodos = todos;

    return (
        <div>
            <h2>Latest Todos</h2>
            <ul>
                {latestTodos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );

}