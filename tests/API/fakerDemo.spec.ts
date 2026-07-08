import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Generate fake user', async () => {

    const name = faker.person.fullName();
    const email = faker.internet.email();
    const job = faker.person.jobTitle();

    console.log(name);
    console.log(email);
    console.log(job);

});