import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
   const navigation = useNavigation();
   console.log(navigation.state);
    if(navigation.state=='loading'){
      return <LoadingSpinner></LoadingSpinner>
    }
  return (
    <>
      <div className="bg-gray-900 my-container">
        <div
          className="my-container flex flex-col items-center justify-between lg:flex-row"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:ml-auto py-20 sm:h-96">
              <img
                src="https://dailytimes.com.pk/assets/uploads/2022/06/07/Summer-camps-2024-0319.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="mb-10 lg:max-w-lg  lg:pr-1 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none text-white">
                Get best learning platform with{" "}
                <span className="inline-block text-blue-400"> Confidence</span>
              </h2>
              <p className="text-base text-white md:text-lg">
                Receive education through distance learning. Summer Camp School always
                try to bring latest and innovative learning system according to your
                need.
              </p>
            </div>
            <div
              className="flex flex-col items-center md:flex-row"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Link to="" className="btn md:w-auto md:mr-4 border-none">
                <div className="inline-flex items-center justify-center w-full h-full">
                  <p className="mr-3">Get Started</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container">
        <h2 className="text-5xl font-bold text-center mb-10">
          Popular Classes
        </h2>
      </div>
      <div className="my-container">
        <h2 className="font-bold text-5xl text-center mb-5">
          Popular Instructors
        </h2>
      </div>
      <div className="my-container flex gap-5 mb-12  bg-slate-700 items-center flex-col justify-between lg:flex-row">
        <div>
          <hr className=" border-4" />
          <h2 className="text-5xl font-extrabold my-5">Stay updated</h2>
          <hr className="border-4" />
          <p className="font-bold text-xl my-10">
            Do not miss any update info and content about our educational
            platform. Subscribe to out newsletter !
          </p>
          <input
            className="border border-white p-3 md:p-5"
            type="text"
            placeholder="Enter your email"
          />
          <button className="border bg-gray-600 p-3 md:p-5 font-medium">
            Subscribe Now
          </button>
        </div>
        <div>
          <img
            className=""
            src="https://img.freepik.com/free-photo/smiling-students-with-backpacks_1098-1220.jpg?w=900&t=st=1686551889~exp=1686552489~hmac=cb9f15140dcebc8e9d06dd31ca9fde6e6879a4a1593faa2b759327637610db67"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
