import React, { useEffect, useState } from "react";
import apiCall from "./helpers/apiCall";

export default function App() {
    const [title, setTitle] = useState(""),
              [description, setDescription] = useState("");

  const [tasks, setTasks] = useState([]),
            [isModalOpened, setisModalOpened] = useState(false),
            [modalText, setModalText] = useState("");

//#region Actions
  const addTaskAction = async (e) => {
    e.preventDefault();
    try {
      let res = await apiCall({
        url: `/api/tasks`,
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-type": "application/json" },
      });

      handleOpenNotification(res.status);

      getTasksActions();
    } catch (err) {
      alert(err);
    }
  };

  const getTasksActions = async () => {
    try {
      let res = await apiCall({ url: "/api/tasks" });

      setTasks(res);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteAction = async (id) => {
      try {
         let res = await apiCall({ url: `/api/tasks/${id}`, method: "DELETE" });
          handleOpenNotification(res.status);
          getTasksActions();
        } catch (error) { console.error(error);}
  };
  const handleEditAction = () =>{
    º
  };
  //#endregion
  const handleOpenNotification = (text) => {
    setisModalOpened(true);
    setModalText(text);

    setTimeout(() => {
      setisModalOpened(false);
      setModalText("");
    }, 2000);
  };

  useEffect(() => {
    getTasksActions();
  }, []);

  return (
    <div>
      <nav className="header-bar">
        <a className="main-text">MERN STACK</a>
      </nav>
      <main>
        <form className="form" onSubmit={addTaskAction}>
          <div className="title">Write a Task Here</div>
          <div className="subtitle">mern-stack! is awesome</div>
          <div className="input-container ic1">
            <input
              id="task-name"
              className="input"
              type="text"
              placeholder=" "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="cut"></div>
            <label htmlFor="task-name" className="placeholder">
              {" "}
              Task Name{" "}
            </label>
          </div>
          <div className="input-container ic1">
            <input
              id="task-desc"
              className="input"
              type="text"
              placeholder=" "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="cut"></div>
            <label htmlFor="task-dec" className="placeholder">
              {" "}
              Task desc{" "}
            </label>
          </div>
          <button type="text" className="submit">
            {" "}
            submit{" "}
          </button>
        </form>

        <div
          className={`notification-modal ${isModalOpened ? "open" : "closed"} `}
        >
          {modalText}
        </div>
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description </th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((el) => (
              <tr key={el._id}>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={(e) => handleDeleteAction(el._id)}
                  >
                    <i className="  fas fa-trash" />
                    delete{" "}
                  </button>
                  <button className="update-button">
                    {" "}
                    <i className=" fas fa-pencil-alt" />
                    update{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
