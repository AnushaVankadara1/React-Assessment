import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TodoButton from '../../../components/common/TodoButtons';

describe('TodoButton', () =>{
    it('Test click event', () => {
        const onButtonClick = sinon.spy();
        const button = shallow((<TodoButton onClick={onButtonClick}/>));
        button.find('button').simulate('click');
        expect(onButtonClick.calledOnce).toBe(true)
    });
});
