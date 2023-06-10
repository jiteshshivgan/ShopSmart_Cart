import React from "react";
import Cart from "./Cart";
import Navbar from "./navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Firestore } from "@firebase/firestore";

class App extends React.Component {
  constructor(){
    // Super is for calling constructor of parent class 
    super();
    this.state={
    products: [],
    loading: true
      
}
}

componentDidMount(){
  firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot)=>{
      // console.log(snapshot);
      snapshot.docs.map((doc)=>{
        // console.log(doc.data());
      })
      const products=snapshot.docs.map((doc)=>doc.data());

      this.setState({products: products, loading: false})
    })
}


increaseQuantity =(product) =>{
    
     console.log("Hey increase the qty of watch", product);
     const {products} = this.state;
     const index=products.indexOf(product);
     products[index].qty=products[index].qty+1;
     this.setState({
        products: products
     })
}

decreaseQuantity=(product)=>{
   
    const {products} = this.state;
    const index=products.indexOf(product);
    if(products[index].qty>0)
         products[index].qty=products[index].qty-1;
    this.setState({
       products: products
    })
}

deleteQuantity=(product)=>{
    const {products} =this.state;
    const id=product.id;
    const items=products.filter((item)=>{
          return item.id!==product.id; 
    })
    this.setState({
        products: items
    })
}

getCartCount=()=>{
  let totalQty=0;
  this.state.products.forEach((product)=>{
    totalQty=totalQty+product.qty;
  })
  return totalQty;
}
getCartTotal=()=>{
  let totalAmount=0;
  this.state.products.forEach((product)=>{
    totalAmount=totalAmount+Number(product.price)*(product.qty);
  })
  return totalAmount;
}
  render(){
    const {loading}=this.state;
  return (
    <div className="App">
      <Navbar totalQty={this.getCartCount()}/>
      <Cart 
          products={this.state.products}
          onIncreaseQuantity={this.increaseQuantity} 
          onDecreaseQuantity={this.decreaseQuantity} 
          onDeleteQuantity={this.deleteQuantity}
          />
        {loading && <h1>Loading Products ...</h1>}
      <div style={{fontSize:30, fontWeight: 400, padding: 10}}>Total Amount: {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
