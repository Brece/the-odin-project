import React from "react";

class Overview extends React.Component {
	render() {
		let tasks = this.props.tasks;

		return (
			<ul>
				{tasks.map((task) => {
					let id = task.id;

					return (
						<li key={id}>
							<p>Task #{tasks.indexOf(task) + 1}: {task.input}</p>
							<button type="button" onClick={ () => this.props.handleDelete(id) }>Delete task</button>
              <button type="button" onClick={ () => this.props.handleEdit(id)}>Edit Task</button>
						</li>
					);
				})}
			</ul>
		)
	}
}

export { Overview }
