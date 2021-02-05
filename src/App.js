import logo from "./logo.svg";
import "./App.css";
import FullCV from "./components/FullCV/FullCV";
import WelcomePage from "./components/WelcomePage/WelcomPage";
import { useDispatch, useSelector } from "react-redux";
import { setInfoShow, setInfoHide } from "./redux/reducers/appReducer";
function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.app.showInfoPage);
  const toggle = () =>
    isOpen ? dispatch(setInfoHide()) : dispatch(setInfoShow());
  const toggleShow = (
    <button onClick={toggle} className="menu-toggle">
      +
    </button>
  );
  return (
    <div className="App">
      {toggleShow}
      <WelcomePage />
      <FullCV />
    </div>
  );
}

export default App;
