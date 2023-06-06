import React from 'react';
import CartItem from './CartItem';

//CartItem will inherit some features from component class of React
class Cart extends React.Component{
    render(){

        return(

            <div className='cart'>
                
                
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                
                
            </div>
        );
    }
}



export default Cart;