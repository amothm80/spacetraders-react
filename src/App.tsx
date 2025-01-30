import "./App.css";
import Header from "./views/Header.tsx";
import Aside from "./views/Aside.tsx";
import Main from "./views/Main.tsx";

function App() {

  // const s = new AgentsApi()

  // console.log(s.getAgents({limit: 20, page: 2}))
  return (
    <>
      <Header />
      <Aside />
      <Main />
    </>
  );
}

export default App;
