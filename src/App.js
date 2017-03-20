import React, { Component } from 'react';
import Profile from './Components/Github/Profile';
import Search from './Components/Github/Search';

const clientID = '52070d85f08d61c28d33';
const clientSecret = '1a0b4f3f3d5e4ec2d701d1d8078f398a1df12c7f';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : 'josefano',
            userData : [],
            userRepos : [],
            perPage : 5
        }
    }

    componentDidMount(){
        this.getUserData()
        this.getUserRepos()
    }

    render() {
        return (
            <div>
                <h2>Hi {this.state.username}</h2>
                <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
                <Profile {...this.state} />

            </div>
        );
    }

    handleFormSubmit(username){
        // alert(username)
        this.setState({
            username
        }, function(){
            this.getUserData();
            this.getUserRepos();
        })
    }

    /**
     *  Get user data
     */
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientID + '&client_secret=' + this.props.clientSecret,
            dataType: 'json',
            cache : false,
            success : function(result){
                console.log(result);
                this.setState({
                    userData: result
                })

            }.bind(this),
            error : function(xhr,status,err){
                alert(err)
                this.setState({
                    username: null
                })

            }.bind(this)

        })
    }

    /**
     *  Get user repos
     */
    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page='+ this.state.perPage +'&client_id=' + this.props.clientID + '&client_secret=' + this.props.clientSecret + '&sort=created',
            dataType: 'json',
            cache : false,
            success : function(result){
                console.log(result);
                this.setState({
                    userRepos: result
                })

            }.bind(this),
            error : function(xhr,status,err){
                alert(err)

            }.bind(this)

        })
    }

}

App.propTypes = {
    name : React.PropTypes.string.isRequired
}

App.defaultProps = {
    clientID,
    clientSecret
}



