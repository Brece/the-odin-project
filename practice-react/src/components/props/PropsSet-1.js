import React from "react";

/*
class DemoComponent extends React.Component {
    render() {
        return (
            <div>
                xxx
                <h2>Hello {this.props.user}</h2>
                <h3>Welcome to GeeksForGeeks</h3>
            </div>
        );
    }
}
*/

function Parent(props) {
    return (
        <div>
            <h2>You are inside Parent component</h2>
            <Child name='User' userId='55555' />
        </div>
    );
}

function Child(props) {
    return (
        <div>
            <h2>Hello {props.name}</h2>
            <h3>You are inside Child component</h3>
            <h3>Your user id is: {props.userId}</h3>
        </div>
    )
}

export { Parent }
