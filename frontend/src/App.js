// App.js
import React, { useState } from 'react'; // import useState
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experiments from './components/Experiments';
import ExperimentDetails from './components/ExperimentDetails';
import ExperimentCollaboration from './components/ExperimentCollaboration';
import GenerativeAIModel from './components/GenerativeAIModel';
import About from './components/About'; 

function App() {
    // Move the state to App.js
    const [experimentsData, setExperimentsData] = useState([
        {
            id: 1,
            name: 'Experiment 1',
            investigator: 'Investigator 1',
            description: 'This is a description of the experiment.',
            featured: false, // added new featured attribute
        },
        // Add more experiment data here...
    ]);

    const addExperimentDetails = (id, newDetails) => {
        setExperimentsData(prevData =>
            prevData.map(experiment =>
                experiment.id === id
                    ? { ...experiment, ...newDetails }
                    : experiment
            )
        );
    };

    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} /> 
                    <Route path="/experiments" element={<Experiments experimentsData={experimentsData} addExperimentDetails={addExperimentDetails} />} /> 
                    <Route path="/experiments/:id" element={<ExperimentDetails experimentsData={experimentsData} addExperimentDetails={addExperimentDetails} />} />
                    <Route path="/experiments/:id/collaborate" element={<ExperimentCollaboration />} />
                    <Route path="/generative-model" element={<GenerativeAIModel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
