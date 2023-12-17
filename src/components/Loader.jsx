import React, { Fragment } from 'react';

const Loader = () => {
  return (
    <Fragment>
      <div className='flex flex-col items-cneter space-y-2'>
        <div className="spinner"></div>
        <div className='text-lg text-bgDark font-semibold'>Loading...</div>
      </div>
    </Fragment>
  )
};

export default Loader;