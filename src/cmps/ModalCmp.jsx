import { useState, useEffect } from 'react'
import { Modal } from 'react-responsive-modal';
import { selectModal, showModal, } from '../store/reducers/attractionsSlice'
import { useSelector, useDispatch } from 'react-redux';

import 'react-responsive-modal/styles.css';

import React from 'react'





const ModalCmp = () => {
    const [open, setOpen] = useState(false);
    const modal = useSelector(selectModal)
    const dispatch = useDispatch()


    const onOpenModal = () => {
        setOpen(true)
    }

    const onCloseModal = async () => {
        setOpen(false)
        await dispatch(showModal())
    };


    useEffect(() => {
        if (modal) setOpen(true)
    }, [modal])

    return (
        <div>
            <Modal showCloseIcon={true} open={open} onClose={onCloseModal} center>
                <div className="modal-container">
                    <h1>hi</h1>
                </div>
            </Modal>
        </div>
    )
}

export default ModalCmp
