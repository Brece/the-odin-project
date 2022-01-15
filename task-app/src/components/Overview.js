import React from "react";

class Overview extends React.Component {
	render() {
		let task = this.props.tasks.map((task) => {
			let id = task.id;

			return (
				<li key={id.toString()}>
					<p>Task: {task.input}</p>
					<button type="button" onClick={ () => this.props.handleDelete(id) }>Delete task</button>
				</li>
			);
		})
		return (
			<ol>{task}</ol>
		)
	}
}

export { Overview }
