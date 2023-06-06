import React from 'react';

//CartItem will inherit some features from component class of React
class CartItem extends React.Component{
    // constructor(){
    //     // Super is for calling constructor of parent class 
    //     super();
    //     this.state={
    //         price: "10000",
    //         title: "Phone",
    //         qty: 1,
    //         img: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg"
            
    //     }
    // }
    
    //Arrow function will automatically bind the function with the instance of CartItem class
//    increaseQuantity =() =>{
//         // console.log("this.state", this.state);
//         // this.state.qty+=1;
//         //this is comping from Component class of react 
//         // setState form 1
//         // Calling setState we can trigger a re-render of our component with the updated values, react will do shallow merging(It means react will change qty in this.state) and after setState react will automatically re-render our component.
//         // this.setState({
//         //     qty: this.state.qty+1
//         // });

//         // setState form 2, if we require the prevState (or values), we will use this function setState method otherwise the above object method.
//         this.setState((prevState)=>{
//             return {
//                 qty: prevState.qty+1
//             }
//         }, ()=>{
//             // the secondcall back is for up to date data as setState() function is asynchronous we don't know when it will finish, so after clicking +1 to 2, qty in this.state will come 1 only.
//             console.log("this.state", this.state);
//         });
         
//     }

//     decreaseQuantity=()=>{
//         if(this.state.qty>0){
//         this.setState((prevState)=>{
//             return {qty: prevState.qty-1}
//         })
//     }
//     }

   

    //Now even in promise also batching occurs (just for understanding) | No use of this function in code
    testing=()=>{
        const promise=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('done');
            }, 5000)
        })

        promise.then(()=>{
            this.setState({qty: this.state.qty+1});
            this.setState({qty: this.state.qty+15});
            this.setState({qty: this.state.qty+10});
        })
    }
    render(){
        console.log("this.prop", this.props);
        //object destructuring
        const {price, title, qty, img} =this.props.product;
        const increaseQuantity=this.props.onIncreaseQuantity;
        const decreaseQuantity=this.props.onDecreaseQuantity;
        const deleteQuantity=this.props.onDeleteQuantity;
        const product=this.props.product;
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
                                onClick={()=>increaseQuantity(this.props.product)}  
                            />
                           <img 
                                alt="decrease" 
                                className='action-icons' 
                                src='https://icon-library.com/images/decrease-icon/decrease-icon-8.jpg'
                                onClick={()=>decreaseQuantity(this.props.product)}
                            />
                           <img 
                                alt="delete" 
                                className='action-icons' 
                                src='https://img.icons8.com/?size=512&id=3062&format=png'
                                onClick={()=>deleteQuantity(this.props.product)}
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