import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [peopleList, setPeopleList] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{peopleList.length} birthdays today</h3>
        <List peoples={peopleList} />
        <button onClick={() => setPeopleList([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
