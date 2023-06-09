import React from 'react';
import CartItem from './CartItem';

//CartItem will inherit some features from component class of React
function Cart(props){
     const {products}=props;
        return(

            <div className='cart'>
                
                {products.map((product, index)=>{
                    return <CartItem product={product} key={index} 
                       onIncreaseQuantity={props.onIncreaseQuantity} 
                       onDecreaseQuantity={props.onDecreaseQuantity} 
                       onDeleteQuantity={props.onDeleteQuantity}
                       />
                })}
                
                
                
                
            </div>
        );
    }




export default Cart;