# Jinder - Job Matching Web Application

## Project Overview

Inspired by Tinder, Jinder is a web application that enables jobseekers to browse through job openings and apply by thumbing up, or reject through thumbing down. Thumbing up automatically sends the jobseeker’s CV and cover letter to the company. Companies can view and evaluate applications to quickly find and connect with the most suitable candidates.

## Features

- **Jobseeker Registration/Login**: Users register as jobseekers, allowing them to apply for job openings.
- **Company Registration/Login**: Companies can post jobs and review applications after signing up.
- **Password Hashing**: Passwords are hashed for authentication to ensure user and company data protection.
- **Application Evaluation**: Companies can review and take decisive actions to either approve or reject candidates.
- **Swipe Interaction**: Jobseekers browse through job openings, reacting with a thumbs up or thumbs down.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask
- **Database**: MySQL

## Getting Started

This documentation will help you set up the project on your local machine.

### Prerequisites

Before you begin, make sure to have the following installed:

- MySQL Workbench (or any MySQL-compatible database)
- Python (Version 3.x)
- VS Code (or another IDE)

### Installation

1. Clone the repository using the following command or download the ZIP file from GitHub:

    ```bash
    git clone https://github.com/MabelleAttieh/Jinder.git
    ```

2. Set up the backend in VS Code:

   - Open the backend project (`app.py`) in VS Code.
   - Install the required Python libraries by typing the following command in the terminal:

    ```bash
    pip install flask flask-cors mysql-connector-python bcrypt
    ```

3. Set up the database:

   - Create a new database in MySQL Workbench named `Jinder`.
   - Update your database connection credentials in the backend project (`app.py`):

    ```python
    MYSQL_HOST = 'localhost'
    MYSQL_USER = 'your_username'
    MYSQL_PASSWORD = 'your_password'
    MYSQL_DB = 'JINDER'
    ```

   Replace `your_username` and `your_password` with your MySQL username and password.

4. Run the backend server in VS Code:

    ```bash
    python app.py
    ```

5. Run the frontend:

   - In the frontend folder, double-click on `index.html`, and the website will automatically open in your browser.
