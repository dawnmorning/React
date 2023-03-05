import NavBar from "@/src/NavBar";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {/* <h1>Hello, {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Up</button> */}
      <NavBar />
      <h1>Home</h1>
    </div>
  );
}
