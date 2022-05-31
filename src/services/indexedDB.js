import {Dexie} from "dexie";
import {getUsers} from "./tinnova";

export const db = new Dexie('tinnova');

db.version(1).stores({
  users: '++id, name, cpf, phone, email',
});

export const initializeDB = async () => {
  const users = await listUsers();

  if (users.length === 0) {
    getUsers()
      .then(response => {
        bulkAddUser(response);
      });
  }
}

export const listUsers = async () => {
  try {
    return await db.users.toArray()
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getUser = async (id) => {
  try {
    return {
      status: 'successo',
      data: await db.users.get((Number(id)))
    }
  } catch (e) {
    return {
      status: 'error',
      message: e
    }
  }
}

export const addUser = async (user) => {
  try {
    await db.users.add(user);
    return {
      status: 'success',
      message: `Usuário ${user.name} criado com sucesso.`
    }
  } catch (e) {
    return {
      status: 'error',
      message: e
    }
  }
}

export const bulkAddUser = async (users) => {
  try {
    await db.users.bulkAdd(users);

    return {
      status: 'success',
      message: `Usuários salvos com sucesso.`
    }
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: error
    }
  }
};

export const updateUser = async (user) => {
  try {
    await db.users.update(user.id, user);

    return {
      status: 'success',
      message: `Usuário ${user.name} alterado com sucesso.`
    }
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: error
    }
  }
}

export const deleteUser = async (id) => {
  try {
    await db.users.delete(id);

    return {
      status: 'success',
      message: 'Usuário excluido com sucesso.'
    }
  } catch (error) {
    return {
      status: 'error',
      message: error
    }
  }
}
