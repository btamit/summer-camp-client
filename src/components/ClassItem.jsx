import React from 'react';

const ClassItem = ({classItem}) => {
    const {className,image,students, category, description,price} = classItem;
    return (
        <div className='bg-gray-800 p-10 font-bold'>
            <img className='md:h-40 my-5' src={image} alt="" />
            <h2>ClassName : {className}</h2>
            <h4>Students : {students}</h4>
            <h5>Category : {category}</h5>
            <h6>Description : {description}</h6>
            <h1>Price : $ {price} / month</h1>
        </div>
    );
};

export default ClassItem;