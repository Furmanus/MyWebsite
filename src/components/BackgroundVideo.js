import React from 'react';
import codeVideoUrl from '../assets/code.mp4';

export class BackgroundVideo extends React.Component {
    render() {
        return (
            <video className="video-background" autoPlay muted loop>
                <source src={codeVideoUrl} type="video/mp4"/>
            </video>
        );
    }
}