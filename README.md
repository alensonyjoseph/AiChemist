NOTE: I am quite new to coding so take my instructions with a grain of salt, there might be more packages you might need to install to set up your environment to run this project, kindly co-operate. 

# AiChemist

AiChemist is a collaborative platform for scientific research built with React and styled-components. This project serves as an interactive platform where users can view and edit experiments, providing a streamlined way for researchers and collaborators to work together and track their progress.

## Project Overview

The main features of AiChemist include:

- A list of all experiments, along with their investigator and descriptions.
- A detail page for each experiment, where you can see more information and update the details of the experiment.
- A collaboration page, where users can communicate with others and collaborate on experiments.
- A "featured" attribute for important experiments.
- Responsiveness for a variety of screen sizes.

## Prerequisites
1. Python.
2. Git.
3. Node.js and npm. 


## Installation

# Backend
Follow these steps to set up and run the AiChemist project:

1. Clone the Repository:
```bash
git clone https://github.com/thealensj/AiChemist.git
cd AiChemist
    ```

2. Set Up the Backend:
a. Navigate to the backend directory:
```bash
cd backend
    ```
b. Create a Python virtual environment and activate it:
```bash
python -m venv myenv
myenv\Scripts\activate
    ```
c. Install necessary Python packages:
```bash
pip install Flask Flask-CORS transformers
    ```
3. Start the Backend:
```bash
python server.py
    ```

Your backend should now be running on port 5000.

# Frontend
1. Navigate to the frontend directory from the AiChemist root directory:
```bash
    cd frontend
    ```
2. Install frontend dependencies:
```bash
    npm install
    ```
3. Start the Frontend Application
```bash
    npm start
    ```

## Running Tests

To ensure the functionality of the platform, follow the steps below to run the tests:

```bash
npm test
```

## Usage

Upon starting the application, you will land on the home page. Click the "Start Exploring" button to view all available experiments. You can then click "View Details" to see more information about a specific experiment, or "Update Details" to edit an experiment's details.

The '/about' page provides more information about the platform and its purpose.

## Future Plans

1. Develop the Generative AI Model for Drug Discovery: The plan is to implement a latest generative AI model that can assist in the discovery of new drugs. This feature would provide potential breakthroughs in the field of drug discovery by harnessing the power of AI.

2. Improve the UI and UX: Future updates will focus on improving the user interface and user experience to make the platform more intuitive and enjoyable to use. This includes refining the current features and adding new ones based on user feedback and requirements.

3. Build the Backend: Plans for backend development include creating user profiles, database management, and other server-side functionalities. This will allow for personalized user experiences and efficient data management, providing a robust and scalable application structure.


## License

This project is licensed under the MIT License. For more details, see the LICENSE file in the repository.
