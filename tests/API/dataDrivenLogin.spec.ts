import { test, expect } from '@playwright/test';
import users from '../data/users.json';

users.forEach((user, index) => {
  test(`Login test ${index + 1} - ${user.email || 'empty email'}`, async () => {
    console.log(user);

    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('password');
    expect(user).toHaveProperty('expected');
  });
});