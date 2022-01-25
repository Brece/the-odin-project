import React from "react";

// this is only for triggering 'componentDidCatch'
const ErrorComponent = ({test}) => <button type="button" onClick={test()}>test</button>;

class Counter extends React.Component {
    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = {
            counter: 0,
            seed: 0
        }   
    }

    static getDerivedStateFromProps(props, state) {
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null;
    }

    increment = () => {
        this.setState( {counter : this.state.counter + 1 });
    }

    decrement = () => {
        this.setState( {counter : this.state.counter - 1 });
    }

    componentDidMount() {
        console.log('Component did mount');
        console.log('----------------------');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log('Should component update - DO NOT RENDER');
            console.log('----------------------');
            return false;
        }
        console.log('Should component update - RENDER');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get snapshot before update');
        return null;
    }

    render() {
        console.log('Render');

        console.log(this.state.info);
        if (this.state.error) {
            return <div>We have encountered an error: {this.state.error.message}</div>
        }

        return (
            <div className="o-wrap c-counter">
                Counter: {this.state.counter}
                <ErrorComponent />
                <div>
                    <button type="button" onClick={this.increment}>Increment</button>
                    <button type="button" onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update');
        console.log('----------------------');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
        console.log('----------------------');
    }

    componentDidCatch(error, info) {
        console.log('Component did catch');
        
        this.setState({ error, info });
    }
}

export default Counter;
