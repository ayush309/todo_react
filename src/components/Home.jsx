import React, { useState } from "react";
import Task from "../components/Task";

const Home = () => {
  const [tasks, settask] = useState([]);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  // const deletetask = (index) => {
  //   const filterarr = tasks.filter((val, i) => {
  //     return i !== index;
  //     settask(filterarr);
  //   });
  // };

  const submithandler = (e) => {
    e.preventDefault();
    settask([
      ...tasks,
      {
        title: title,
        description: description
      }
    ]);
  };

  const deletetask = (index) => {
    const filterarr = tasks.filter((val, i) => {
      return i !== index;
    });
    settask(filterarr);
  };

  return (
    <div className="Container">
      <form onSubmit={submithandler} action="">
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="type a task"
        />
        <textarea
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          name=""
          placeholder="description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {/* <button type="submit">Submit</button> */}
      {/* <Task /> */}
      {/* {tasks.map((item,index) => (
        <Task key={index}/>
      ))} */}
      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deletetask={deletetask}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
