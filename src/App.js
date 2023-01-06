import "./App.css";
import { PathRouter } from "./utils/Router";
import { Home } from "./pages/Home";
function App() {
  return (
   <>
   <PathRouter>
      <Home/>
   </PathRouter>
   </>
  );
}

export default App;
