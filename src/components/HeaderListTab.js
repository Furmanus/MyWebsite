import React from 'react';
import PropTypes from 'prop-types';
import {boundMethod} from 'autobind-decorator';

export class HeaderListTab extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        onClick: PropTypes.func.isRequired,
    };
    @boundMethod
    handleClick() {
        const {
            type,
            onClick,
        } = this.props;

        onClick(type);
    }
    render() {
        const {
            type,
        } = this.props;
        return (
            <li onClick={this.handleClick}>
                <span>{type}</span>
            </li>
        );
    }
}