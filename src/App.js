import React from 'react';


import './App.css';

const App = props => {
  let dayTime;
  const hours = new Date().getHours();
  const styles = {}

  if (hours >= 4 && hours < 12) {
    dayTime = "morning";
    styles.color = "#ffffff";
    styles.backgroundColor = "#99cccc";
  } else if (hours >= 12 && hours < 17) {
    dayTime = "day";
    styles.color = "#f9f8fd";
    styles.backgroundColor = "#b0cbde";
  } else {
    dayTime = "night";
    styles.color = "#f5f3ce";
    styles.backgroundColor = "#1f263b";
  }

  console.log({hours});

  return (
    <h1 style={styles}>Good {dayTime}</h1>
    
  )

}
export default App;
