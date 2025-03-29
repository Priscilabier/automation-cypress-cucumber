# Test Automation with Cypress + Cucumber

## Requirements

- Node.js (version 12 or higher)

### Installation

Run the following command to install all necessary dependencies, including Cypress and Cucumber:

```sh
npm install
```

## How to Run the Tests

After installing the dependencies, you can run the tests in two ways: interactive mode (using the Cypress graphical interface) or headless mode (running directly in the terminal without a GUI).

### 1. Run Tests in Interactive Mode
To open the Cypress GUI, where you can select and watch the tests in real-time, run:

```sh
npx cypress open
```

Once the Cypress interface is open, select the desired `.feature` file, and Cypress will start the test.

### 2. Run Tests in Headless Mode
If you prefer to run the tests directly in the terminal without opening the Cypress interface, use the command:

```sh
npx cypress run
```

This command will execute all tests automatically and display the results in the terminal.

---

## File Descriptions

- **login.feature**: Contains test scenarios written in Gherkin (Given, When, Then) to validate the login functionality.
- **WebTests.js**: Contains the Cucumber Step Definitions, where the steps defined in `.feature` files are implemented.
- **loginPage.js**: A Page Object file that includes methods for interacting with the login page, such as filling in the email and password fields and submitting the form.
- **loginSelectors.js**: A folder containing the selectors for the login page.





