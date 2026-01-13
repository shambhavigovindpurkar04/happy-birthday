import { Routes, Route } from "react-router-dom";

import MakeAWish from "./pages/MakeAWish";
import MemoryPath from "./pages/MemoryPath";
import LoveLetter from "./pages/LoveLetter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MakeAWish />} />
      <Route path="/memories" element={<MemoryPath />} />
      <Route path="/letter" element={<LoveLetter />} />
    </Routes>
  );
}

export default App;
