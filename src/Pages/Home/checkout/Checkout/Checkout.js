import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';


const Checkout = () => {
    const [user] = useAuthState(auth);
    // console.log(user)
    const { serviceId } = useParams()

    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/checkout/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        const order = {
            serviceId: serviceId,
            name: event.target.name.value,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        event.target.reset();

        const url = 'http://localhost:5000/order'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            toast('your order is placed')

        console.log(order);
    }


    return (
        <div className='w-50 mx-auto'>
            <h1>You are Booking : {service.name}</h1>
            <form onSubmit={handleSubmit} >
                <input className='w-100 mb-2' type="name" v name='name' placeholder='Name' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="email" name='email' placeholder='email' value={user.email} readOnly disabled required />
                <br />

                <input className='w-100 mb-2' type="text" name='service' placeholder='service' value={service.name} readOnly disabled required />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='Phone' autoComplete='off' required />
                <br />
                <input type="submit" value="Place order" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Checkout;