# Abacum Python Backend engineer test

Thank you for taking the time to do our technical test. 
We are very excited that you took the decision to apply for this position. 
To make sure you are a good fit we want to propose this coding test. It will not be long, promise.

## Coding test

The task is to create a simple application that parses a csv file and stores its content in a database and exposes the data through an API endpoint.

Please use the [sample data](support-files/sample-data.csv) provided as input

### Task requirements

Feel free to spend as much or as little time on the exercise as you like as long as the following requirements have been met.

- Please complete the user stories below.
- Your code should run in one step.
- Feel free to use whatever python frameworks/libraries/packages you like (Django / DRF is what we use but is not a big requirement for this test).
- We would highly value the use of libraries like pandas or NumPy   
- You are encouraged to include tests
- The user interface is not required

### User story 1

As a user running the application in the command line,
I can execute a command that parses a csv so that fills the transactions table

Acceptance criteria
- The csv content is persisted on a table named `transactions`

### User story 2

As a user running the application, 
I can visit some API URL you will define and upload the file to fill the transactions table

Acceptance criteria
- The csv content is persisted on a table named `transactions`

### User story 3
As a user running the application
I can visit some API URL you will define
So that I get the transaction balances in json format. 

Acceptance criteria

I should be able to:
- [ ] Get a full year balance by account ([example](support-files/example_data/output/full_year_balance_by_account.json))
- [ ] Get a full year balance for a specific account ([example](support-files/example_data/output/full_year_balance_account_11300000.json))
- [ ] Get monthly balances by account ([example](support-files/example_data/output/monthly_balance_by_account.json))
- [ ] Get monthly balance for a specific account  ([example](support-files/example_data/output/monthly_balance_for_account_77800000.json))
- [ ] Get the monthly balance for a specific month by account ([example](support-files/example_data/output/october_by_account.json))
- [ ] Get the monthly balance for a specific month and a specific account ([example](support-files/example_data/output/october_account_77800000.json))

A JSON response is returned.

## Presentation

- If you have interesting personal repositories or you have contributed to open source projects, 
please send us your GitHub username and the repositories that you think are the most important in the context of this position
- Send a zip file to careers@abacum.io with:
  - README.md - Information on how to build/test your code
  - project - Folder with the project code
