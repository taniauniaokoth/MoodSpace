Mood Space
Project Description

Mood Space is a web application that helps users track and reflect on their emotions simply and interactively. Many people experience mood changes daily but lack an easy way to monitor or understand them over time.

This application allows users to log their mood, add short notes, and view their emotional history. By combining user input with JavaScript functionality, the system transforms simple entries into meaningful insights.

Problem Statement

Many individuals struggle to consistently track their emotions or identify patterns in their mood. Without a structured system, it becomes difficult to understand emotional triggers or personal well-being trends.

Project Solution

Mood Space solves this problem by allowing users to:

Input their mood through a simple form
Add optional notes about how they feel
Store their entries using localStorage
View previously saved moods across different pages

This encourages self-awareness and helps users reflect on their emotional patterns over time.

How It Works
The user selects a mood and optionally writes a note
JavaScript captures the input using DOM manipulation
The data is stored in localStorage
Other pages retrieve and display the stored data
The interface updates dynamically based on user interaction
Author Information

Name: Tania Unia Okoth
Email: taniauniaokoth@gmail.com

GitHub: https://github.com/taniauniaokoth/MoodSpace

Setup Instructions
Prerequisites
A modern web browser (Chrome, Edge, Safari, etc.)
Installation
Clone the repository:
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
Navigate into the folder:
cd mood-space
Open the project:
Open index.html in your browser
BDD (Behavior-Driven Development)
Feature: Mood Tracking

Scenario 1: User submits a mood successfully

Given the user is on the input page
When they select a mood and submit
Then the mood is saved and displayed

Scenario 2: User submits without selecting a mood

Given the user is on the form
When they click submit without input
Then an error message is displayed

Scenario 3: Data persists across pages

Given the user has entered mood data
When they navigate to another page
Then the stored moods are displayed
Technologies Used
HTML5
CSS3
JavaScript (DOM manipulation, event handling)
localStorage
Project Structure
mood-space/
│
├── index.html        # Main page (input form)  
├── history.html      # Displays saved moods  
├── insights.html     # Shows mood patterns  
├── style.css         # Styling  
├── script.js         # JavaScript logic  
└── README.md         # Documentation  
Features
User-friendly interface
Form validation and error handling
Dynamic updates using JavaScript
Data persistence using localStorage
Multiple linked pages
Contact Information

Email: taniauniaokoth@gmail.com

GitHub: https://github.com/taniauniaokoth/MoodSpace

License

This project is licensed under the MIT License.

Acknowledgments
Inspired by the need for simple emotional tracking tools
Built using concepts from Foundations of Software Engineering
