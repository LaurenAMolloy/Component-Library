import './index.css';
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { NavProvider } from './context/navigation'

createRoot(document.getElementById("root")).render(
   <NavProvider >
    <App />
   </NavProvider>
);
