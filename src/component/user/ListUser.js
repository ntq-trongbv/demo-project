import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

class ListUser extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            users: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let users = this.state.users;
        return (
            <>
                <div>List User</div>
                <div className="list-user-container">
                    {users && users.length > 0 &&
                        users.map((user, index) => {
                            return (
                                <>
                                    <div key={index} onClick={() => this.handleViewDetail(user)}>
                                        <span>{user.id}</span><span> - </span>
                                        <span>{user.first_name} {user.last_name}</span>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </>
        )
    }

}

export default withRouter(ListUser);