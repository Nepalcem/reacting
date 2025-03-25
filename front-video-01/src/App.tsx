import "./App.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import MapComponent from "./components/MapComponent/MapComponent";
import ParentPropsComponent from "./components/PropsComponent/ParentPropsComponent";

function App() {

  return (
    <>
      <Header />
      <LoginForm/>
      <MapComponent />
      <ParentPropsComponent />
    </>
  );
}

export default App;
