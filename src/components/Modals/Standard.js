import React from 'react';
import Button from "../Button";
import PropTypes from "prop-types";
import {FaTimes} from 'react-icons/fa';
import { ModalWrapper, Reoverlay } from 'reoverlay';
import 'reoverlay/lib/ModalWrapper.css';
import LocalPropTypes from "../localPropTypes/LocalPropTypes";

export default function Standard({
  title,
  message,
  buttonText,
  onConfirm = () => {},
  type = 'success'
}) {

  const titleColors = {
    success: 'text-primary',
    error: 'text-danger'
  }

  const handleButton = () => {
    onConfirm();
    Reoverlay.hideModal();
  }

  const closeModal = (e) => {
    e.preventDefault();
    Reoverlay.hideModal();
  }

  return (
    <ModalWrapper
      animation={'zoom'}
      contentContainerClassName={"flex flex-col rounded-xl p-4 w-full sm:w-2/3 md:w-2/4 lg:w-1/3 2xl:w-1/5 mx-4"}
    >
      <button
        onClick={closeModal}
        className={"ml-auto mr-0 mb-1"}
      >
        <FaTimes size={20} />
      </button>
      <div className={"space-y-6"}>
        <p
          className={`${titleColors[type]} text-lg font-semibold text-center`}
        >
          {title}
        </p>
        <div
          className={"text-center text-textPrimary"}
        >
          {message}
        </div>
        <div
          className={"flex flex-row space-x-4"}
        >
          <Button
            action={handleButton}
            className={"mx-auto w-2/3"}
            type={type === 'error' ? 'danger': 'success'}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  )
}

Standard.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([
    PropTypes.string,
    LocalPropTypes.children]
  ).isRequired,
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
  onConfirm: PropTypes.func,
};

Standard.defaultProps = {
  type: 'success',
  onConfirm: () => {},
};