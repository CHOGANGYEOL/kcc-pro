import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import GlobalStyled from "./GlobalStyled";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main";
import RequireAuth from "./components/common/RequireAuth";
import UnRequireAuth from "./components/common/UnRequireAuth";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer />
        <GlobalStyled />
        <BrowserRouter>
          <Routes>
            <Route element={<UnRequireAuth />}>
              <Route path="/" element={<Login />} />
            </Route>

            <Route element={<RequireAuth />}>
              <Route path="/main" element={<Main />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
