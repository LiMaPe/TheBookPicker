import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleOptionModal}
            contentLabel="Selected Option"
            ariaHideApp={false}
            closeTimeoutMS={200}
            className="modal" 
            >
                <h3 className="modal__title">Enjoy your next book:</h3>
               {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>} 
               <button 
               className="button"
               onClick={props.handleOptionModal}
               >
               Let the reading begin!
               </button>
        </Modal>
);

export default OptionModal;