import React from 'react';
import CartItem from './CartItem';

//CartItem will inherit some features from component class of React
class Cart extends React.Component{
    constructor(){
        // Super is for calling constructor of parent class 
        super();
        this.state={
        products: [
            {
            price: "10000",
            title: "Phone",
            qty: 1,
            img: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg",
            id: 1
            
            },
            {
                price: "1000",
                title: "Watch",
                qty: 1,
                img: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg",
                id: 2
            },
            {
                    price: "9000",
                    title: "Laptop",
                    qty: 1,
                    img: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg",
                    id: 3
            }
    ]}
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
    
    
    
    render(){
        const {products}=this.state;
        return(

            <div className='cart'>
                
                {products.map((product, index)=>{
                    return <CartItem product={product} key={index} onIncreaseQuantity={this.increaseQuantity} onDecreaseQuantity={this.decreaseQuantity} onDeleteQuantity={this.deleteQuantity}/>
                })}
                
                
                
                
            </div>
        );
    }
}



export default Cart;