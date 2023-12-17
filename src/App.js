import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

// importing components
// import ScreenSize from "./components/ScreenSize";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Loader from "./components/Loader";

// importing data
import { apiUrl, filterData } from './data';

const App = () => {

  // For learning useEffect
  // const [email, setEmail] = useState("");

  // console.log(email);

  // variation 1-> Every time
  // useEffect(()=> {
  //   console.log("Event added!");
  // });

  // variation 2-> Only one time
  // useEffect(()=> {
  //   console.log("Event Added!");
  // }, []);

  // variation 3-> First time + when event happen
  // useEffect(()=> {
  //   console.log("Event Added!");
  // }, [email]);

  // variation 4-> to handle mounting and unmounting
  // useEffect(()=> {
  //   console.log("Mounted");

  //   return (()=> {
  //     console.log("unMounted");
  //   });
  // }, []);



  // MAIN APP
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catagory, setCatagory] = useState(filterData[0].title);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(apiUrl);
        // console.log(data.data);
  
        setCourses(data.data);
        setLoading(false);
      }
      catch(err) {
        toast.error("Something Went Wrong!");
        setLoading(true);
      }
    };

    fetchData();
  }, [ ]);

  return (
    // For learning useEffect
    // <Fragment>
    //   <div className='mt-5 ml-5'>
    //     <form>
    //       <input
    //         type="text"
    //         placeholder="Email"
    //         onChange={(e)=> setEmail(e.target.value)}
    //       />
    //     </form>

    //   </div>
    // </Fragment>  





    // Window size app
    // <Fragment>
    //   <ScreenSize />
    // </Fragment>  





    // MAIN APP
    <Fragment>
      <div className="min-h-screen flex flex-col bg-bgDark2">
        <Navbar />
        <div>
          <Filter 
            filterData={filterData} 
            catagory={catagory}
            setCatagory={setCatagory} 
          />
          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {
              loading ? (
                <Loader />
              ) : (
                <Cards courses={courses} catagory={catagory} />
              )
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// [timeStamp- 1:26]

export default App;
