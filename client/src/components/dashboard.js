import React, { Component } from 'react';

class Posts extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`posts ${ className }`}>
                My Post
            </div>
        );
    }
}

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Posts className="dashboard__posts" />
            </div>
        );
    }
}

export default Dashboard;