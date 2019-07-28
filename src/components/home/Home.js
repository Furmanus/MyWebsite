import React from 'react';
import {homeDevStackBlock} from '../../constants/home_blocks';
import {HomeDevBlock} from './HomeDevBlock';
import {transitionDecorator} from '../../decorators/transition_decorator';

@transitionDecorator
export class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <div className="heading">
                    <h2>Łukasz Lach</h2>
                    <h2>JavaScript Developer</h2>
                    <p>Development stack:</p>
                </div>
                <div className="icon-container">
                    {
                        homeDevStackBlock.map(block => {
                            const {
                                name,
                                imageSrc,
                                additionalClass = '',
                            } = block;

                            return (
                                <HomeDevBlock
                                    key={name}
                                    name={name}
                                    imageSrc={imageSrc}
                                    additionalClass={additionalClass}
                                />
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}