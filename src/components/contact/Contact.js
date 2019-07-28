import React from 'react';
import {emailImage} from '../../assets';
import {transitionDecorator} from '../../decorators/transition_decorator';

@transitionDecorator
export class Contact extends React.Component {
    render() {
        return (
            <section className="contact">
                <div className="contact-data-wrapper">
                    <div className="contact-element">
                        <a href="mailto:lukaszlach1984@gmail.com">
                            <img title="lukaszlach1984@gmail.com" className="contact-image" src={emailImage}
                                 alt="email"/>
                        </a>
                        <p>lukaszlach1984@gmail.com</p>
                    </div>
                </div>
            </section>
        );
    }
}