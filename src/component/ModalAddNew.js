import React from "react";
import {Modal, Button, Form} from "react-bootstrap";
import {postCreateUser, putUpdateUser} from "../services/UserService";
import {toast} from "react-toastify";
// import {connect} from "react-redux";

class ModalAddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: ''
        };
    }

    handleChange = (event) => {
        let name = event.target.name
        let val = event.target.value
        this.setState({
            [name]: val
        })
        console.log(this.state)
    }

    handleAddUser = async (name, job) => {
        // console.log('check state: ', name, job)
        let res = await postCreateUser(name, job);
        if (res && res.id) {
            this.props.handleShow();
            this.setState({
                name: '',
                job: ''
            })
            toast.success("Add user success")
        } else {
            toast.error("Add user fail")
        }
        // redux
        // this.props.addUser();
    }

    handleUpdateUser = async (id, name, job) => {
        // this.updateUser(event);
        let res = await putUpdateUser(id, name, job);
        console.log('check state: ', name, job, res)
        if (res && res.id) {
            this.props.handleShow();
            this.setState({
                name: '',
                job: ''
            })
            toast.success("Update user success")
        } else {
            toast.error("Update user fail")
        }
        // redux
        // this.props.addUser();
    }

    updateUser = async (user) => {
        await this.setState({
            name: user.name,
            job: user.job
        })
    }
    render() {
        let { show, handleShow, isEdit, user } = this.props;
        let {name, job, id} = this.state;
        return (
            <>
                <Modal show={show} onHide={handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>{isEdit ? "Edit" : "Add"} user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" name={"name"} value={user.first_name} placeholder="Name" onChange={(event) => this.handleChange(event)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formJob">
                                <Form.Label>Job</Form.Label>
                                <Form.Control type="text"  name={"job"}  value={this.state.job} placeholder="Job" onChange={(event) => this.handleChange(event)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShow}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => isEdit ? this.handleUpdateUser(user.id, user.first_name, job) : this.handleAddUser(name, job)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
};

// const mapStateToProps = (state) => ({name: state.name, job: state.job })
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addUser: () => dispatch({type: 'ADD_USER'})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ModalAddNew);
export default ModalAddNew;
