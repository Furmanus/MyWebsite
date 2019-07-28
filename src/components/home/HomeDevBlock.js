import React from 'react';
import PropTypes from 'prop-types';

export class HomeDevBlock extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        additionalClass: PropTypes.string,
    };
    static defaultProps = {
        additionalClass: '',
    };
    render() {
        const {
            name,
            imageSrc,
            additionalClass,
        } = this.props;

        return (
            <div className="icon-wrapper">
                <span>{name}</span>
                <img className={`icon-image ${additionalClass}`} src={imageSrc} alt={name}/>
            </div>
        );
    }
}