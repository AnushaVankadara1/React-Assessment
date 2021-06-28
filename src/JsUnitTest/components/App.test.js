import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe("App" , () =>{
  let props ={
      Demo : {
        heading:"ToDo List",
        enter:"Enter your Task",
        addButtonText:"Add",
        editButtonText:"Edit",
        deleteButtonText:"Delete",
        popupCancel:"Cancel",
        popupSave:"Save",
        popupHeading:"Edit"
    },
    todos: fn=>fn
  }
  it('renders App components', () => {
      const wrapper = shallow(<App {...props}/>);
      expect(wrapper.find(".div_class").exists()).toBe(true);
  });
  it('renders App components and checks for false case', () => {
    const wrapper = shallow(<App {...props}/>);
    expect(wrapper.find(".div11_class").exists()).toBe(false);
  });
  it("should call addtodo", () => {
    const value = {
        todos: fn => fn
    }
    const wrapper = shallow(<App {...props}/>);
    wrapper.instance().addtodo(value);
    expect(wrapper.exists()).toBe(true);
});
});