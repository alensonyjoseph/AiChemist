**NOTE**: While I have endeavored to make the setup process as straightforward as possible, you may encounter additional requirements due to the unique configurations of your environment. I request you to make necessary changes such as installation of packages amngest other things that may not be mentioned below as you proceed to clone this project. 

# AiChemist

AiChemist is a collaborative platform for scientific research, designed using React, TiDB, Flask, Generative AI and others. It serves as an interactive hub for researchers to view, modify and collaborate on experiments. 

## Features

- **Experiment Overview**: Displays a comprehensive list of experiments, including investigator details and experiment descriptions.
- **Detailed View**: Each experiment has its dedicated page for deeper insights and update options.
- **Collaboration Hub**: A dedicated space for users to communicate and collaborate.
- **Feature Tags**: Highlights significant experiments.

[![Watch the video](https://img.youtube.com/vi/mLenIYlwTMk/maxresdefault.jpg)](https://www.youtube.com/watch?v=mLenIYlwTMk)

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
    - Install PyTorch:
        ```bash
        pip install torch torchvision
        ```
    - Install SQLAlchemy:
        ```bash
        pip install sqlalchemy
        ```
    - Install PyMySQL:
       ```bash
       pip install pymysql 
       ```

3. **Start the Backend**:
    ```bash
    python server.py
    ```
    The backend should now be running on port 5000.

### Frontend

1. **Transition to the Frontend**:
    ```bash
    cd ..
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

## Roadmap
1. Profile Creation: Developing user registration to allow individual researchers to create their own profiles.
2. Collaboration Platform: Developing tools to enable collaboration between various profiles. 
3. Generative AI Model: Developing in-house model to replace the present open source model for SMILES generation. 

## License
This project is licensed under the MIT License. For comprehensive details, please see the LICENSE file in the repository.
