import React from 'react'
import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'


export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true)
    };

  return (
    <div>
        <Button class="relative" onClick={handleClick} primary>Open Modal</Button>
        {showModal && <Modal />}
    </div>
  )
}
