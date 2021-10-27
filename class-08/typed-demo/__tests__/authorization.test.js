'use strict';

const { db, Users } = require('../model');


beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing our Authorization system', () => {
  it('Should create a user with roles and capabilites', async () => {
    const newUser = await Users.create({ username: 'Jacob', password: 'test'});

    console.log(newUser.capabilities);
    expect(newUser.token).toBeTruthy();
    expect(newUser.role).toBe('user');
    expect(newUser.capabilities.includes('read')).toBeTruthy();
  });
});
