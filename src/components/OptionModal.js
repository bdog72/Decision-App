import React from 'react';

import Modal from 'react-modal';

const OptionModal = props => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
    >
        <h3 style={{ textAlign: 'center' }}>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>OKAY</button>
    </Modal>
);

export default OptionModal;
