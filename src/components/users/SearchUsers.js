import React, { Component } from 'react'

export class SearchUsers extends Component {
    state ={
        search: ''
    }
    handelForm =(e) =>{
        this.setState({
            search: e.target.value
        })
    }
    serachUsers =(e)=>{
        e.preventDefault();
    this.props.getUsersSearch(this.state.search)
    }
    render() {
        const { search } = this.state;
        return (
          
                <form onSubmit={this.serachUsers}>
                    <div className="form-group ">
                      
              <input onChange={this.handelForm} value={search} placeholder="Search users ..." id="search" type="text" className="form-control"/>
                        </div>{search}
                        <button className="btn btn-danger btn-block">Search</button>
                </form>
        
        )
    }
}

export default SearchUsers
