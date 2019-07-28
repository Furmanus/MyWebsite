import React from 'react';
import PropTypes from 'prop-types';

export class PortfolioBlock extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        previewUrl: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    };
    render() {
        const  {
            name,
            description,
            previewUrl,
            link,
        } = this.props;

        return (
            <div className="item-wrapper">
                <img className="item-preview" src={previewUrl} alt={name}/>
                <div className="description">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className="link-container">
                    <a className="link-button" href={link}>
                        <div className="border-left"></div>
                        <div className="border-right"></div>
                        Try
                    </a>
                </div>
            </div>
        );
    }
}