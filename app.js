var GroceryList = (props) => (    
    <GroceryListItem groceryItems={['kale', 'cucumber', 'lettuce', 'tomatoe']}/>
);

var GroceryListItem = (props) => (
    <ul>
        {props.groceryItems.map((grocery, i) => (
            <li key={i}>{grocery}</li>
        ))}
    </ul>
);

var App = () => (
    <div>
        <h2>Grocery List</h2>
        <GroceryList  />
    </div>
);
ReactDOM.render(<App />, document.getElementById('app'));


