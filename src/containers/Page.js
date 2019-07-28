import React, {Fragment} from 'react';
import {BackgroundVideo} from '../components/BackgroundVideo';
import {Header} from '../components/Header';
import {Content} from '../components/Content';
import {Footer} from '../components/Footer';

export class Page extends React.Component {
    render() {
        return (
            <Fragment>
                <BackgroundVideo/>
                <div className="app-container">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </Fragment>
        );
    }
}