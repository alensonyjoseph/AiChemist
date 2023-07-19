**NOTE**: While I have endeavored to make the setup process as straightforward as possible, you may encounter additional requirements due to the unique configurations of your environment. I appreciate your patience and understanding.

# AiChemist

AiChemist is a collaborative platform for scientific research, designed using React and styled-components. It serves as an interactive hub for users to view and modify experiments, optimizing collaboration among researchers.

## Features

- **Experiment Overview**: Displays a comprehensive list of experiments, including investigator details and experiment descriptions.
- **Detailed View**: Each experiment has its dedicated page for deeper insights and update options.
- **Collaboration Hub**: A dedicated space for users to communicate and collaborate.
- **Feature Tags**: Highlights significant experiments.
- **Responsive Design**: Ensures optimal viewing across a variety of devices.

## Prerequisites

1. Python
2. Git
3. Node.js and npm

## Setup and Installation

### Backend

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/thealensj/AiChemist.git
    cd AiChemist
    ```

2. **Backend Initialization**:
    - Navigate to the backend directory:
        ```bash
        cd backend
        ```
    - Set up and activate the virtual environment:
        ```bash
        python -m venv myenv
        myenv\Scripts\activate
        ```
    - Install required Python packages:
        ```bash
        pip install Flask Flask-CORS transformers
        ```

3. **Start the Backend**:
    ```bash
    python server.py
    ```
    The backend should now be running on port 5000.

### Frontend

1. **Transition to the Frontend**:
    ```bash
    cd frontend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Frontend**:
    ```bash
    npm start
    ```

## Testing

To verify the application's functionality, run:
```bash
npm test
```

## Usage
After launching the application, the homepage will be your starting point. Navigate using the "Start Exploring" button to see all available experiments. "View Details" gives more information about each experiment, and "Update Details" lets you modify their descriptions.

For a deeper dive into the platform, visit the /about route.

## Roadmap
1. AI-Driven Drug Discovery: Our goal is to leverage advanced generative AI models to revolutionize drug discovery processes.
2. UI/UX Improvements: We aim to continuously enhance the user experience based on feedback and the latest design principles.

## License
This project is licensed under the MIT License. For comprehensive details, please see the LICENSE file in the repository.
