import "./App.css";
import { SideBar } from "./components/Sidebar";
import Example from "./pages/Example";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/home" element={<SideBar />} />
          <Route path="/tickets" element={<SideBar />} />
          <Route path="/stats" element={<SideBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
