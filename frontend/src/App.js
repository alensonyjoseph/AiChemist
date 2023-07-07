// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experiments from './components/Experiments';
import ExperimentDetails from './components/ExperimentDetails';
import ExperimentCollaboration from './components/ExperimentCollaboration';
import GenerativeAIModel from './components/GenerativeAIModel';
import About from './components/About'; // new import

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} /> {/* reference to About component */}
                    <Route path="/experiments" element={<Experiments />} />
                    <Route path="/experiments/:id" element={<ExperimentDetails />} />
                    <Route path="/experiments/:id/collaborate" element={<ExperimentCollaboration />} />
                    <Route path="/generative-model" element={<GenerativeAIModel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
