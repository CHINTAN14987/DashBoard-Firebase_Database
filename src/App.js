import "./App.css";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./components/features/store";
import DisplayedTasks from "./components/DisplayedTasks";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Header /> */}
        <NewTask />
        <DisplayedTasks />
      </div>
    </Provider>
  );
}

export default App;
