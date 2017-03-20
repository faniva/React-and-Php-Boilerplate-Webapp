import React, { Component } from 'react';
import RepoListItem from './RepoListItem';

export default class Repos extends Component {

    render() {
        return (
            <div className="box">
                <ul className="list-group">
                    {
                        this.props.userRepos.map( repo => {
                            return <RepoListItem
                                    repo={repo}
                                    key={repo.id}
                                    {...this.props} />

                        } )
                    }
                </ul>
            </div>
        );
    }



}

