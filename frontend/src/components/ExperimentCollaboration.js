import React, { useState } from 'react';

const ExperimentCollaboration = () => {
    const [notebookEntry, setNotebookEntry] = useState('');
    const [discussionMessage, setDiscussionMessage] = useState('');
    const [notebookEntries, setNotebookEntries] = useState([]);
    const [discussionMessages, setDiscussionMessages] = useState([]);

    const handleNotebookSubmit = (e) => {
        e.preventDefault();
        setNotebookEntries((oldEntries) => [...oldEntries, notebookEntry]);
        setNotebookEntry('');
    };

    const handleDiscussionSubmit = (e) => {
        e.preventDefault();
        setDiscussionMessages((oldMessages) => [...oldMessages, discussionMessage]);
        setDiscussionMessage('');
    };

    return (
        <div className="experiment-collaboration">
            <div className="lab-notebook">
                <h2>Lab Notebook</h2>
                <form onSubmit={handleNotebookSubmit}>
                    <textarea
                        value={notebookEntry}
                        onChange={(e) => setNotebookEntry(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                {notebookEntries.map((entry, index) => (
                    <p key={index}>{entry}</p>
                ))}
            </div>
            <div className="discussion">
                <h2>Discussion</h2>
                <form onSubmit={handleDiscussionSubmit}>
                    <input
                        type="text"
                        value={discussionMessage}
                        onChange={(e) => setDiscussionMessage(e.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>
                {discussionMessages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
        </div>
    );
};

export default ExperimentCollaboration;
