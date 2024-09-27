import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const Course_Detail = () => {
  console.log(useLocation());
  
  const arr = [
    {
      id: 'MERN001',
      course_name: 'Mern_Stack',
      price: '1000',
      duration: '5 Month',
    },
    {
      id: 'JAVA002',
      course_name: 'Java Full Stack',
      price: '20000',
      duration: '5 Month',
    },
    {
      id: 'PY003',
      course_name: 'Python',
      price: '40000',
      duration: '5 Month',
    },
    {
      id: 'DOT004',
      course_name: 'Dot Net',
      price: '100',
      duration: '5 Month',
    },
  ];

  const { id } = useParams();
  const course_detail = arr.filter((data) => data.id === id);

  if (course_detail.length === 0) {
    return <h1>Course not found</h1>;
  }

  return (
    <>
      <div>
        <h1>Course ID: {id}</h1>
        <h2>Course Name: {course_detail[0].course_name}</h2>

        {location.pathname!="/course/PY003" &&(<>
          <h2>Duration: {course_detail[0].duration}</h2>
          <h2>Price: {course_detail[0].price}</h2>
        </>)}
        
      </div>
      <button>
        <Link to="/course" style={{ textDecoration: 'none', color: 'black' }}>
          All Courses
        </Link>
      </button>
    </>
  );
};

export default Course_Detail;
