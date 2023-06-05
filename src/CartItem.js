import React from 'react';

//CartItem will inherit some features from component class
class CartItem extends React.Component{
    render(){
        return(
            <>
                <div className='cart-item'>
                    <div className='left-block'>
                        <img style={styles.image} alt='Item' src='mac.jpg'/>
                    </div>
                    <div className='right-block'>
                        <div style={{fontSize:25 }}>Phone</div>
                        <div style={{color:'#777' }}>Rs 10,000</div>
                        <div style={{color:'#777' }}>Qty: 1</div>
                        <div className='cart-item-actions'>
                           {/* Buttons */}
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