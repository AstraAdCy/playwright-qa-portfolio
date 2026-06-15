# QA Automation Portfolio

Playwright and TypeScript test automation - built as part of a structured 
transition from manual/mobile QA into automation engineering.

Coming from 3.5 years of hands-on testing at Infosys (mobile apps, 
retail e-commerce, Agile delivery), this portfolio documents what I'm 
building week by week as I move into automation.

## Stack
- Playwright with TypeScript
- GitHub Actions for CI/CD
- Node.js

## What's here

### automationexercise.com - E-commerce test suite
End-to-end tests covering the core user journeys on a retail demo site:
- Signup and login flows
- Product search and navigation  
- Add to cart
- Form validation and edge cases

### google-site.spec.ts
Basic title assertion - first test written, kept as a reference point.

## Running the tests

```bash
# Run all tests
npx playwright test

# Run with browser visible
npx playwright test --headed

# Run a specific file
npx playwright test tests/Automation_Exercise/

# View the last report
npx playwright show-report
```

## CI/CD
Tests run automatically on every push via GitHub Actions. 
The pipeline runs the core test suite and uploads the HTML report as an artifact.

## Background
3.5 years at Infosys as a Systems Engineer/QA Test Engineer - manual testing, Automation script execution 
mobile app testing (iOS/Android), API validation with Postman, Agile delivery.
MSc Applied Cybersecurity, Queen's University Belfast (2025).
Currently building toward ISTQB Foundation and CompTIA Security+.
