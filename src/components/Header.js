import React from 'react';
import {connect} from 'react-redux';
import {headerSideLinks} from '../constants/nav_links';
import {changeTab} from '../actions/actions';
import {HeaderListTab} from './HeaderListTab';
import {boundMethod} from 'autobind-decorator';
import {
    ABOUT_INFO,
    ABOUT_PRIVATE,
    HOME,
    MY_PROJECTS,
    CONTACT,
} from '../constants/pages';

@connect(null, dispatch => {
    return {
        changeTab: tab => {dispatch(changeTab(tab))},
    };
})
export class Header extends React.Component {
    @boundMethod
    handleTabClick(tab) {
        this.props.changeTab(tab);
    }
    render() {
        return (
            <nav className="nav">
                <ul className="nav-links">
                    {
                        headerSideLinks.map(item => {
                            const {
                                href,
                                image,
                                title,
                                alt,
                            } = item;

                            return (
                                <li key={href}>
                                    <a href={href} target="_blank" rel="noopener">
                                        <img src={image} title={title} alt={alt}/>
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                <ul className="nav-main">
                    <HeaderListTab type={HOME} onClick={this.handleTabClick}/>
                    <HeaderListTab type={MY_PROJECTS} onClick={this.handleTabClick}/>
                    <li className="expandable">
                        <span>about me</span>
                        <ul className="about">
                            <HeaderListTab type={ABOUT_INFO} onClick={this.handleTabClick}/>
                            <HeaderListTab type={ABOUT_PRIVATE} onClick={this.handleTabClick}/>
                        </ul>
                    </li>
                    <HeaderListTab type={CONTACT} onClick={this.handleTabClick}/>
                </ul>
            </nav>
        );
    }
}