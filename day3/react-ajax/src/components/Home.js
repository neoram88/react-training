import React, { Component } from 'react';
import Menu from './Menu';
import TodoList from './TodoList';
import service from '../services/CustomerService';

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = { items: [], name: '', email: '', address:'', contactNo:'' };
      service.getCustomers().then((data)=>{
        this.setState ({ items: data, name: '', email: '', address:'', contactNo:'' });
      })
      //Another approach to handle this 
      this.handleSubmit = this.handleSubmit.bind(this);
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
     service.deleteCustomerbyId(index).then((result)=>{
      this.setState(prevState => ({
        items:result,
        name: '',
        email: '',
        address: '',
        contactNo: '',
        id:''
      }));
     })
    }
  
    handleInputChange(e,attrib) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.name.length) {
        return;
      }
      if(this.state.id==undefined || this.state.id==""){
        const newItem = {
          name: this.state.name,
          email: this.state.email,
          address: this.state.address,
          contactNo: this.state.contactNo,
          id: this.state.items.length+1
        };

        service.addCustomers(newItem).then((resp)=>{
          service.getCustomers().then((data)=>{
            this.setState({
              items: data
            });
          })
          console.log("Added data to Backend");
        });
      }else{
        for(let i=0;i<this.state.items.length;i++){
          if(this.state.items[i].id==this.state.id){
            this.state.items[i].name=this.state.name;
            this.state.items[i].email=this.state.email;
            this.state.items[i].address=this.state.address;
            this.state.items[i].contactNo=this.state.contactNo;
            this.setState(this.state);
            service.updateCustomerData(this.state.items[i]).then(()=>{
              console.log("updated the reocrd");
            });
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

   render() {
      return (
         <div>
            <Menu></Menu>
            <h2>Home</h2>
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
            Add/Update
          </button>
        </form>
        <br/>
        <TodoList items={this.state.items} onDelete={(id)=>this.deleteHandler(id)} onEdit={(item)=>this.editHandler(item)}/>
         </div>
      );
   }
}
export default Home;