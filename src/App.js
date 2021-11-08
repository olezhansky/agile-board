import { observer } from "mobx-react-lite";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Dashboard />
      </main>
    </>
  );
};

export default observer(App);
