import './App.css';
import Login from "./components/Login/Login";
import './components/FontAwesomeIcons/index'
import {BrowserRouter} from "react-router-dom";
import CommonRoutes from "./routes/CommonRoutes";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CommonRoutes/>
            </BrowserRouter>
        </div>
    );
}

export default App;
