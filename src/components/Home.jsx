import {  useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Helmet} from "react-helmet-async";
import PopularClasses from "./PopularClasses";


const Home = () => {
   const navigation = useNavigation();
   console.log(navigation.state);
    if(navigation.state=='loading'){
      return <LoadingSpinner></LoadingSpinner>
    }


  return (
    <>
      <Helmet>
        <title>Martial Arts | Home</title>
      </Helmet>

      <div className="bg-gray-900 my-container">
        <Carousel>
          <div>
            <img src="https://www.verywellfamily.com/thmb/IJf4HbnpOpbmRRldOkY0_TqJuLE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-91947864-584826485f9b5851e5b39270.jpg" />
          </div>
          <div>
            <img src="https://previews.123rf.com/images/jackf/jackf1704/jackf170404342/76541888-children-trying-new-martial-moves-in-practice-during-karate-class-in-a-gym.jpg" />
          </div>
          <div>
            <img src="https://www.goldmartialarts.com.au/wp-content/gallery/home-gallery/gold-martial-arts-perth-gallery2.jpg" />
          </div>
        </Carousel>
      </div>

      <div className="my-container">
        <h2 className="text-5xl font-bold text-center mb-10">
          Popular Classes
        </h2>
        <PopularClasses></PopularClasses>
      </div>
      <div className="my-container">
        <h2 className="font-bold text-5xl text-center mb-5">
          Popular Instructors
        </h2>
      </div>

      <div className="my-container">
        <div className="mb-10">
          <h2 className="text-center font-bold text-5xl">Our gallery </h2>
          <p className="text-center text-xl my-5 font-semibold">
            Join our martial art club and be healthy.
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://t3.ftcdn.net/jpg/04/67/91/78/360_F_467917866_vabaHiFKuZLtlwkABDTqahxi1ycBrAde.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://media.istockphoto.com/id/1182419812/photo/karate-players-competing-during-the-match.jpg?s=612x612&w=0&k=20&c=g8_Nf4TtWwGBEnWK9rCW9Dt6P9sFnP5-kRxXT9T-RDY="
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/karate-girl-boy-fighting-against-260nw-1498329815.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8bxDXe-MRIkyVbEE7PWZmgsbPK3iiufzHkl6TF1N7NkoCX1Yqkq1COW_qQ4kW8-O7iA&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/couple-practicing-martial-arts-outdoors-260nw-216377017.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/two-young-martial-arts-fighters-260nw-266427887.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/two-purposeful-woman-fighting-using-260nw-2019809861.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/perfect-unison-full-length-shot-260nw-2293544319.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/harder-you-train-shorter-fight-260nw-2293545119.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <br></br>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/young-adult-men-black-belt-260nw-3517022.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/ready-action-shot-two-young-260nw-2293543913.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/young-couple-doing-martial-arts-260nw-217145020.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/father-coach-training-his-son-260nw-1332277499.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://media.istockphoto.com/id/1251528531/photo/outdoor-martial-arts-practice.jpg?s=170667a&w=0&k=20&c=t7YeGUskZK8m8nLQS2R2cmRbK6lTYWH2EU3HXjI1v1k="
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/young-girl-training-karate-nature-260nw-510523549.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://www.shutterstock.com/image-photo/young-boy-practicing-martial-arts-260nw-76403182.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://media.istockphoto.com/id/638648054/photo/karate-martial-arts.jpg?s=612x612&w=0&k=20&c=kNT6Jf0GmunDBnYXgqmPdmWR0u_1z-iuOFCnDpXGSec="
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:h-56 h-20"
              src="https://st.depositphotos.com/1000291/2326/i/600/depositphotos_23269232-stock-photo-two-man-at-taekwondo-exercises.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="my-container flex gap-5 mb-12  bg-gray-800 items-center flex-col justify-between lg:flex-row">
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
            src="https://t4.ftcdn.net/jpg/04/51/72/63/360_F_451726329_HRfkLpyKsVuQN3lSn4aorzic3SzxIZFE.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
