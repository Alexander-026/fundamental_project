import React from "react";
import Input from "../../../UI/Input/Input";
import Select from "../../../UI/Select/Select";
import classes from './PostFilter.module.scss'

const PostFilter = ({filter, setFilter}) => {
  return (
    <>
      <Select
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue={"Sort by"}
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
      />
      <div className={classes.searh__input}>
        <Input
          style={{borderBottom: '3px solid #ccc', color: '#fff'}}
          value={filter.query}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          placeholder={"Search post"}
        />
      </div>
    </>
  );
};

export default PostFilter;
