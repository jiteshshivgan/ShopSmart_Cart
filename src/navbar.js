import React from 'react';

//CartItem will inherit some features from component class of React
const Navbar =(props)=>{
    const {totalQty}=props;
    return(
            <>
                <div style={styles.nav}>
                    <div style={styles.cartIconContainer}>
                        <img src='https://img.icons8.com/?size=512&id=9671&format=png' alt='Cart-Icon' style={styles.cartIcon}/>
                        <span style={styles.cartCount}>{totalQty}</span>

                    </div>
                </div>
            
            </>
        );
    }


const styles={
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}

export default Navbar;