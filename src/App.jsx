import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Application from "./components/Application";
import store from "./store/index";

const App = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
