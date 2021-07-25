import React, { useState, useEffect } from "react";

const useFetch = async (url) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  });
};
