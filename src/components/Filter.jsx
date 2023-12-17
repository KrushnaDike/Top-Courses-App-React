import React, { Fragment } from "react";

const Filter = ({ filterData, catagory, setCatagory }) => {

  const filterHandler = (title)=> {
    setCatagory(title);
  };

  return (
    <Fragment>
      <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
        {filterData.map((item) => {
          return (
            <button 
              key={item.id} 
              className={`
                text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                ${catagory === item.title ? "bg-opacity-80 border-white" : "bg-opacity-40 border-transparent"}
              `}
              onClick={()=> filterHandler(item.title)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Filter;
