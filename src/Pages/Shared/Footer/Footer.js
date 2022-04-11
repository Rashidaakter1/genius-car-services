import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <h6 className='text-center mt-5'>Copyright @ {year} </h6>
        </div>
    );
};

export default Footer;