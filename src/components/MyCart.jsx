import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
const MyCart = () => {
    const [cart] = useCart();
    const totalClass = cart.reduce((sum,allClass) => allClass.price + sum,0)
    return (
      <div>
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
                    <button className="btn btn-ghost btn-xs">
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