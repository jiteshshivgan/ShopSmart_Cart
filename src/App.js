import React from "react";
import Cart from "./Cart";
import Navbar from "./navbar";

class App extends React.Component {
  constructor(){
    // Super is for calling constructor of parent class 
    super();
    this.state={
    products: [
        {
        price: "10000",
        title: "Phone",
        qty: 1,
        img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        id: 1
        
        },
        {
            price: "1000",
            title: "Watch",
            qty: 1,
            img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=704&q=80",
            id: 2
        },
        {
                price: "9000",
                title: "Laptop",
                qty: 1,
                img: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1207&q=80",
                id: 3
        }
]
      
}
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
  return (
    <div className="App">
      <Navbar totalQty={this.getCartCount()}/>
      <Cart 
          products={this.state.products}
          onIncreaseQuantity={this.increaseQuantity} 
          onDecreaseQuantity={this.decreaseQuantity} 
          onDeleteQuantity={this.deleteQuantity}
          />
      <div style={{fontSize:30, fontWeight: 400, padding: 10}}>Total Amount: {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
