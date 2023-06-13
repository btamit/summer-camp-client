import React, { useEffect, useState } from 'react';
import ClassItem from './ClassItem';

const PopularClasses = () => {
    const [PopularClasses, setPopularClasses] = useState([]);
    useEffect(()=>{
        fetch('popularClasses.json')
        .then(res => res.json())
        .then(data => {
            const popularClassItems = data.filter(classes => classes.category ==='popular')
            setPopularClasses(popularClassItems)
        })
    },[])
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                PopularClasses.map(classItem => <ClassItem key={classItem._id} classItem={classItem} ></ClassItem> )
            }
        </div>
    );
};

export default PopularClasses;