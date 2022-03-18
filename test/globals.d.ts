import { SuperTest, Test } from 'supertest';

/* eslint-disable no-var */

declare global {
    var testRequest: SuperTest<Test>;
}