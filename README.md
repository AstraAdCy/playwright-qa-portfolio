# QA Automation Portfolio

![Playwright](https://img.shields.io/badge/Playwright-Test_Automation-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Cucumber](https://img.shields.io/badge/BDD-Cucumber-23D96C?logo=cucumber&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
![SonarCloud](https://img.shields.io/badge/SonarCloud-SAST-F3702A?logo=sonarcloud&logoColor=white)

A Playwright and TypeScript automation framework built as part of a structured move from manual QA into automation engineering. I came into this with 3.5 years of hands-on testing experience at Infosys across mobile apps, retail e-commerce, API validation, and Agile delivery - and I have been building this framework week by week to develop the automation depth that complements that background.

The commits tell the story better than a summary would, but the short version is: this started as a basic Playwright setup and has grown into something covering UI automation, API testing, BDD, CI/CD, static analysis, accessibility, performance, and visual regression - all in one codebase.


# Tech Stack

ToolPurposePlaywright (TypeScript)Core UI and API automationCucumberBDD / Gherkin scenariosPostmanAPI collection testingGitHub ActionsCI/CD pipelineSonarQube CloudSAST and code qualityJSON ServerLocal mock REST APIsFaker.jsDynamic test data generationaxe-coreAccessibility testingk6Performance and load testingSQL (MySQL)Backend data verification


# What's in here

UI Automation - automationexercise.com

End-to-end tests covering realistic e-commerce user journeys, structured around the Page Object Model so locators and actions live separately from test logic.

# Covered flows:


- User registration and login
- Invalid login and error handling
- Product search and navigation
- Add to cart
- Mobile viewport testing (iPhone 12 emulation)
- Cross-browser execution (Chromium, Firefox, WebKit)



# API Testing

Two approaches running alongside each other - Postman for collection-based testing and Playwright's request fixture for in-code API automation that sits in the same codebase as the UI tests.

# What's implemented:


- GET and POST request validation
- Status code and JSON response assertions
- Authentication header verification
- beforeEach() API setup to create test data before UI tests run
- Request chaining - storing generated IDs as environment variables for reuse in subsequent calls



# Data-Driven Testing

Login scenarios driven from a JSON fixture file rather than hardcoded in the test. One test function, multiple datasets, no duplication.


- Valid and invalid login combinations
- Randomised test data using Faker.js
- JSON Server for local mock REST API independence



# BDD / Gherkin

Feature files and step definitions using Cucumber, covering login, product search, and add-to-cart scenarios. A custom World setup handles the Playwright browser lifecycle for each scenario.


A couple of scenarios are currently flaky due to third-party ads intercepting clicks on the demo site - documented in the step definitions rather than quietly removed.




# Accessibility Testing

Automated WCAG compliance checks using axe-core across the application. Flags missing labels, colour contrast failures, and incorrect ARIA roles - the kind of issues that often get missed in manual testing.


# Visual Regression Testing

Baseline screenshot comparison across Chromium, Firefox, and WebKit. Catches unintended layout changes that functional tests wouldn't pick up.


# Performance Testing

Basic load testing using k6 - response time, throughput, and error rate under a 10 virtual user / 30-second load scenario. Foundation-level but practical.


# CI/CD Pipeline

GitHub Actions runs automatically on every push to main.

# Pipeline stages:


Checkout code
Install dependencies (with npm cache)
Install Playwright browsers (Chromium only for CI speed)
Run smoke tests
Upload HTML report as artifact
SonarQube Cloud SAST scan


Smoke tests in CI, full regression run locally. HTML report uploaded as an artifact so failures are always reviewable without re-running.


# Static Code Analysis

SonarQube Cloud integrated into the CI pipeline via GitHub Secrets and sonar-project.properties. Runs a SAST scan on every push and reports on code quality, potential vulnerabilities, and maintainability issues through the Quality Gate.


# Test Organisation

Tests are tagged so the right suite runs at the right time:

bash# Smoke tests only (runs in CI on every push)
npx playwright test --grep "@smoke"

# Regression suite
npx playwright test --grep "@regression"

# Sanity checks
npx playwright test --grep "@sanity"

Parallel execution configured with workers: 4 in CI to keep pipeline time reasonable.


# SQL - Backend Verification

SQL queries written to validate backend data after UI and API test actions - the kind of checks that confirm data actually landed correctly in the database, not just that the UI showed the right thing.

Operations covered:
SELECT, INSERT, UPDATE, DELETE, INNER JOIN, LEFT JOIN, COUNT(), GROUP BY, HAVING

Dialect awareness: MySQL (primary), SQL Server / T-SQL basics, PostgreSQL concepts


Running the tests

bash# Full Playwright suite
npx playwright test

# Smoke tests only
npx playwright test --grep "@smoke"

# Run headed (watch the browser)
npx playwright test --headed

# Specific suites
npx playwright test tests/API/
npx playwright test tests/Accessibility/

# BDD scenarios
npx cucumber-js

# Performance test
k6 run Performance/basic-load-test.js

# View last HTML report
npx playwright show-report


# AI-Assisted Testing

Used GitHub Copilot throughout development for edge-case test suggestions and code review. Also explored Mabl, Testim, Functionize, and testRigor to understand where self-healing automation and AI-generated tests add genuine value — and where they introduce risk by masking real UI changes.


# Background

Infosys - Systems Engineer / QA Test Engineer (3.5 years)
Manual testing, mobile app testing (iOS and Android), API validation with Postman, SQL data checks, Selenium automation with Java, Agile delivery across bi-weekly release cycles.

MSc Applied Cybersecurity - Queen's University Belfast (2025)

Currently working toward ISTQB Foundation Level and CompTIA Security+.