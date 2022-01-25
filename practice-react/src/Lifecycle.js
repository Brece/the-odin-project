import React from "react";
import Counter from "./components/Counter";

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: true,
            ignoreProp: 0,
            seed: 12
        }
    }

    ignoreProp = () => {
        this.setState({ ignoreProp: Math.random() });
    }

    mountCounter = () => {
        this.setState({ mount: true });
    }

    unmountCounter = () => {
        this.setState({ mount: false });
    }

    seedGenerator = () => {
        this.setState({ seed: Number.parseInt(Math.random() * 100) });
    }

    render() {
        return (
            <div className="c-lifecycle">
                <div className="o-wrap">
                    <button type="button" onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
                    <button type="button" onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
                    <button type="button" onClick={this.ignoreProp}>Ignore Prop</button>
                    <button type="button" onClick={this.seedGenerator}>Generate Seed</button>
                </div>
                {this.state.mount ? <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} /> : null}
            </div>
        );
    }
}

export default Lifecycle;
