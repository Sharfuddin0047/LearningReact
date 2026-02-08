import React from "react";

const Loader = () => {
  const loaderStyles = {
    height: "100px",
    width: "100px",
    border: "10px solid gainsboro",
    borderTop: "10px solid gray",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  return (
    <>
      <style>
        {`
            @keyframes spin{
                0%{
                    rotate : 0deg
                }
                100%{
                    rotate : 360deg
                }
            }
           
           `}
      </style>

      <div style={loaderStyles}></div>
    </>
  );
};

export default Loader;