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
        {/* <div className="activity_information_Mainwrapper">
          <div style={{ width: "100%" }}>
            <div className="activity_information_wrapper">
              <h3>ACTIVITY</h3>
              <h3>INFORMATION</h3>
            </div>
            <div className="border"></div>
          </div>
        </div> */}

        <div className="component_wrapper">
          <div className="component_wrapper_newTaskAndDisplayed">
            {/* <div className="innerHeader">
              <span>Log Calls</span>
              <span>Task</span>
              <span>Event</span>
              <span>Make Note</span>
              <span>Add Attachment</span>
              <span>Activity Set</span>
              <span>Custom Field</span>
            </div> */}
            {/* <NewTask />
            <DisplayedTasks /> */}
          </div>
          <CardComponent className="cardComponent_wrapper" />
        </div>
      </div>
    </Provider>
  );
}

export default App;
