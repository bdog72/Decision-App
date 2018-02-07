import React from 'react';

import Modal from 'react-modal';

const OptionModal = props => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title" style={{ textAlign: 'center' }}>
            Selected Option
        </h3>
        {props.selectedOption && (
            <p className="modal__body">{props.selectedOption}</p>
        )}
        <button className="button" onClick={props.handleClearSelectedOption}>
            OKAY
        </button>
    </Modal>
);

export default OptionModal;
