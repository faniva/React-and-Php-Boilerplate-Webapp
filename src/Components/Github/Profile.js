import React, { Component } from 'react';
import Repos from './Repos';

export default class Profile extends Component {

    render() {
        return (
            <div>
                <div className="box">
                    <div className="media">

                        <div className="media-left profile-pic">
                            <figure className="image is-128x128">
                                <img src={this.props.userData.avatar_url} alt=""/>
                            </figure>

                        </div>
                        <div className="media-content profile-details">
                            <div className="stats">
                                <span className="tag is-primary">{this.props.userData.public_repos} Repos</span>
                                <span className="tag is-info">{this.props.userData.public_gists} Public Gists</span>
                                <span className="tag is-success">{this.props.userData.followers} Followers</span>
                                <span className="tag is-warning">{this.props.userData.following} Following</span>
                            </div>
                            <div className="user-info">
                                <p><strong>Username:</strong> {this.props.userData.login}</p>
                                <p><strong>Location:</strong> {this.props.userData.location}</p>
                                <p><strong>Email Address:</strong> {this.props.userData.email}</p>
                            </div>
                            <br/>
                            <a href={this.props.userData.html_url} className="button is-info" target="_blank">VISIT PROFILE</a>
                        </div>


                    </div>

                </div>

                <Repos userRepos={this.props.userRepos} />
            </div>

        );
    }



}

