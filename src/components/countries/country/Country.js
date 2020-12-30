import React from "react";

export default function Country(props) {
  console.log("Country:", props.country);
  let languages;
  languages =
    props.country !== ""
      ? Object.entries(props.country.languages).map((k, v) => {
          return k;
        })
      : null;
  console.log(languages);
  return (
    <div>
      {props.country !== "" ? (
        <>
          <h2>{props.country.name}</h2>
          <img src={props.country.flag.file} alt="flag" width="200px" />
          <p>Capital: {props.country.capital.name}</p>
          <p>Currency: {props.country.currency.name}</p>
          <ul>
            Languages:
            {languages.map((l) => (
              <li>{l[1]}</li>
            ))}
          </ul>
          <p>Time: {props.country.timezone.time}</p>
          <p>Timezone: {props.country.timezone.timezone}</p>
        </>
      ) : null}
    </div>
  );
}
