import React, {useEffect, useState} from "react";
// import MoreButton from "./MoreButton";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

  function App() {
  const [isSushis, setIsSushis] = useState([])
  const [sushiIndex, setSushiIndex] = useState(0);
  useEffect (() => {
    fetch(API)
    .then(res => res.json())
    .then((sushiObj) => {
      const updatedSushis = sushiObj.map((sushi) => {
        return { ...sushi}; //3 dots means current sushi
  })
    setIsSushis(updatedSushis);
  })
  }, [])

  function handleClick() {
    // console.log("Clicked")
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % isSushis.length);
    // console.log(isSushis.length)
  }

  const displaySushi = isSushis.slice(sushiIndex, sushiIndex + 4);

  return (
    <div className="app">
      <SushiContainer sushis={displaySushi} 
      onClickMore ={handleClick} />
      <Table />
    </div>
  );
}

export default App;

  