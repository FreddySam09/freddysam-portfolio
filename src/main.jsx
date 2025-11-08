import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LazyMotion, domAnimation } from "framer-motion";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </ThemeProvider>
  </StrictMode>,
)
