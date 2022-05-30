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

export const listUsers = async () => await db.users.toArray();

export const getUser = async (id) => {
  try {
    return {
      status: 'successo',
      data: await db.users.get((Number(id)))
    }
  } catch (error) {
    return {
      status: 'error',
      message: `Falha buscar usuário: ${error}`
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
  } catch (error) {
    return {
      status: 'error',
      message: `Falha ao criar ${user.name}: ${error}`
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
    return {
      status: 'error',
      message: `Erro ao salvar usuários: ${error}`
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
    return {
      status: 'error',
      message: `Falha ao alterar ${user.name}: ${error}`
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
      message: `Falha ao exluir usuário: ${error}`
    }
  }
}
