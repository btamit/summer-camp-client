import React from 'react';
import useClasses from '../hooks/useClasses';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ManageClass = () => {
    const[classes, ,refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();
    const handleDelete = (classItem) => {
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
          axiosSecure.delete(`/classes/${classItem._id}`).then((res) => {
            console.log("deleted res", res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      });
    };
    return (
      <div>
        <h2 className="text-5xl font-bold text-center">
          Manage Class : {classes.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name & Image</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Availabe Seats</th>
                <th>Price</th>
                <th>Pending</th>
                <th>Approved</th>
                <th>Denied</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem, i) => (
                <tr key={classItem._id}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={classItem.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{classItem.className}</div>
                      </div>
                    </div>
                  </td>
                  <td>{classItem.instructor}</td>
                  <td>{classItem.email}</td>
                  <td>{classItem.availableSeats}</td>
                  <td className="text-right">$ {classItem.price}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Pending</button>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Approved</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(classItem)}
                      className="btn btn-ghost btn-xs"
                    >
                      Denied
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

export default ManageClass;