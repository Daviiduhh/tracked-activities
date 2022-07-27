import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <User />
      <Lista />
    </div>
  );
}

function User() {
  const user = {
    name: "David Madrid",
    img: '../src/assets/user.JPG',
    filters: ["Daily", "Weekly", "Monthly"],
  };

  return (
    <>
      <div className="user">
        <div className="user__content">
          <img className="user__img" src={user.img} alt="User image" />
          <span className="user__subtitle">Report for</span>
          <span className="user__name">{user.name}</span>
        </div>
        {user.filters.map((filter) => (
          <span className="user__filter">{filter}</span>
        ))}
      </div>
    </>
  );
}

function Lista() {
  const elements = [
    {
      id: 1,
      title: "work",
      hours: 32,
      pastHours: 36,
      color: "#fe8b63",
    },
    {
      id: 2,
      title: "play",
      hours: 10,
      pastHours: 8,
      color: "#56c2e6",
    },
    {
      id: 3,
      title: "study",
      hours: 4,
      pastHours: 7,
      color: "#ff5e7d",
    },
    {
      id: 4,
      title: "excercise",
      hours: 4,
      pastHours: 5,
      color: "#4ace82",
    },
    {
      id: 5,
      title: "social",
      hours: 5,
      pastHours: 10,
      color: "#7235d1",
    },
    {
      id: 6,
      title: "self care",
      hours: 2,
      pastHours: 2,
      color: "#f1c55a",
    },
  ];

  const listActivities = elements.map((element) => (
    <>
      <div
        className="activity"
        key={element.id}
        style={{
          backgroundColor: element.color,
        }}
      >
        <div className="activity__content">
          <span className="activity__title">{element.title}</span>
          <span>...</span>
          <span className="activity__hours">{element.hours}hrs</span>
          <span className="activity__pasthours">
            last week - {element.pastHours}
          </span>
        </div>
      </div>
    </>
  ));

  return (
    <>
      <section className="activities">{listActivities}</section>
    </>
  );
}

export default App;
