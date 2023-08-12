import "./App.css";
import AllRoutes from "./Routes/routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="layout">
      <section className="head">
        <Header />
      </section>
      <section className="main">
        <AllRoutes />
      </section>
    </div>
  );
}

export default App;
