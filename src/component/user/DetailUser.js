import React from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        // axios.get("https://reqres.in/api/users/" + id).then(res => {
        //     this.setState({
        //         user: res && res.data && res.data.data ? res.data.data : {}
        //     })
        // })
        let res = await axios.get("https://reqres.in/api/users/" + id);
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })
    }

    handleBack = () => {
        this.props.history.push('/users')
    }

    render() {
        let {user} = this.state;
        let isEmptyUser = Object.keys(user).length === 0;
        return (
            <>
                <div>Detail User</div>
                {!isEmptyUser ?
                    <>
                        <div>{user.id} - {user.first_name} {user.last_name}</div>
                        <div>{user.email}</div>
                        <img src={user.avatar}></img>
                    </>
                    :
                    <div>Khong co du lieu</div>
                }

                <button type="button" onClick={() => this.handleBack()}>Back</button>
            </>
        )
    }
}

export default withRouter(DetailUser);
