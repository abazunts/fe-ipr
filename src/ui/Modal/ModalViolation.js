import React from 'react';
import Modal from 'react-modal';
import Button from "../../elements/Button/button";
import ViolationAdd from "../Inspections/ViolationAdd";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '20%',
        height: 'auto',
    }
};

class ModalViolation extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };


    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    render() {
        return (
            <div>
                <Button onClick={this.openModal} title={this.props.t('inspections.addViolation')} background={'#0065a1'}/>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ViolationAdd {...this.props} onClick={this.closeModal}/>
                </Modal>
            </div>
        );
    }
}

export default ModalViolation