import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from './pages/Login.tsx'
import AuthProvider from "./providers/authProvider.tsx";
import PrivateRoute from "./components/routes/PrivateRoute.tsx";
import PublicRoute from "./components/routes/PublicRoute.tsx";
import { ToastContainer } from "react-toastify";

function App() {
   return (
      <>
         <BrowserRouter basename="/">
            <AuthProvider >
               <ToastContainer />
               <Routes>
                  <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
                  <Route path="/home" element={<PrivateRoute><Home /></ PrivateRoute>} />
                  <Route path="/Create" element={<PrivateRoute><Create /></ PrivateRoute>} />
                  <Route path="/Edit/:id" element={<PrivateRoute><Edit /></ PrivateRoute>} />
               </Routes>
            </AuthProvider>
         </BrowserRouter>
      </>
   );
}

export default App;
