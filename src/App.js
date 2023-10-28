import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import GlobalStyled from "./GlobalStyled";

function App() {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
