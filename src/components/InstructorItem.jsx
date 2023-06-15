import React from 'react';

const InstructorItem = ({ instructorItem }) => {
  const {
    name,
    image,
    email
    
  } = instructorItem;

  return (
    <div className="bg-gray-800 p-10 font-bold">
      <img className="md:h-40 my-5" src={image} alt="" />
      <h2>Instructor-Name : {name}</h2>
      <h2>Email : {email}</h2>
    </div>
  );
};

export default InstructorItem;