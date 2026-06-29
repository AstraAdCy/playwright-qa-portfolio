QA Automation Portfolio

![Playwright](https://img.shields.io/badge/Playwright-Test_Automation-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Cucumber](https://img.shields.io/badge/BDD-Cucumber-23D96C?logo=cucumber&logoColor=white)
![GitHub%20Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)

Playwright and TypeScript test automation framework to built it as part of a structured
automation engineering.

Coming from 3.5 years of hands-on testing at Infosys (mobile apps, retail e-commerce,
Agile delivery), this portfolio documents what I've built week by week while moving
into automation, BDD, and broader QA engineering practices.

Stack

-Playwright with TypeScript
-Cucumber (BDD / Gherkin)
-k6 (performance testing)
-axe-core (accessibility testing)
-GitHub Actions (CI/CD)
-Node.js


What's here

Page Object Model

Locators and reusable actions separated from test logic, under Pages/:


LoginPage.ts, HomePage.ts, ProductPage.ts


UI Automation - automationexercise.com

End-to-end tests covering core user journeys on a retail demo site
(tests/Automation_Exercise/):


Signup, login, and invalid login handling
Product search and navigation
Add to cart
Mobile viewport testing (iPhone 12 emulation)


BDD / Gherkin

Feature files and step definitions under features/, covering login, product
search, and add-to-cart scenarios. Includes a shared common.steps.ts for steps
reused across multiple features, and a custom World/hooks setup that manages the
Playwright browser lifecycle for each scenario.


Note: a couple of scenarios are currently flaky due to third-party ad overlays
intercepting clicks on the live demo site, and occasional site instability after
login - documented inline in the step definitions rather than hidden.



Accessibility Testing

Automated WCAG checks using axe-core (tests/Accessibility/), flagging issues like
missing labels, colour contrast, and incorrect accessibility roles.

Visual Regression Testing

Baseline screenshot comparison across Chromium, Firefox, and WebKit
(tests/visual-login.spec.ts).

Performance Testing

Basic and API load tests using k6 (Performance/), covering response time,
throughput, and error rate under load.

google-site.spec.ts

Basic title assertion - first test written, kept as a reference point.

Running the tests

bash# Run all Playwright tests
npx playwright test

# Run with browser visible
npx playwright test --headed

# Run a specific suite
npx playwright test tests/Automation_Exercise/
npx playwright test tests/Accessibility/

# Run BDD scenarios
npx cucumber-js

# Run a k6 performance test
k6 run Performance/basic-load-test.js

# View the last HTML report
npx playwright show-report

CI/CD

Core tests run automatically on every push via GitHub Actions, with the HTML report
uploaded as an artifact.

Background

3.5 years at Infosys as a Systems Engineer / QA Test Engineer - manual testing,
automation script execution, mobile app testing (iOS/Android), API validation with
Postman, Agile delivery.

MSc Applied Cybersecurity, Queen's University Belfast (2025).

Currently working toward ISTQB Foundation and CompTIA Security+.