import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Component/Dashboard";
import Category from "./Pages/Category";
import Donation from "./Pages/Donation";
import AdminLogin from "./Component/AdminLogin";
import AdminDashboard from "./Component/AdminDashboard";
import AdminRegistion from "./Component/AdminRegistation";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/adminregistion" element={<AdminRegistion />} />
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="register" element={<Register />} />
            <Route path="category" element={<Category />} />
            <Route path="donation" element={<Donation />} />
            {/* <Route path="/" element={<Dashboard />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
