var GroceryList = (props) => (
    <ul>
        <li>{props.grocery[0]}</li>
        <li>{props.grocery[1]}</li>
    </ul>
);

var App = () => (
    <div>
        <h2>Grocery List</h2>
        <GroceryList grocery={['kale', 'cucumber']} />
    </div>
);
ReactDOM.render(<App />, document.getElementById('app'));


