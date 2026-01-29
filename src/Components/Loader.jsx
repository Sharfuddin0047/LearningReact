const Loader = () => {
  const LoaderStyles = {
    height: "100px",
    width: "100px",
    border: "20px solid gainsboro",
    borderTop: "20px solid gray",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
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
      <div style={LoaderStyles}></div>
    </>
  );
};
export default Loader;
