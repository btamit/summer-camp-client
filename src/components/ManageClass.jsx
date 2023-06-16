import React from 'react';
import useClasses from '../hooks/useClasses';

const ManageClass = () => {
    const[classes] = useClasses();
    return (
      <div>
        <h2 className="text-5xl font-bold text-center">Manage Class : {classes.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem,i) => (
                <tr key={classItem._id}>
                  <td>
                   {i+1}
                  </td>
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
                        <div className="font-bold">Hart Hagerty</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, 
                  </td>
                  <td>Purple</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">details</button>
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