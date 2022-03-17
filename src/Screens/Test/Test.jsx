import React from "react";
import { useState, useEffect } from "react";

const Test = () => {
  const [checkboxes, setCheckboxes] = useState([
    {
      name: "check-box-1",
      checked: false,
    },
    {
      name: "check-box-2",
      checked: false,
    },
    {
      name: "check-box-3",
      checked: false,
    },
    {
      name: "check-box-4",
      checked: false,
    },
    {
      name: "check-box-5",
      checked: false,
    },
  ]);
  const [check, setCheck] = useState("");

  const handleChange = (e) => {
    let { name, checked } = e.target;
    setCheck(checked ? name : "");
  };

  //   const handleChange = (event, i) => {
  //     let { checked } = event.target;
  //     let arr = [...checkboxes];

  //     arr[i].checked = checked;

  //     setCheckboxes(arr);

  //     console.log("jkdjsk", arr);
  //   };

  return (
    <>
      <div>
        {checkboxes.map((item, i) => (
          <label key={i}>
            {item.name}
            <input
              type="checkbox"
              name={item.name}
              checked={check === item.name}
              onChange={handleChange}
            />
          </label>
        ))}
      </div>
    </>
  );
};

export default Test;
