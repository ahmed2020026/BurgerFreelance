import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import { LanguageType } from './hooks/Context.jsx';


createRoot(document.getElementById('root')).render(
    <Router>
        <LanguageType>
            <App />
        </LanguageType>
    </Router>
)
