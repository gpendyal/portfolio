import React from 'react';
import '../styles/Stars.css'; // Import the CSS file for styling


interface StarsProps {
  sars: number;
}

const getRandomPosition = () => {
  const randomX = Math.random() * 100; // Adjust as needed
  const randomY = Math.random() * 100; // Adjust as needed
  return {
    left: `${randomX}%`,
    top: `${randomY}%`,
  };
};

const Stars: React.FC<StarsProps> = ({ sars }) => {
  return (
    // <div className="stars" style={{minWidth: '100px', backgroundColor: 'red', minHeight: '100px'}}>
    <div className="stars">
      {[...Array(sars)].map((_, index) => (
        <div key={index} className="star" style={getRandomPosition()}></div>
      ))}
    </div>
  );
};

export default Stars;





// import React, { useEffect, useState } from 'react';
// import '../styles/Stars.css'; // Import the CSS file for styling

// interface StarsProps {
//   sars: number;
// }

// const getRandomPosition = () => {
//   const randomX = Math.random() * 100; // Adjust as needed
//   const randomY = Math.random() * 100; // Adjust as needed
//   return {
//     left: `${randomX}%`,
//     top: `${randomY}%`,
//   };
// };

// const Stars: React.FC<StarsProps> = ({ sars }) => {
//   const [starPositions, setStarPositions] = useState<Array<{ left: string; top: string }>>([]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const newPositions = Array(sars).fill(null).map(() => getRandomPosition());
//       setStarPositions(newPositions);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [sars]);

//   return (
//     <div className="stars">
//       {starPositions.map((position, index) => (
//         <div key={index} className="star" style={position}></div>
//       ))}
//     </div>
//   );
// };

// export default Stars;
