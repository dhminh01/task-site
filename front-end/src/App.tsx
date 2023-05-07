import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";
import AccContextProvider from "./contexts/accContext";
import NotFound from "./components/pages/NotFound404/NotFound";
import TasksiteContextProvider from "./contexts/tasksiteContext";

function App() {
  return (
    <AuthContextProvider>
      <AccContextProvider>
        <TasksiteContextProvider>
          <Router>
            <div className="container">
              <Routes>
                {/* <Route exact path="/" element={<Login />} />  */}
                {/* <Route exact path="/login" element={<Login />} />  */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Router>
        </TasksiteContextProvider>
      </AccContextProvider>
    </AuthContextProvider>
  );
}

export default App;
