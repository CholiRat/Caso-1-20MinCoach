import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import LogService from "./services/LogService.js";

const logService = new LogService();
logService.initialize();

createRoot(document.getElementById("root")!).render(<App />);
