// TODO
// class GroceryList extends React.Component {
//   constructor() {
//     super()
//     this.items = {
//       groceries: ['cucumber', 'kale', 'apples']
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//          {/* props take a key called 'items', property: this.items.groceries */}
//         <GroceryListItems items={this.items.groceries}/>
//       </div>
//     )
//   }
// }
class GroceryLists extends React.Component {
  constructor(props) {
    super(props)
    var allItems = ['carrot', 'appple', 'banana'];

  }
  render() {

    return (
      <div>
        <h1>Grocery List</h1>
        <ul>
          {/* // function call */}
          <li>{this.props.item}</li>
        </ul>
      </div>
    )
  }
}


var GroceryListItem = (props) => {
  <ul>
    {props.item.map(item =>
      <GroceryLists item={item} />)}
  </ul>
};

ReactDOM.render(<GroceryLists />, document.getElementById("app"));

