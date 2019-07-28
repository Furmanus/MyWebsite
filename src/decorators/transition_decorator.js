import React from 'react';
import Fade from 'react-reveal/Fade';

export function transitionDecorator(Class) {
    return class extends React.Component {
        render() {
            return (
                <Fade>
                    <Class/>
                </Fade>
            );
        }
    }
}