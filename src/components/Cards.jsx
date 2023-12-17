import React, { Fragment, useState } from 'react'


// importing components
import Card from "./Card";

const Cards = ({ courses, catagory }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  // function to return all courses in one single array
  const getCourses = () => {
    if(catagory === "All") {
      let allCourses = [];
  
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        })
      })
  
      return allCourses;
    } else {
      // main sirf specific catagory ka array hi pass krunga
      return courses[catagory];
    }
  }
  
  return (
    <Fragment>

      {
        courses.length === 0 
          ? (
            <div className='flex flex-col items-cneter space-y-2'>
              No Courses Found
            </div>
          ) : (
            <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
              getCourses().map(( course ) => {
                return (
                  <Card
                    key={ course.id }
                    course={ course }
                    likedCourses={ likedCourses }
                    setLikedCourses={ setLikedCourses }
                  />
                )
              })
            }
            </div>
          )
      }

      
    </Fragment>
  )
}

export default Cards