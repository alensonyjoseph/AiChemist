NOTE: I'm relatively new to coding, so there might be additional packages or steps you need to follow to set up your environment properly for this project. I appreciate your understanding and cooperation.

AiChemist
AiChemist is a collaborative platform for scientific research, crafted using React and styled-components. The platform functions as an interactive hub, enabling users to view and modify experiments. It aims to streamline the collaboration process among researchers, ensuring efficient tracking and sharing of progress.

Project Features
AiChemist boasts several features:

A comprehensive list of experiments with details about the investigator and the research.
Detailed pages for each experiment, granting access to more intricate details and update options.
Collaboration pages to foster communication and co-operation among users.
A 'featured' tag to highlight significant experiments.
Full responsiveness, ensuring usability across various screen sizes.
Prerequisites
To get started, ensure you have:

Python installed.
Git set up.
Node.js and npm ready for use.
Installation Guide
Backend
Follow these instructions for a smooth setup:

1. Clone the Repository:
bash
Copy code
git clone https://github.com/thealensj/AiChemist.git
cd AiChemist
2. Backend Setup:
a. Navigate to the backend directory:
bash
Copy code
cd backend
b. Create and activate a Python virtual environment:
bash
Copy code
python -m venv myenv
myenv\Scripts\activate
c. Install essential Python packages:
bash
Copy code
pip install Flask Flask-CORS transformers
3. Boot up the Backend:
bash
Copy code
python server.py
Now, your backend should be up and running on port 5000.

Frontend
1. Switch to the frontend directory from the AiChemist root directory:
bash
Copy code
cd frontend
2. Install frontend dependencies:
bash
Copy code
npm install
3. Launch the Frontend:
bash
Copy code
npm start
Testing
To verify the platform's functionality, initiate the tests using:

bash
Copy code
npm test
Usage Guide
After launching the application, the home page will greet you. Click on "Start Exploring" to inspect the available experiments. Further, the "View Details" option will show more about a chosen experiment, and "Update Details" will let you modify its particulars.

The /about route offers deeper insights into the platform's ethos and mission.

Roadmap
Our aspirations for AiChemist's evolution include:

AI-Driven Drug Discovery: We aim to harness the prowess of cutting-edge generative AI models to usher in breakthroughs in drug discovery.

Elevated UI/UX: Future updates will sharpen the user experience by refining existing functionalities and introducing novel ones based on user interactions and feedback.



3. Build the Backend: Plans for backend development include creating user profiles, database management, and other server-side functionalities. This will allow for personalized user experiences and efficient data management, providing a robust and scalable application structure.


## License

This project is licensed under the MIT License. For more details, see the LICENSE file in the repository.
