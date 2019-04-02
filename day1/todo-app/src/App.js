import React from 'react';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], name: '', email: '' };
    //Another approach to handle this 
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} onDelete={this.deleteHandler}/>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <input
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  deleteHandler(index){
    let newTable=[];
    this.state.items.forEach(item =>{
      if(item.id!==index){
        newTable.push(item);
      }
    });
    this.setState(prevState => ({
      items:newTable,
      name: '',
      email: '',
    }));
  }

  UNSAFE_componentWillReceiveProps(){
    console.log("UNSAFE_componentWillReceiveProps>>");
  }

  componentDidMount(){
    console.log("componentDidMount>>");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate>>");
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps>>");
  }

  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps>>");

  }


  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      email: this.state.email,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      name: '',
      email: '',
    }));
  }
}

class TodoList extends React.Component {
  
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>Name: {item.name} Email: {item.email}
            <button onClick={()=>this.props.onDelete(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    );
  }
}