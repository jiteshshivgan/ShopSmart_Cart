import React from 'react';

//CartItem will inherit some features from component class of React
class CartItem extends React.Component{
    constructor(){
        // Super is for calling constructor of parent class 
        super();
        this.state={
            price: "10000",
            title: "Phone",
            qty: 1,
            img: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg"
            
        }
    }
    //Arrow function will automatically bind the function with the instance of CartItem class
   increaseQuantity =() =>{
        console.log("this.state", this.state);
    }
    render(){
        //object destructuring
        const {price, title, qty, img} =this.state;
        return(
            <>
                <div className='cart-item'>
                    <div className='left-block'>
                        <img style={styles.image} alt='Item' src={img}/>
                    </div>
                    <div className='right-block'>
                        <div style={{fontSize:30 }}>{title}</div>
                        <div style={{color:'#777', fontSize: 20 }}>Rs {price}</div>
                        <div style={{color:'#777' }}>Qty: {qty}</div>
                        <div className='cart-item-actions'>
                           <img
                                alt="increase" 
                                className='action-icons' 
                                src='https://img.icons8.com/?size=512&id=24717&format=png'
                                onClick={this.increaseQuantity}
                            />
                           <img 
                                alt="decrease" 
                                className='action-icons' 
                                src='https://icon-library.com/images/decrease-icon/decrease-icon-8.jpg'
                            />
                           <img 
                                alt="delete" 
                                className='action-icons' 
                                src='https://img.icons8.com/?size=512&id=3062&format=png'
                            />
                        </div>
                    </div>

                </div>
            
            </>
        );
    }
}

const styles ={
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#777"
    }
}

export default CartItem;