// // import "./App.css";
// // import { useState } from "react";
// // function App() {
// //   const [count, setCount] = useState(0); // Timer count
// //   const [active, setActive] = useState(false); // To track if the timer is running
// //   const [intervalId, setIntervalId] = useState(null); // To store interval ID

// import { useState } from "react";

// //   const startTimer = () => {
// //     if (!active) {
// //       setActive(true);
// //       const interval = setInterval(() => {
// //         setCount((prevCount) => prevCount + 1);
// //       }, 1000);
// //       setIntervalId(interval); // Store the interval ID separately
// //     }
// //   };

// //   const stopTimer = () => {
// //     if (active) {
// //       clearInterval(intervalId); // Use intervalId to stop the timer
// //       setActive(false);
// //     }
// //   };

// //   const resetTimer = () => {
// //     clearInterval(intervalId); // Clear the interval
// //     setCount(0); // Reset the timer count to 0
// //     setActive(false); // Mark the timer as inactive
// //   };

// //   const minutes = Math.floor(count / 60);
// //   const seconds = count % 60;

// //   return (
// //     <>
// //       <div className="container">
// //         <h1>Timer</h1>
// //         <span>{minutes} mins </span>
// //         <span>{seconds} secs</span>
// //         <div>
// //           <button onClick={startTimer}>Start</button>
// //           <button onClick={stopTimer}>Stop</button>
// //           <button onClick={resetTimer}>Reset</button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;
// import React, { useState } from "react";

// function App() {
//   const [city, setCity] = useState("");
//   const [cities, setcities] = useState([]);
//   const addCities = () => {
//     if (city.trim() !== "") {
//       setcities([...cities, city]);
//       setCity("");
//     }
//   };
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "20px",
//         }}
//       >
//         <input
//           style={{ width: "100px", height: "40px" }}
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button onClick={addCities} style={{ width: "100px", height: "40px" }}>
//           add{" "}
//         </button>
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <h3>City List</h3>
//         <ul>
//           {cities.map((cityItem, index) => (
//             <li key={index}>{cityItem}</li> // Display each city in a list
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");
//   const [fullname, setFullname] = useState("");
//   const [age, setAge] = useState("");
//   const [activ, setactiv] = useState([]);
//   const addd = () => {
//     if (username.trim() !== "" && fullname.trim() !== "" && age.trim() !== "") {
//       setactiv([...activ, { username, fullname, age }]);
//       setFullname("");
//       setAge("");
//       setUsername("");
//     }
//   };
//   return (
//     <div>
//       <div>
//         <h1>username</h1>
//         <input
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           type="text"
//         />
//       </div>
//       <div>
//         <h1>fullname</h1>
//         <input
//           value={fullname}
//           onChange={(e) => setFullname(e.target.value)}
//           type="text"
//         />
//       </div>
//       <div>
//         <h1>age</h1>
//         <input
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           type="text"
//         />
//       </div>
//       <button onClick={addd}>add</button>
//       <h1>request sent to db with below request data</h1>
//       <div>
//         {activ.map((item, index) => (
//           <li key={index}>
//             Username: {item.username}, Fullname: {item.fullname}, Age:{" "}
//             {item.age}
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default App;
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0); // State for count
  const [secondsLeft, setSecondsLeft] = useState(10); // State for timer

  // Function to start the countdown manually and increase count
  const add = () => {
    if (secondsLeft > 0) {
      setCount(count + 1);
      const timer = setInterval(() => {
        setSecondsLeft((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(timer);

            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <h5>Time left: {secondsLeft} seconds</h5>
      <button onClick={add}>+</button>
    </div>
  );
}
