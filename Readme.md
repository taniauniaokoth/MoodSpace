 Mood Space
PROJECT DESCRIPTION

Mood Space is a web application designed to help users track, express, and understand their emotions in a simple and interactive way. Many people experience mood changes but do not have an easy way to reflect on or manage them.

This project provides a digital space where users can log their moods, add short notes about how they feel, and view their emotional patterns over time. By combining a clean user interface with JavaScript functionality, the application transforms personal input into meaningful feedback.

 PROBLEM STATEMENT

Many individuals struggle to track their emotions consistently or reflect on their mental state over time. Without a structured system, it becomes difficult to identify patterns, triggers, or improvements in mood.

 HOW IT SOLVES THE PROBLEM

Mood Space allows users to:

Input their current mood through a simple form
Add optional notes describing their feelings
Store this data using localStorage
Retrieve and display past moods across different pages

This helps users become more aware of their emotional patterns and encourages self-reflection.

HOW IT WORKS
The user selects a mood and optionally writes a note
JavaScript captures this input using DOM manipulation
The data is stored in localStorage for persistence
Other pages retrieve and display the stored mood entries
The interface updates dynamically based on user interaction

AUTHOR INFORMATION:
Name: Tania Unia Okoth
Email: taniauniaokoth@gmail.com

GitHub:https://github.com/taniauniaokoth/MoodSpace

SETUP INTRUCTIONS
Prerequisites
A web browser (Chrome, Edge, Safari, etc.)
Installation
Clone the repository:
git clone <https://github.com/taniauniaokoth/MoodSpace>
Open the folder:
cd mood-space
Run the project:
Open index.html in your browser


BDD (BEHAVIOUR-DRVEN DEVELOPMENT)
Feature: User can log moods

Scenario 1: User submits a mood successfully

Given the user is on the input page
When they select a mood and submit
Then the mood is saved and displayed

Scenario 2: User submits without selecting a mood

Given the user is on the form
When they click submit without input
Then an error message is displayed

Scenario 3: Data persists across pages

Given the user has submitted moods
When they navigate to another page
Then the saved moods are displayed

TECHNOLOGIES USED
HTML5 → Structure
CSS3 → Styling and layout (Flexbox/Grid)
JavaScript → Logic and interactivity
localStorage → Data persistence

PROJECT STRUCTURE
mood-space/
│
├── index.html        # Home / mood input page  
├── history.html      # Displays past moods  
├── insights.html     # Shows patterns or summary  
├── style.css         # Styling  
├── script.js         # Logic and DOM manipulation  
└── README.md         # Documentation  

KEY FEATURES
Multi-page navigation
Form input with validation
Dynamic DOM updates
Data storage using localStorage
Clean and responsive design

CONTACT INFORMATION

For feedback or questions:

Email: taniauniaokoth@gmail.com
GitHub: https://github.com/taniauniaokoth/MoodSpace

LICENSE

This project is licensed under the MIT License.

ACKNOWLEDGEMENTS
Inspiration from real-life emotional tracking needs
Web development concepts learned in Foundations of Software Engineering