import { test, expect } from '@playwright/test';

test.beforeEach(async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            'x-api-key': 'free_user_3Fox1yTmOueuwKw2FiHpAXdvyBC'
        },
        data: {
            name: 'Astra',
            job: 'QA Engineer'
        }
    });

    expect(response.status()).toBe(201);

    console.log('Test user created');
});

test('Example UI test with API setup', async ({ page }) => {

    await page.goto('https://automationexercise.com');

    await expect(page).toHaveTitle(/Automation Exercise/);

});