import "./News"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./News";

function App() {
  return (
    <div className="App">
              <BrowserRouter>
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="*" element='erreur 404'/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
