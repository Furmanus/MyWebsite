import React from 'react';
import {myPhoto} from '../../assets';
import {transitionDecorator} from '../../decorators/transition_decorator';

@transitionDecorator
export class Info extends React.Component {
    render() {
        return (
            <section className="info">
                <div className="info-image-wrapper">
                    <img className="info-image" src={myPhoto} alt="My picture"/>
                </div>
                <div className="info-content">
                    <h2>Few words about me</h2>
                    <p>My name is Łukasz Lach and I work as a full time JavaScript Developer for world leading e-mail
                        marketing company.
                        Besides being full time developer I'm also full time husband and father. In my free time I like
                        to spend time with my family,
                        code, play video games, workout, read books and listen to music.
                    </p>
                </div>
            </section>
        );
    }
}