import React from "react";

function ExampleComponent(props) {
    let names = props.names.map((item, i) => {
        return (`Student ${i + 1}: ${item}${i !== 2 ? ', ' : '.'}`);
    });

    return (
        <div>
            <h1>This is {names}</h1>
        </div>
    );
}

/* single property
ExampleComponent.defaultProps = {
    title: 'xxx',
}
*/

ExampleComponent.defaultProps = {
    names: ['xxx', 'yyy', 'zzz']
}

export { ExampleComponent }
