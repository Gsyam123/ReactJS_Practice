import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserComponent = () => {
  const [searchData, setSearchData] = useState("");
  const [myData, setMyData] = useState([]);
  const [results, setResults] = useState([]);

  console.log(myData);
  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => {
      // console.log(res.data);
      setMyData(res.data);
    });
  }, []);

  useEffect(() => {
    if (searchData) {
      let filteredData = myData.filter((d) =>
        d.login.toLowerCase().includes(searchData.toLowerCase())
      );
      setResults(filteredData);
    } else {
      setResults(myData);
    }
  }, [searchData, myData]);
  return (
    <div>
      <h1>User Component...!</h1>
      <input
        type="text"
        name="searchData"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        placeholder="search here"
      />
      {results.map((dt) => {
        return <p key={dt.id}>{dt.login}</p>;
      })}
    </div>
  );
};
