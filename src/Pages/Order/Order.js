import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Order = () => {
    const [user] = useAuthState(auth);
    const [orders,setOrders]=useState([]);
    const email = user.email
    // console.log(orders)
    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${email}`,{
            headers:{
                authorization:` Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user])
    return (
        <div>
            <h1>orders: {orders.length}</h1>
            {
                orders.map(order=><>
                <div>{order?.name} 
                <p>{order?.email}</p>
                </div>
                </>)
            }
        </div>
    );
};

export default Order;