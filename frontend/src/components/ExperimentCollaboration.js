import React, { useState } from 'react';
import styled from 'styled-components';

const CollaborationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const CollaborationSection = styled.div`
    border: 1px solid #282c34;
    padding: 20px;
`;

const CollaborationTitle = styled.h2`
    color: #282c34;
`;

const CollaborationForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const CollaborationButton = styled.button`
    color: white;
    background-color: #282c34;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition-duration: 0.4s;

    &:hover {
        background-color: #61dafb;
        color: black;
    }
`;

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
        <CollaborationContainer className="experiment-collaboration">
            <CollaborationSection className="lab-notebook">
                <CollaborationTitle>Lab Notebook</CollaborationTitle>
                <CollaborationForm onSubmit={handleNotebookSubmit}>
                    <textarea
                        value={notebookEntry}
                        onChange={(e) => setNotebookEntry(e.target.value)}
                    />
                    <CollaborationButton type="submit">Submit</CollaborationButton>
                </CollaborationForm>
                {notebookEntries.map((entry, index) => (
                    <p key={index}>{entry}</p>
                ))}
            </CollaborationSection>
            <CollaborationSection className="discussion">
                <CollaborationTitle>Discussion</CollaborationTitle>
                <CollaborationForm onSubmit={handleDiscussionSubmit}>
                    <input
                        type="text"
                        value={discussionMessage}
                        onChange={(e) => setDiscussionMessage(e.target.value)}
                    />
                    <CollaborationButton type="submit">Send</CollaborationButton>
                </CollaborationForm>
                {discussionMessages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </CollaborationSection>
        </CollaborationContainer>
    );
};

export default ExperimentCollaboration;
