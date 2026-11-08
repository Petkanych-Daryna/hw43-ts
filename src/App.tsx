import { useEffect } from "react";
import { getPromise } from "./tasks/task1";
import { compare } from "./tasks/task2";
import { merge } from "./tasks/task3";
import { Page } from "./tasks/task4";
import "./App.css";

function App() {
  useEffect(() => {
    getPromise().then((data) => console.log("Task 1 result:", data));

    const result2 = compare(
      { name: "Item", color: "red" },
      { position: 1, weight: 100 },
    );
    console.log("Task 2 result:", result2);

    const result3 = merge({ a: 1 }, { b: "hello" });
    console.log("Task 3 result:", result3);

    const myPage = new Page({ title: "My TypeScript Page" });
    myPage.pageInfo();
  }, []);

  return <main></main>;
}

export default App;
