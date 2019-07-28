import React from 'react';
import {underConstructionImage} from '../../assets';
import {transitionDecorator} from '../../decorators/transition_decorator';

@transitionDecorator
export class Hobby extends React.Component {
    render() {
        return (
            <section className="hobby">
                <img src={underConstructionImage} alt="work in progress"/>
                <h1>under construction</h1>
            </section>
        );
    }
}