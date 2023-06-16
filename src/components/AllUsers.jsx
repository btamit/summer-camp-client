import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
    const {data:users = [],refetch} = useQuery(['users'], async() =>{
        const res = await axiosSecure.get("/users")
        return res.data;
    })
    const handleMakeAdmin = (user) =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is an Admin Now !!`,
                  showConfirmButton: false,
                  timer: 1500,
                });
            }
        })
    }
    const handleDelete = () =>{

    }
    return (
      <div className="w-full bg-gray-700 ml-5 p-5">
        <Helmet>
          <title>Martials Arts | All users</title>
        </Helmet>
        <h2 className="text-5xl font-bold my-4">
          Total Users : {users.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost btn-xs"
                    >
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

export default AllUsers;