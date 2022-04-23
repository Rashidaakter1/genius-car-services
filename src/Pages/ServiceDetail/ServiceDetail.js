import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()

    const [service,setService]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h1>this is service Detail : {service.name}</h1>
            <Link  to='/checkout' ><button className='text-center' >Proceed to Checkout </button></Link>
        </div>
    );
};

export default ServiceDetail;