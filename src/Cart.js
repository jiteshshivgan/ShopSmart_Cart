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
            img: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg"
            
            },
            {
                price: "1000",
                title: "Watch",
                qty: 1,
                img: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg"
                
            },
            {
                    price: "9000",
                    title: "Laptop",
                    qty: 1,
                    img: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg"
                    
            }
    ]}
    }
    render(){
        const {products}=this.state;
        return(

            <div className='cart'>
                
                {products.map((product, index)=>{
                    return <CartItem product={product} key={index}/>
                })}
                
                
                
                
            </div>
        );
    }
}



export default Cart;