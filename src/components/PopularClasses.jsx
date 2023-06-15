import React, { useEffect, useState } from 'react';
import ClassItem from './ClassItem';
import useClasses from '../hooks/useClasses';

const PopularClasses = () => {

    const [classes] = useClasses();
    const popularClasses = classes.filter(classItem => classItem.category === 'popular');
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                popularClasses.map(classItem => <ClassItem key={classItem._id} classItem={classItem} ></ClassItem> )
            }
        </div>
    );
};

export default PopularClasses;