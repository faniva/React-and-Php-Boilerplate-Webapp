import React, { Component } from 'react';
// import RepoListItem from './RepoListItem';

export default class Search extends Component {

    onSubmitHandler(e){
        e.preventDefault();
        console.log('submitted')
    }

    onChangeHandler(e){
        e.preventDefault();
        console.log(e.target.value.trim())

        var username = e.target.value.trim();

        this.props.onFormSubmit(username)
    }

    render() {
        return (
            <div className="box">
                <form action="post" onSubmit={this.onSubmitHandler.bind(this)}>
                    <label htmlFor="">Search Github Users</label>
                    <input type="text" ref="username" className="input" onChange={this.onChangeHandler.bind(this)} />
                </form>
            </div>
        );
    }

}

