import React, { useState } from "react";
import { useEffect } from "react";

const Test = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function test() {
      const response = await fetch("http://localhost:5500/test/");
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const result = await response.json();
      setData(result.msg);
    }
    test();
    return;
  }, []);
  return <div>{data}</div>;
};

export default Test;
