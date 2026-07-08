import { test, expect } from '@playwright/test';

test('GET Users - Status code should be 200', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2', {
        headers: {
            'x-api-key': 'free_user_3Fox1yTmOueuwKw2FiHpAXdvyBC'
        }
    });

    expect(response.status()).toBe(200);

});

test('GET Users - Page should be 2', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2', {
        headers: {
            'x-api-key': 'free_user_3Fox1yTmOueuwKw2FiHpAXdvyBC'
        }
    });

    const body = await response.json();

    expect(body.page).toBe(2);

});

test('GET Users - Per page should be 6', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2', {
        headers: {
            'x-api-key': 'free_user_3Fox1yTmOueuwKw2FiHpAXdvyBC'
        }
    });

    const body = await response.json();

    expect(body.per_page).toBe(6);

});

test('GET Users - Total pages should be 2', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2', {
        headers: {
            'x-api-key': 'free_user_3Fox1yTmOueuwKw2FiHpAXdvyBC'
        }
    });

    const body = await response.json();

    expect(body.total_pages).toBe(2);

});

test('GET Users - First user should contain an ID', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2', {
        headers: {
            'x-api-key': 'free_user_3Fox1yTmOueuwKw2FiHpAXdvyBC'
        }
    });

    const body = await response.json();

    expect(body.data[0].id).toBeDefined();

});