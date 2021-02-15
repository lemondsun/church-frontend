import React, { useState }from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import Button from 'react-bootstrap/Button'

export default function MinistryModal(props) {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <ModalHeader closeButton>
        <p>{ props.name}</p>
  </ModalHeader>
      
  <Modal.Body>
  <h4>Lead by So and So</h4>
  <p>
    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    consectetur ac, vestibulum at eros.
  </p>
</Modal.Body>
<Modal.Footer>
  <Button onClick={props.onHide}>Close</Button>
</Modal.Footer>
      </Modal>
  )
}
