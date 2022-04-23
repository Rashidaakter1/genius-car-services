import React from 'react';
import { useNavigate} from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
   
    const {name,img,price,description, _id}=service
    const navigate=useNavigate()
    const handletoService=(id)=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price ; {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>handletoService(_id)} className='service-btn'>Book Now {name}</button>
        </div>
    );
};

export default Service;