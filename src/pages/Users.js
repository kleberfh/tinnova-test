import {Reoverlay} from "reoverlay";
import {Link} from "react-router-dom";
import {useLiveQuery} from "dexie-react-hooks";
import UserDetails from "../components/UserDetails";
import {db, deleteUser} from "../services/indexedDB";
import {FaPen, FaTrashAlt, FaEye} from "react-icons/fa";

export default function Users() {
  const users = useLiveQuery(() => db.users.toArray(), [], []);

  const showUser = (user) => {
    Reoverlay.showModal('Standard', {
      title: user.name ?? 'Nome não encontrado.',
      message: <UserDetails user={user} />,
      type: 'success',
      buttonText: 'Voltar',
      onConfirm: () => {}
    });
  }

  const handleConfirmDelete = async (id) => {
    try {
      const result = await deleteUser(id);
      if (result.status === 'error') {
        console.log('Erro ao exluir usuario:', result.message);
        return;
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = (user) => {
    Reoverlay.showModal('Standard', {
      title: 'Confirmar exclusão',
      message: <p>Deseja realmente excluir <b>{user.name}</b> ?</p>,
      type: 'error',
      buttonText: 'Sim',
      onConfirm: () => handleConfirmDelete(user.id)
    });
  }

  return(
    <div className={"w-full h-full"}>
      <div className={"mt-2 px-4 lg:mt-24"}>
        <h1
          className={"tinnova"}
        >
          Tinnova
        </h1>
        <div className={"bg-[#bbbbbb] w-full md:w-2/3 xl:w-2/3 2xl:w-2/4 mx-auto shadow-xl rounded-lg mt-8 p-6"}>
          <p className={"text-white font-semibold text-xl"}>
            Usuários cadastrados
          </p>
          <div className={"mt-4 space-y-4 mb-4"}>
            {users && users.map(user => (
              <div
                key={user.id.toString()}
                className={"bg-[#E9E9E9] flex flex-row py-2 px-4 justify-between rounded-xl shadow-xl"}
              >
                <p className={"text-textPrimary font-medium text-sm md:text-lg mr-4 truncate w-2/3"}>
                  {user.name ?? 'Nome não encontrado.'}
                </p>
                <div
                  className={"flex flex-row items-center justify-end ml-auto space-x-4 w-1/3"}
                >
                  <button onClick={e => {
                    e.preventDefault();
                    showUser(user)
                  }}>
                    <FaEye size={20} color={'#333333'} />
                  </button>
                  <Link to={`/${user.id}`}>
                    <FaPen size={20} color={'#00c8b3'} />
                  </Link>
                  <button
                    onClick={() => handleDelete(user)}
                  >
                    <FaTrashAlt size={20} color={'#eb4a46'} />
                  </button>
                </div>
              </div>
            ))}
            {users.length === 0 && (
              <p className={"text-textPrimary text-base font-semibold text-center"}>
                Nenhum usuário encontrado
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}