import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-slate-800">
      <div className="px-4 divide-y py-6 relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-6 lg:pb-1">
        <div className="md:flex gap-28">
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Summer Camp School</h2>
            <p>Our Curriculam </p>
            <p>Rewards Program</p>
            <p>Trade Program</p>
            <p>Diversity </p>
            <p>Accessbility</p>
          </div>
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Important Info</h2>
            <p> Read Our Advice</p>
            <p>Get In Touch</p>
            <p>Online Education</p>
            <p>Rules & Policy</p>
            <p> Ask Away</p>
          </div>
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Contact</h2>
            <p>
              Monday to Friday <br /> 9 a.m. - 5 p.m.
            </p>
            <div className="flex gap-3">
              <img
                className="w-5 text-white"
                src="https://cdn-icons-png.flaticon.com/128/2190/2190552.png"
                alt=""
              />
              <p>summer.camp.school@gmail.com</p>
            </div>
            <p>232, PL-Street, USA</p>
            <p>+3 543- 879 - 3245</p>
          </div>
          <div>
            <div className="flex gap-5">
              <img
                className="w-24 h-16"
                src="https://leadschool.in/wp-content/uploads/2022/05/Summer-Camp-logo-Final-01-2-e1651814252190.png"
                alt=""
              />
            </div>
            <p className="text-white my-5">
              Summer Camp is an educational platform
            </p>
            <div className="flex gap-5 mb-12">
              <Link to="https://web.facebook.com">
                <img
                  className="h-12 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  alt=""
                />
              </Link>
              <Link to="https://www.linkedin.com">
                <img
                  className="h-12 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/128/179/179330.png"
                  alt=""
                />
              </Link>
              <Link to="https://twitter.com/">
                <img
                  className="h-12 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/">
                <img
                  className="h-12 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm  text-white font-bold  flex justify-between">
          <span>Powered by Summer Camp School</span>
          <span>© 2023 Summer Camp School. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
