import React from 'react';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], name: '', email: '', address:'', contactNo:'' };
    //Another approach to handle this 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO App</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={(e)=>this.handleInputChange(e)}
            value={this.state.name}
            name="name"
            placeholder="Name"
          />
          <input
            onChange={(e)=>this.handleInputChange(e)}
            value={this.state.email}
            name="email"
            placeholder="jon@ibm.com"
          />
          <input
            onChange={(e)=>this.handleInputChange(e)}
            value={this.state.address}
            name="address"
            type="textarea"
            placeholder="Address"
          />
          <input
            onChange={(e)=>this.handleInputChange(e)}
            value={this.state.contactNo}
            name="contactNo"
            type="number"
            placeholder="Contact Number"
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
        <br/>
        <TodoList items={this.state.items} onDelete={this.deleteHandler} onEdit={(item)=>this.editHandler(item)}/>

      </div>
    );
  }

  editHandler(item){
    this.setState(prevState => ({
      name: item.name,
      email: item.email,
      address: item.address,
      contactNo: item.contactNo,
      id:item.id
    }));
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
      address: '',
      contactNo: '',
      id:''
    }));
  }

  handleInputChange(e,attrib) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    if(this.state.id==""){
      const newItem = {
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        contactNo: this.state.contactNo,
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem)
      }));
    }else{
      for(let i=0;i<this.state.items.length;i++){
        if(this.state.items[i].id==this.state.id){
          this.state.items[i].name=this.state.name;
          this.state.items[i].email=this.state.email;
          this.state.items[i].address=this.state.address;
          this.state.items[i].contactNo=this.state.contactNo;
          this.setState(this.state);
        }
      }
    }
    this.setState(prevState => ({
      name: '',
      email: '',
      address: '',
      contactNo: '',
      id:''
    }));

  }
}

class TodoList extends React.Component {
  
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody className="appList">
        {this.props.items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.contactNo}</td>
              <td> <button onClick={()=>this.props.onDelete(item.id)}>delete</button></td>
              <td> <button onClick={()=>this.props.onEdit(item)}>edit</button></td>
            </tr>
        ))}
        </tbody>
      </table>
    );
  }
}