// Create an <ul> component called GroceryList
// render (using ReactDom.render) to append GroceryList component to div#app
// Create two new <li> components Cucumbers, and Kale 

// Interact with the clicked item to show it's been selected
var GroceryList = (props) => (
    <ul>
        {props.items.map( (item) =>
            <GroceryListItem item={item} /> 
        )}
    </ul>
);

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }
    onHover() {
        this.setState({
            hover: !this.state.hover
        });

    }
    render() {
        var style = {
            fontWeight: this.state.hover ? 'bold' : 'normal'
        }
        return (
            <li style={style} onMouseOver={this.onHover.bind(this)}>{this.props.item}</li>
        );
    }
}


ReactDOM.render(<GroceryList items={['kale', 'cucumber']} />, document.getElementById('app'));





/* 
var App = () => (
<div>Some cliche salutation</div>
);
*/