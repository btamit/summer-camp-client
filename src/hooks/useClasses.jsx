// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  // const [classes, setClasses] = useState([]);
  // const [loading, setLoading] = useState([true])
  // useEffect(() => {
  //   fetch("http://localhost:5000/classes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClasses(data);
  //       setLoading(false);
  //     });
  // }, []);


  const {data: classes = [], isloading: loading} = useQuery({
    queryKey:['classes'],
    queryFn: async() =>{
      const res = await fetch("http://localhost:5000/classes");
      return res.json();
    }
  })
  return[classes,loading]
};

export default useClasses;
