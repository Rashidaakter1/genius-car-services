import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h1>this is service Detail : {serviceId}</h1>
            <Link  to='/checkout' ><button className='text-center' >Proceed to Checkout </button></Link>
        </div>
    );
};

export default ServiceDetail;