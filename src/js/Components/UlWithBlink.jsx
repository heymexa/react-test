import React from 'react';
import Ul from './Ul';

export default function UlWithBlink(props) {
    return (
        <Ul {...props} className={'blink'} />
    );
}
