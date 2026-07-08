import { test, expect } from '@playwright/test';

test('POST Create User - Status code should be 201', async ({ request }) => {

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

});

test('POST Create User - Response should contain user details', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            'x-api-key': 'free_user_3Fox1yTmOueuwKw2FiHpAXdvyBC'
        },
        data: {
            name: 'Astra',
            job: 'QA Engineer'
        }
    });

    const body = await response.json();

    expect(body.name).toBe('Astra');
    expect(body.job).toBe('QA Engineer');
    expect(body.id).toBeDefined();

});