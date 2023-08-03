import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FlexSortable, GridSortable } from "./LayoutSortable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Flex Layout</h1>
      {/* When toggling these components please change "🚀 ~ file: Item.tsx:125 ~ width:" */}
      {/* Uncomment code mentioned above to see variable width layout in flex mode  */}
      <FlexSortable />
      <h1>Grid Layout</h1>
      <GridSortable />
    </>
  );
}

export default App;
