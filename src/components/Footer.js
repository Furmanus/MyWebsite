import React from 'react';
import {getCurrentYear} from '../utils/date';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <address className="footer-text">{getCurrentYear()}&#169; Designed and created by Łukasz Lach</address>
            </footer>
        );
    }
}