import React from 'react';
import UseService from '../../hooks/UseService';

const Manageservice = () => {
    const [service,setService]=UseService()

    const handleDelete=(id)=>{
        const url =`http://localhost:5000/service/${id}`
        fetch(url,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const remaining = service.filter(serve=>serve._id !==id)
            setService(remaining)
        })
    }
    return (
        <div className='w-50 mx-auto'>
            {
                service.map(serve=><div
                key={serve._id}
                >
                    <p>{serve.name} <button onClick={()=>handleDelete(serve._id)} >x</button></p>
                    
                </div>)
            }
        </div>
    );
};

export default Manageservice;