import "./App.css";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./components/features/store";
import DisplayedTasks from "./components/DisplayedTasks";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Header /> */}
        {/* <NewTask />
        <DisplayedTasks /> */}
        <CardComponent />
      </div>
    </Provider>
  );
}

export default App;
