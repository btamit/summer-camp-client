import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../hooks/useAxiosSecure";

const AddClass = () => {
//   const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
//   const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data);
  }
//     const formData = new FormData();
//     formData.append("image", data.image[0]);
  
//     fetch(img_hosting_url, {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((imgResponse) => {
//         if (imgResponse.success) {
//           const imgURL = imgResponse.data.display_url;
//           const { name, price, category, recipe } = data;
//           const newItem = {
//             name,
//             price: parseFloat(price),
//             category,
//             recipe,
//             image: imgURL,
//           };
//           console.log(newItem);
//           axiosSecure.post("/menu", newItem).then((data) => {
//             console.log("after posting new menu item", data.data);
//             if (data.data.insertedId) {
//               reset();
//               Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: "Item added successfully",
//                 showConfirmButton: false,
//                 timer: 1500,
//               });
//             }
//           });
//         }
//       });
//   };

  return (
    <>
        <h2 className="text-5xl font-bold text-center mb-5">Add Class</h2>
      <div className="w-full px-10 bg-gray-700 ml-5 p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name*</span>
            </label>
            <input
              type="text"
              placeholder="Instructor Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">
                Instructor Email*
              </span>
            </label>
            <input
              type="text"
              placeholder="Instructor Email"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Class Name*</span>
              </label>
              <select
                defaultValue="Pick One"
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>Choose One</option>
                <option>Karate</option>
                <option>Taekwondo</option>
                <option>Judo</option>
                <option>Kung Fu</option>
                <option>Brazilian Jiu-Jitsu</option>
                <option>Muay Thai</option>
                <option>Boxing</option>
                <option>Capoeira</option>
                <option>Krav Maga</option>
                <option>Kickboxing</option>
                <option>Aikido</option>
                <option>Wing Chun</option>
              </select>
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="number"
              {...register("availableseats", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Class Image*</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>
          <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
        </form>
      </div>
    </>
  );
};

export default AddClass
