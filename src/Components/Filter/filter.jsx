import { useState } from "react";
import { useProductsAction } from "../Providers/ProductProviders";
import Select from "react-select";
import "./filterStyle.scss";

const options = [
  { value: "", label: "ALL" },
  { value: "S", label: "S" },
  { value: "XS", label: "XS" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "X", label: "X" },
  { value: "XL", label: "XL" },
  { value: "XLL", label: "XLL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

export const Filter = () => {
  const [value, setValue] = useState("");
  const dispatch = useProductsAction();
  const [sort, setSort] = useState("");

  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", event: selectedOption });
    setSort(selectedOption);
    // console.log("sevan", value);
  };

  const changeHandler = (selectedOption) => {
    dispatch({ type: "filter", event: selectedOption });
    dispatch({ type: "sort", event: selectedOption });
    setValue(selectedOption);
    console.log("sevan", value);
  };

  return (
    <div className="filter">
      <p>filter products based on : </p>
      <div className="selectContainer">
        <span>order by</span>
        {/* <select onChange={changeHandler} value={value}> */}
        {/* <select onChange={(e) => dispatch({ type: "filter", event: e })}> */}
        {/* <select onChange={(e) => console.log(e.target.value)}> */}
        {/* <option value="">ALL</option>
          <option value="S">S</option>
          <option value="XS">XS</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="X">X</option>
          <option value="XL">XL</option>
          <option value="XLL">XLL</option> */}
        {/* </select> */}
        <Select
          className="select"
          value={value}
          onChange={changeHandler}
          options={options}
        />

        <Select
          className="select"
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </div>
  );
};
