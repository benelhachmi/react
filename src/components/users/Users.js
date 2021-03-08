import React, { Component } from 'react'
import axios from 'axios';
import User from './User';
import SearchUsers from './SearchUsers'
export class Users extends Component {
    //1 ére c'et le constructor 
    constructor(props) {
      super(props)
      this.state = {
         users:[ ]
    }
   }

getUsers = () =>{
    axios.get('https://api.github.com/users')
    .then(response => {
        this.setState({
            users: response.data
        })
    })
}
//4 éme c'est componentDidMount
componentDidMount(){
    this.getUsers();
}  
searchUsersFromGit = (data) =>{
if(data !=''){
    axios.get(`https://api.github.com/search/users?q=${data}`)
    .then(response =>{
        this.setState({
            users: response.data.items
        })
  
    })
}
}
//3 éme c'est render
    render() {
        return (
            <div>
                <div className="row my-2">
                    <div className="col-md-12 ">
                        <SearchUsers getUsersSearch={this.searchUsersFromGit}></SearchUsers>
                    </div>
                </div>
                <div className="row">
             { this.state.users.map(user => (
                 <div className="col-md-4"  key={user.id}>
                 <User user={user} > </User>
                 </div>
             ))}
</div>
            </div>
        )
    }
}

export default Users
