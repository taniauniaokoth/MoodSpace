# Mood Space 

## Project Description

Mood Space is a web application that helps users track and reflect on their emotions in a simple and interactive way. Many people experience mood changes daily but lack an easy system to monitor or understand them over time.

This application allows users to log their mood, add short notes, and view their emotional history. By combining user input with JavaScript functionality, the system transforms simple entries into meaningful self-reflection.

---

## Problem Statement

Many individuals struggle to consistently track their emotions or identify patterns in their mood. Without a structured system, it becomes difficult to understand emotional triggers or personal well-being trends.

---

## Project Solution

Mood Space solves this problem by allowing users to:

* Input their mood through a simple form
* Add optional notes about how they feel
* Store entries using localStorage
* View previously saved moods across different pages

This encourages self-awareness and helps users reflect on their emotional patterns over time.

---

## How It Works

1. The user selects a mood and optionally writes a note
2. JavaScript captures the input using DOM manipulation
3. The data is stored in localStorage
4. Other pages retrieve and display the stored data
5. The interface updates dynamically based on user interaction

---

## Features 

* User-friendly interface
* Mood logging system
* Personal reflection notes
* Dynamic updates using JavaScript
* Form validation and error handling
* Data persistence using localStorage
* Responsive design
* Multiple linked pages
* Interactive UI animations

---

## BDD (Behavior-Driven Development)

### Feature: Mood Tracking

#### Scenario 1: User submits a mood successfully

**Given** the user is on the input page
**When** they select a mood and submit
**Then** the mood is saved and displayed

---

#### Scenario 2: User submits without selecting a mood

**Given** the user is on the form
**When** they click submit without input
**Then** an error message is displayed

---

#### Scenario 3: Data persists across pages

**Given** the user has entered mood data
**When** they navigate to another page
**Then** the stored moods are displayed

---

## Technologies Used 

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Event Handling
* localStorage API

---

## Project Structure

```bash
mood-space/
│
├── index.html        # Homepage
├── about.html        # About page
├── mood.html         # Mood input page
├── result.html       # Displays saved moods
├── style.css         # Styling
├── script.js         # JavaScript functionality
└── README.md         # Documentation
```

---

## Setup Instructions

### Prerequisites

* A modern web browser (Chrome, Edge, Safari, Firefox)

### Installation

1. Clone the repository

```bash
git clone https://github.com/taniauniaokoth/MoodSpace.git
```

2. Navigate into the project folder

```bash
cd MoodSpace
```

3. Open the project

Open `index.html` in your browser.

---

## Known Issues

* Mood data is stored locally on the browser only
* No cloud/database integration yet

---

## Author Information 

**Name:** Tania Unia Okoth

**Email:** [taniauniaokoth@gmail.com]

**GitHub:** https://github.com/taniauniaokoth/MoodSpace

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments 

* Inspired by the importance of emotional self-awareness
* Built using concepts from Foundations of Software Engineering
