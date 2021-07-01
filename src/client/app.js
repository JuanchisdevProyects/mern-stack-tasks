import React, { useState } from "react";

export default function App() {
  const [title, setTitle] = useState(""),
    [description, setDescription] = useState("");
  const handleOnAddTask = (e) =>
  {      
    fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({title,description}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(res => console.log(res))


      e.preventDefault();
  } 
  return (
    <div>
      <nav className="header-bar">
        <a className="main-text">MERN STACK</a>
      </nav>
      <main>
        <form className="form" onSubmit={handleOnAddTask}>
          <div className="title">Write a Task Here</div>
          <div className="subtitle">mern-stack! is awesome</div>
          <div className="input-container ic1">
            <input id="task-name" className="input" type="text" placeholder=" "  value={title} onChange={(e) => setTitle(e.target.value)} />
            <div className="cut"></div>
            <label htmlFor="task-name" className="placeholder">   Task Name </label>
          </div>
          <div className="input-container ic1">
            <input id="task-desc" className="input" type="text" placeholder=" "  value={description} onChange={(e) => setDescription(e.target.value)}/>
            <div className="cut"></div>
            <label htmlFor="task-dec" className="placeholder"> Task desc   </label>
          </div>
          <button type="text" className="submit">      submit   </button>
        </form>
      </main>
    </div>
  );
}
