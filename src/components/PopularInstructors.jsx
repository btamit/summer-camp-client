import React, { useEffect, useState } from "react";
import useInstructors from "../hooks/useInstructors";
import InstructorItem from "./InstructorItem";

const PopularInstructors = () => {
  const [instructors] = useInstructors();
  const PopularInstructors = instructors.filter(
    (instructor) => instructor.category === "popular"
  );
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {PopularInstructors.map((instructorItem) => (
        <InstructorItem
          key={instructorItem._id}
          instructorItem={instructorItem}
        ></InstructorItem>
      ))}
    </div>
  );
};

export default PopularInstructors;
