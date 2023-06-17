import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const ClassItem = ({classItem}) => {
    const {
        _id,
      className,
      image,
      students,
      category,
      description,
      price,
      instructor,
      availableSeats
    } = classItem;

 const { user } = useContext(AuthContext);
 const [,refetch] = useCart();
const navigate = useNavigate();
const location = useLocation();
    const handleAddToCart = item =>{
        console.log(item)
        if(user && user.email){
            const classCartItem = {classItemId:_id, email:user.email, className,image,price,instructor}
            fetch("https://summer-camp-school-server-smoky.vercel.app/carts", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(classCartItem),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                    refetch();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Class added on the cart",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
        }
        else{
            Swal.fire({
              title: "Please Login to add class",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Login Now !",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login',{state:{from:location}})
              }
            });
        }
    }
    return (
        <div className='bg-gray-800 p-10 font-bold'>
            <img className='md:h-40 my-5' src={image} alt="" />
            <h2>ClassName : {className}</h2>
            <h2>Instructor Name : {instructor}</h2>
            <h2>AvailableSeats : {availableSeats}</h2>
            <h4>Students : {students}</h4>
            <h5>Category : {category}</h5>
            {/* <h6>Description : {description}</h6> */}
            <h1>Price : $ {price} / month</h1>
            <button onClick={() => handleAddToCart(classItem)} className='btn bg-slate-700 my-5'>Add Class</button>
        </div>
    );
};

export default ClassItem;