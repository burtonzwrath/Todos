import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosContainer from "./components/Users/TodosContainer";

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<TodosContainer />} />
            <Route path={"/create"} element={<TodosContainer open={true} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}
export default App;

