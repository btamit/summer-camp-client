import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
const MyCart = () => {
    const [cart,refetch] = useCart();
    const totalClass = cart.reduce((sum,allClass) => allClass.price + sum,0)
    const handleDelete = classItem =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
           fetch(`http://localhost:5000/carts/${classItem._id}`, {
             method: "DELETE",
           })
           .then(res => res.json())
           .then(data =>{
            if(data.deletedCount > 0){
                refetch();
                 Swal.fire(
                   "Deleted!",
                   "Your file has been deleted.",
                   "success"
                 );
            }
           })
          }
        });
    }
    return (
      <div className='w-full'>
        <Helmet>
          <title>Martial Arts | My Cart</title>
        </Helmet>
        <div className="font-semibold h-12 items-center flex justify-evenly">
          <h2 className="text-3xl font-bold text-white ">
            Total Class : {cart.length}{" "}
          </h2>
          <h2 className="text-3xl font-bold text-white my-5">
            Total Price : $ {totalClass}{" "}
          </h2>
          <button className="btn btn-sm">Make Payment</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Class-Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((classItem,i) => (
                <tr key={classItem._id}>
                  <td>
                   {i+1}
                  </td>
                  <td>
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={classItem.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                  </td>
                  <td>
                   {
                    classItem.className
                   }
                  </td>
                  <td>
                    $ {classItem.price}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(classItem)} className="btn btn-ghost btn-xs">
                        <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyCart;