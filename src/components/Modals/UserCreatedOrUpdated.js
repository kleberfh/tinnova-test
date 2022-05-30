import React from 'react';
import Button from "../Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { ModalWrapper, Reoverlay } from 'reoverlay';
import 'reoverlay/lib/ModalWrapper.css';

// TYPE 1 EQUALS CREADTED AND 2 FOR UPDATED.
export default function UserCreatedOrUpdated({ type = 1 }) {
  const closeModal = () => {
    Reoverlay.hideModal();
  }

  return (
    <ModalWrapper
      animation={'zoom'}
      contentContainerClassName={"flex flex-col rounded-xl p-4 w-full sm:w-2/3 md:w-2/4 lg:w-1/3 2xl:w-1/5 mx-4 space-y-6"}
    >
      <p
        className={"text-lg text-primary font-semibold text-center"}
      >
        {`Usuário ${type === 1 ? 'cadastrado' : 'alterado'} com sucesso!`}
      </p>
      <div
        className={"text-center text-textPrimary"}
      >
        Deseja ver a nova lista de usuários?
      </div>
      <div
        className={"flex flex-row space-x-4"}
      >
        <Button
          action={closeModal}
          className={"flex-1"}
        >
          Não
        </Button>
        <Link
          to={'/usuarios'}
          onClick={closeModal}
          className={"button-ghost flex-1"}
        >
          Sim
        </Link>
      </div>
    </ModalWrapper>
  )
}

UserCreatedOrUpdated.propTypes = {
  type: PropTypes.oneOf([1, 2])
};

UserCreatedOrUpdated.defaultProps ={
  type: 1
};