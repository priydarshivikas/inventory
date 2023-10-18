import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/DashBoard/Dashboard";
import Wrapper from "./component/Wrapper/Wrapper";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Dashboard/>
            </Wrapper>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
