import {useEffect, useState} from "react";
import {pull, get} from "lodash";
import {Reoverlay} from "reoverlay";
import Input from "../components/Input";
import Button from "../components/Button";
import {maskBr, validateBr} from 'js-brasil';
import {FaChevronLeft} from 'react-icons/fa';
import {Link, useParams} from "react-router-dom";
import {addUser, getUser, updateUser} from "../services/indexedDB";

export default function CreateOrUpdateUser(){
  const params = useParams();

  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [validFields, setValidFields] = useState([]);
  const [id, setId] = useState(get(params, 'id', null));

  const resetInputs = () => {
    setCpf('');
    setName('');
    setId(null);
    setPhone('');
    setEmail('');
    setValidFields([]);
  }

  const getUserDatails = async () => {
    const { data } = await getUser(id);
    if (data) {
      setName(data.name);
      setCpf(maskBr.cpf(data.cpf));
      setPhone(maskBr.telefone(data.phone));
      setEmail(data.email);
      setValidFields(['name', 'cpf', 'phone', 'email']);
    } else {
      setId(null);
    }
  }

  const showError = (error) => {
    Reoverlay.showModal('Standard', {
      type: 'error',
      message: error,
      onConfirm: () => {},
      buttonText: 'Voltar',
      title: 'Ops, ocorreu um erro'
    });
  }

  const createOrUpdateUser = async () => {
    try {
      const response = id ?
        await updateUser({id: Number(id), name, phone, email}) :
        await addUser({name, cpf, phone, email});

      setLoading(false);

      if (response.status === 'error') {
        showError(response.message)
        return;
      }

      resetInputs();

      Reoverlay.showModal('UserCreatedOrUpdateModal', {
        type: id ? 2 : 1
      });
    } catch (e) {
      showError(e);
      setLoading(false);
    }
  }

  const handleSubmit = async () => {
    setLoading(true);
    await createOrUpdateUser();
  }

  const handleValidaiton = (field, validation) => {
    if (!validation) {
      const newInvalidFields = [...validFields];
      setValidFields(pull(newInvalidFields, field))
    } else {
      if (validFields.indexOf(field) === -1) {
        setValidFields([...validFields, field]);
      }
    }
    return validation;
  };

  useEffect(() => {
    if (id) {
      getUserDatails();
    }
  }, [])

  return(
    <div className={"w-full h-full"}>
      <div className={"mt-2 px-4 lg:mt-24"}>
        <h1
          className={"tinnova"}
        >
          Tinnova
        </h1>
        <div className={"bg-[#bbbbbb] space-y-6 w-full md:w-2/3 xl:w-1/3 2xl:w-1/4 my-auto mx-auto shadow-xl rounded-lg mt-8 p-6"}>
          <div className={"flex flex-col w-full"}>
            {id && (
              <Link to={'/usuarios'}>
                <div className={"flex flex-row w-full items-center opacity-80"}>
                  <FaChevronLeft size={14} color={"#FFF"} />
                  <p className={"ml-2 text-white font-medium text-base"}>
                    Voltar
                  </p>
                </div>
              </Link>
            )}
            <p className={"text-white font-semibold text-xl text-center"}>
              {`${id ? 'Editar' : 'Cadastrar'} usuário`}
            </p>
          </div>
          <div className={"mx-auto space-y-4"}>
            <Input
              value={name}
              setValue={setName}
              invalidate={'nome'}
              label={'Nome completo (sem abreviações)'}
              helperText={"Campo deve conter 3 caracteres ou mais."}
              validator={value => handleValidaiton('name', value.length >= 3)}
            />
            <Input
              value={cpf}
              label={'CPF'}
              setValue={setCpf}
              invalidate={'cpf'}
              applyMask={maskBr.cpf}
              validator={value => handleValidaiton('cpf', validateBr.cpf(value))}
            />
            <Input
              value={phone}
              label={'Telefone'}
              setValue={setPhone}
              invalidate={'telefone'}
              applyMask={maskBr.telefone}
              validator={value => handleValidaiton('phone', validateBr.telefone(value))}
            />
            <Input
              value={email}
              label={'Email'}
              setValue={setEmail}
              invalidate={'email'}
              validator={value => handleValidaiton('email', validateBr.email(value))}
            />
          </div>
          <Button
            loading={loading}
            action={handleSubmit}
            className={"mx-auto shadow-xl"}
            disabled={validFields.length !== 4}
          >
            {id ? 'Salvar' : 'Cadastrar'}
          </Button>
        </div>
      </div>
    </div>
  );
}