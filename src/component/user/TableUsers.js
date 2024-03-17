import React from "react";
import Table from 'react-bootstrap/Table';
import {fetchAllUser} from "../../services/UserService";
import ReactPaginate from "react-paginate";
// import {connect} from "react-redux";
import ModalAddNew from "../ModalAddNew";

class TableUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            totalUsers: 0,
            totalPages: 0,
            isShow: false,
            isEdit: false,
            user: {}
        };
        this.handleGetUsers()
    }

    handleGetUsers = async (page=1) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            this.setState({
                users: res.data,
                totalUsers: res.total,
                totalPages: res.total_pages
            })
        }
        // console.log(res, this.state);
        // redux
        // this.props.getUsers(this.state.users);
    }
    handlePageClick = (event) => {
        let page = +event.selected + 1;
        this.handleGetUsers(page);
    }

    handleShow = (type, user = {}) => {
        if (type == "edit") {
            this.setState({
                isEdit: true,
                isShow: !this.state.isShow
            })
        } else {
            this.setState({
                isEdit: false,
                isShow: !this.state.isShow,
                user: user
            })
        }
    }
    render() {
        let {users, totalPages, isShow, isEdit, user} = this.state;
        return (
            <>
                <div>
                    <button className={"btn btn-success my-3"} onClick={() => this.handleShow('add')}>Add new user</button>
                </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users && users.length > 0 &&
                        users.map((user, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>
                                        <button className={"btn btn-warning mx-3"} onClick={() => this.handleShow('edit', user)}>Edit</button>
                                        <button className={"btn btn-danger mx-3"}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </Table>
                <ModalAddNew show={isShow} isEdit={isEdit} user={user} handleShow={this.handleShow}></ModalAddNew>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={this.handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}

                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                ></ReactPaginate>
            </>
        )
    }
}

// const mapStateToProps = (state) => ({name: state.name, job: state.job })
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUsers: (users) => dispatch({type: 'GET_USERS', payload: users})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TableUsers);
export default TableUsers;
