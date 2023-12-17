import React, { Fragment } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses }) => {

  const clickHandler = ()=> {
    // logic
    if(likedCourses.includes(course.id)) {
      // pehle se like hua pada hain
      setLikedCourses((prev)=> prev.filter((cid)=> cid !== course.id));
      toast.warning("Like Removed");
    } else {
      // pehle se like nahi hua hain
      if(likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev)=> [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  };

  return (
    <Fragment>
      <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        
        <div className='relative'>
          <img src={course.image.url} alt={course.title} />

          <div className='absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-12px] grid place-items-center'>
            <button> 
              {
                likedCourses.includes(course.id) 
                  ? ( <FcLike fontSize={'1.75rem'} onClick={ clickHandler } /> ) 
                  : ( <FcLikePlaceholder fontSize={'1.75rem'} onClick={ clickHandler } /> )
              }
            </button>
          </div>
        </div>

          <div className='p-4'>
            <div className='text-white font-semibold text-lg leading-6'> { course.title } </div>
            <div className='mt-2 text-white'> 
              {
                course.description.length > 100
                  ? (course.description.substr(0, 100)) + "..."
                  : (course.description)
              }
            </div>
          </div>

      </div>

    </Fragment>
  );
};

export default Card;