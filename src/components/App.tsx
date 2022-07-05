import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Game from "../pages/Game";
import Welcome from "../pages/Welcome";
import ModalProvider from "./ModalProvider";
const getRandomKey = () => Math.random();
function App() {
  return (
    <div className="App">
      <Router>
        <ModalProvider>
          <div className="whole-screen">
            <nav>
              <Link to="/" className="heading">
                Wordle
              </Link>
            </nav>
            <Routes>
              <Route path="/" element={<Welcome key={getRandomKey()} />} />
              <Route
                path="game/:pattern/:wordLength"
                element={<Game key={getRandomKey()} />}
              />
            </Routes>
          </div>
        </ModalProvider>
      </Router>
    </div>
  );
}

export default App;
