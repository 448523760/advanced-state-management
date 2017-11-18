//Observables with React

//functional components
const Counter = observer(({ counter })    (
    <section>
        <h1>Count: {counter.count} </h1>
        <button onClick={counter.increment}>Increment</button>
        <button onClick={counter.decrement}>Decrement</button>
        <button onClick={counter.reset}>Reset</button>
    </section>
));

//class components
@observer class Counter extends Component {
    render() {
        const { counter } = this.props;
        return (
            <section>
                <h1>Count: {counter.count}</h1>
                <button onClick={counter.increment}>Increment</button>
                <button onClick={counter.decrement}>Decrement</button>
                <button onClick={counter.reset}>Reset</button>
            </section>
        )
    }
}