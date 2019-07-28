import React from 'react';
import {connect} from 'react-redux';
import {Home} from './home/Home';
import {boundMethod} from 'autobind-decorator';
import {
    CONTACT,
    HOME,
    MY_PROJECTS,
    ABOUT_PRIVATE,
    ABOUT_INFO,
} from '../constants/pages';
import {Portfolio} from './portfolio/Portfolio';
import {Contact} from './contact/Contact';
import {Info} from './info/Info';
import {Hobby} from './hobby/Hobby';

@connect(state => ({
    selectedTab: state.selectedTab,
}))
export class Content extends React.Component {
    @boundMethod
    renderContent() {
        const {
            selectedTab,
        } = this.props;

        switch (selectedTab) {
            case HOME:
                return <Home/>;
            case MY_PROJECTS:
                return <Portfolio/>;
            case CONTACT:
                return <Contact/>;
            case ABOUT_INFO:
                return <Info/>;
            case ABOUT_PRIVATE:
                return <Hobby/>;
            default:
                return <Home/>;
        }
    }
    render() {
        return (
            <main className="main">
                {this.renderContent()}
            </main>
        );
    }
}