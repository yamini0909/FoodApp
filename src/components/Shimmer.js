const Shimmer = () => {
  const array = Array.from(Array(10));
  return (
    <>
      <div className="shimmer-container">
        <div className="shimmer-search"></div>
        <div className="flex flex-wrap gap-5">
        {array.map((value, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
        </div>
      
      </div>
    </>
  );
};
export default Shimmer;
