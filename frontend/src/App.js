import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experiments from './components/Experiments';
import ExperimentDetails from './components/ExperimentDetails';
import ExperimentCollaboration from './components/ExperimentCollaboration';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experiments" element={<Experiments />} />
                    <Route path="/experiments/:id" element={<ExperimentDetails />} />
                    <Route path="/experiments/:id/collaborate" element={<ExperimentCollaboration />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
