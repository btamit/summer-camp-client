import { Helmet } from "react-helmet-async";
import useInstructors from "../hooks/useInstructors";
import InstructorItem from "./InstructorItem";

const Instructors = () => {
  const [instructors] = useInstructors();
  return (
    <div className="my-container">
      <Helmet>
        <title>Martial Arts | Instructors</title>
      </Helmet>
      <h2 className="text-center text-5xl font-extrabold mb-5">
        {" "}
        Our Instructors
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {instructors.map((instructorItem) => (
          <InstructorItem key={instructorItem._id} instructorItem={instructorItem}></InstructorItem>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
