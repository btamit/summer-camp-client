import { Helmet } from "react-helmet-async";
import useClasses from "../hooks/useClasses";
import ClassItem from "./ClassItem";

const Classes = () => {
  const [classes] = useClasses();
  return (
    <div className="my-container">
      <Helmet>
        <title>Martial Arts | Classes</title>
      </Helmet>
      <h2 className="text-center text-5xl font-extrabold mb-12">
        Our Classes
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {classes.map((classItem) => (
          <ClassItem key={classItem._id} classItem={classItem}></ClassItem>
        ))}
      </div>
    </div>
  );
};

export default Classes;
