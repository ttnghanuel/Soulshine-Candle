import "bootstrap/dist/css/bootstrap.min.css";
import MyRoutes from "./routes";
import "./App.css";
import Message from "./components/Message";

const App = () => {
  return (
    <>
      <Message />
      <MyRoutes />
    </>
  );
};

export default App;
