import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='services' className='container'>
            <h1 className='mt-5 text-center text-primary mb-5' > Our Services : {services.length}</h1>
            <div className="service-container">
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;