import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



function ModalAlert({firstName, lastName, image, openModal, closeModal, modalIsOpen}) {
  let subtitle;

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>X</button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>New Person Added!</h2>
        <ul>
          <li>First Name: {firstName}</li>
          <li>Last Name: {lastName}</li>
          <li>Image: {image}</li>
        </ul>
      </Modal>
    </div>
  );
}

export default ModalAlert;
