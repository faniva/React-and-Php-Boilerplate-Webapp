import React, { Component } from 'react';

export default class RepoListItem extends Component {

    render() {
        const {repo} = this.props;

        console.log(repo)
        
        return (
            <li className="list-item">
                <a href={repo.html_url} target="_blank">
                    {repo.name}
                </a> : {repo.description}
            </li>
        );
    }



}

