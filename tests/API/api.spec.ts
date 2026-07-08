import { test, expect } from '@playwright/test';

test('GET users API', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2', {
    headers: {
      'x-api-key': 'YOUR_API_KEY'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.page).toBe(2);
  expect(body.per_page).toBe(6);
});