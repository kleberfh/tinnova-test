import TinnovaRequestHandler, {getUsers} from "../../services/tinnova";

describe("API", () => {
  test('Test api instance and get user fuction', async () => {
    expect(true).toBe(true);
    const response = await TinnovaRequestHandler('/users', 'GET');

    expect(typeof response).toBe('object');
    expect(response.length).toBeGreaterThan(0);

    const users = await getUsers();

    expect(typeof users).toBe('object');
    expect(users.length).toBeGreaterThan(0);
  });
});
