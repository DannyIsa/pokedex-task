import axios from "axios";
import React, { useState } from "react";

export default function TypeList({ type }) {
  const [typeList, setTypeList] = useState([]);
  const handleClick = () => {
    axios.get(`http://localhost:3001/api/type/${type}`).then((res) => {
      let pokeListType = [];
      res.data.forEach((pokemon) => {
        pokeListType.push(pokemon);
      });
      setTypeList(pokeListType);
    });
  };
  return (
    <div>
      <div>
        <b onClick={handleClick}>{type}</b>
      </div>
      <div>{typeList.join(", ")}</div>
      <div>{typeList.map((pokemon) => {})}</div>
    </div>
  );
}
