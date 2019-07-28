import React from 'react';

export function fullHeightWrapper(Class) {
    return class extends React.Component {
        render() {
            return (
                <div className="full-height-wrapper">
                    <Class/>
                </div>
            );
        }
    }
}