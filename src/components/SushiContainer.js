import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"


function SushiContainer({ sushis, onClickMore}) {
  const sushiComponents = sushis.map((sushi) => (
    <Sushi key={sushi.id} name={sushi.name} image={sushi.img_url} price= {sushi.price}/>
  ))

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={onClickMore} />
    </div>
  );
}

export default SushiContainer;

