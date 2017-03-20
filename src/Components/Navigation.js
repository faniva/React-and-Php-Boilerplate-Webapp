import React, { Component } from 'react';

export default class Navigation extends Component {

    constructor(props){
        super(props);

        this.state = {
            page : 'home'
        }

    }

    homeClick(e){
        e.preventDefault();
        // alert('current page : ' + this.state.page);

        this.setState({
            page : 'about'
        })
    }

    aboutClick(e){
        e.preventDefault();
        // alert('current page : ' + this.state.page);

        this.setState({
            page : 'about'
        })
    }

    render() {
        return (
            <nav id="main-nav" className="main-navigation" role="navigation">
                <ul>
                    <li className={ this.state.page == 'home' ? 'active' : 'inactive' }   ><a href="#" onClick={this.homeClick.bind(this) }>Home</a></li>
                    <li className={ this.state.page == 'about' ? 'active' : 'inactive' }><a href="#" onClick={this.aboutClick.bind(this) }>About</a></li>
                </ul>
            </nav>
        );
    }

}

// App.propTypes = {
//     name : React.PropTypes.string.isRequired
// }
