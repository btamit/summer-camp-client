// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  // const [classes, setClasses] = useState([]);
  // const [loading, setLoading] = useState([true])
  // useEffect(() => {
  //   fetch("https://summer-camp-school-server-smoky.vercel.app/classes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClasses(data);
  //       setLoading(false);
  //     });
  // }, []);


  const {data: classes = [], isloading: loading, refetch} = useQuery({
    queryKey:['classes'],
    queryFn: async() =>{
      const res = await fetch("https://summer-camp-school-server-smoky.vercel.app/classes");
      return res.json();
    }
  })
  return[classes,loading,refetch]
};

export default useClasses;
