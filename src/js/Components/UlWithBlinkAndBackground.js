import React from 'react';
import Ul from './Ul';

export default function UlWithBlinkAndBackground(props) {
    return (
        <Ul {...props} className={'blink background-red'} />
    );
}
