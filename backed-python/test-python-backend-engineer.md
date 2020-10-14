# Abacum Python Backend engineer test

Thanks you for taking the time to do our technical test. It consists of two parts:

- [A coding test](#coding-test)
- [A few technical questions](#technical-questions)

## Coding test

The task is to create a simple application that parses a csv file and stores the contents in a sqlite database and exposes the data with an API endpoint.

Please use the [sample data](support-files/sample-data.csv) provided as input

### Task requirements

Feel free to spend as much or as little time on the exercise as you like as long as the following requirements have been met.

- Please complete the user stories below.
- Your code should run in one step.
- Feel free to use whatever python frameworks / libraries / packages you like (Django / DRF preferred).
- You must include tests

### User story 1

As a user running the application in command line
I can execute a command that parses a csv
So that fills the contacts table

Acceptance criteria
- The csv content is persisted on a table named `contacts`

### User story 2

As a user running the application
I can visit the / url
So that I get a list of contacts in json format

Acceptance criteria
- A json response to GET / is returned, matching the sample-data.csv file imported

## Technical-questions

- How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
- What was the most useful feature that was added to the latest version of python? Please include a snippet of code that shows how you've used it.
- How would you track down a performance issue in production? Have you ever had to do this?
- Please describe yourself using JSON.

## Presentation

- If you own interesting personal repositories or you contributed to open source projects, please send us your github username and the repositories that you think are the most important in the context of this position
- Send a zip file to careers@abacum.io with:
  - README.md - Response to the technical questions and information on how to build/test your code
  - project - Folder with the project code