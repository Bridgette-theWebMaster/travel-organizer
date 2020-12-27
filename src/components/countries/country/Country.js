import React from "react";

export default function Country(props) {
  console.log("Country:", props.country);
  return (
    <div>
      <h1>Hello World</h1>
      {props.country !== "" ? <h2>{props.country.name}</h2> : null}
    </div>
  );
}
