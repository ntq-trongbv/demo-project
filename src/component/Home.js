import React from "react";
import logo from '../assets/images/Logo_NTQ_Solution_JSC.png';

import {connect} from "react-redux";
class Home extends React.Component {
    handleDeleteUser = (user) => {
        this.props.deleteUser(user);
    }

    handleCreateUser = () => {
        this.props.addUser();
    }
    render() {
        let { users } = this.props;
        return (
            <>
                <div>Homepage</div>
                <div>
                    <img src={logo}/>
                </div>
                <div onClick={() => this.handleCreateUser()}>Add new</div>
                <div>
                    {
                        users && users.length > 0 &&
                        users.map((user, index) => {
                            return (
                                <div key={index}>
                                    {index + 1} - {user.name} <span onClick={() => this.handleDeleteUser(user)}>|| Delete</span>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({users: state.users })

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUser: () => dispatch({type: 'CREATE_USER'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);