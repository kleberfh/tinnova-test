import {find} from "lodash";
import {addUser, deleteUser, getUser, listUsers, updateUser} from "../../services/indexedDB";

describe("IndexedDB", () => {
  const SUCCESS_STATUS = 'success';
  const TEST_NAME = 'Kleber Fernando dos Santos Canedo';
  const TEST_USER = {
    name: 'Kleber Fernando',
    cpf: '146.439.210-21',
    phone: '(14) 99114-6621',
    email: 'canedokleberfilho@gmail.com'
  };

  test('Test indexedDb with get, insert, update and delete methods', async () => {
    expect(true).toBe(true);
    const addUserResponse = await addUser(TEST_USER);
    expect(addUserResponse.status).toBe(SUCCESS_STATUS);

    const users = await listUsers();
    expect(users.length).toBeGreaterThan(0);

    const createdUser = find(users, ['cpf', TEST_USER.cpf]);
    expect(createdUser).not.toBeUndefined();

    const updateUserResponse = await updateUser({...TEST_USER, id: Number(createdUser.id), name: TEST_NAME});
    expect(updateUserResponse.status).toBe(SUCCESS_STATUS);

    const updatedUser = await getUser(createdUser.id);
    expect(updatedUser.data.name).toBe(TEST_NAME);

    const deleteUserResponse = await deleteUser(createdUser.id);
    expect(deleteUserResponse.status).toBe(SUCCESS_STATUS);

    const usersAfterDelete = await listUsers();
    const userStillExist = find(usersAfterDelete, ['cpf', TEST_USER.cpf]);
    expect(userStillExist).toBeUndefined();
  });
});
