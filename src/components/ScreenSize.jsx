import React, { useEffect, useState } from 'react'

const ScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    // Update screen size on window resize
    const resizeHandler = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', resizeHandler);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

  return (
    <div>
      <h1>Window Size is: {width}px</h1>
    </div>
  )
}

export default ScreenSize