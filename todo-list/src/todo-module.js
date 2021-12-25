function todo (project, todo, description, dueDate, priority) {
    const id = new Date().getTime();

    return { project,
        todo,
        description,
        dueDate,
        priority,
        id
    };
}

export { todo };