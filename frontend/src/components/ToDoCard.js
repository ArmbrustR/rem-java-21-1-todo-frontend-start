function ToDoCard({description, status, id}) {
    return (
        <article>
            <h2>{description}</h2>
            <p>
                <h4>{status}</h4>
            </p>
            <button>Advance</button>
            <button>Delete</button>
        </article>
    )
}

export default ToDoCard
