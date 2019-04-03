import axios from 'axios';
var customerUrl="http://localhost:3001/api/customers/";

var service ={};
var customerData=[
    {id:1,name:'Neo',email:'sds@sd.sd',contactNo:"3434",address:'fwe'},
    {id:2,name:'Trinity',email:'sds@sd.sd',contactNo:"9876",address:'dfw'}
]
localStorage.setItem('app_data',JSON.stringify(customerData));



service.getCustomers = function(){
    return new Promise((resolve,reject)=>{
        axios.get(customerUrl).then((res)=>{
            resolve(res.data);
        }).catch((error)=>{
            reject(error);
        })
    })
    // let data=localStorage.getItem('app_data');
    // return data;
}

service.addCustomers = function(data){
    // customerData.push(data);
    // localStorage.setItem('app_data',JSON.stringify(customerData));
    return new Promise((resolve,reject)=>{
        axios.post(customerUrl,data).then((res)=>{
            resolve(res.data);
        }).catch((error)=>{
            reject(error);
        })
    })
}

service.updateCustomerData = function(data){

    return new Promise((resolve,reject)=>{
        axios.put(customerUrl+data.id,data).then((res)=>{
            resolve(res.data);
        }).catch((error)=>{
            reject(error);
        })
    })
}

service.deleteCustomerbyId = function(id){
    return new Promise((resolve,reject)=>{
        axios.delete(customerUrl+id).then((res)=>{
            axios.get(customerUrl).then((res)=>{
                resolve(res.data);
            }).catch((error)=>{
                reject(error);
            })
        }).catch((error)=>{
            reject(error);
        })
    })
}

export default service;