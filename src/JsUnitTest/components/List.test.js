import React from 'react';
import { shallow } from 'enzyme';
import List from '../../components/List';
describe("List", () => {
  let props ={
    data:[{key: undefined, name: "red12"}],
    Demo : {
      heading:"ToDo List",
      enter:"Enter your Task",
      addButtonText:"Add",
      editButtonText:"Edit",
      deleteButtonText:"Delete",
      popupCancel:"Cancel",
      popupSave:"Save",
      popupHeading:"Edit"
    }
 }
 it('renders List component', () => {
    const wrapper = shallow(<List {...props}/>);
    expect(wrapper.find(".table").exists()).toBe(true);
 });
 it('renders App components and checks for false case', () => {
    const wrapper = shallow(<List {...props}/>);
    expect(wrapper.find(".table11").exists()).toBe(false);
 });
 it('should call deleteItem method', () =>
 {
     const value = {
         target:{
             value:[]
         }
     }
     const wrapper = shallow(<List {...props}/>);
     wrapper.setState({
        key:"red",
        data:[{key:"blue"}]
    })
     wrapper.instance().deleteItem(value);
     expect(wrapper.state('data')).toEqual([{key:"blue"}]);
 });
 it('should call saveDetails method', () =>
 {
     const value = {
         target:{
            //  value:"Create item"
            value:[]
         }
     }
     const wrapper = shallow(<List {...props}/>);
     wrapper.instance().saveDetails(value);
     expect(wrapper.state('data')).toEqual([{key: undefined, name: "red12"}]);
     wrapper.setState({
        // key:0,
        data:[{key:0}]
    })
    wrapper.instance().saveDetails(value);
    expect(wrapper.state('key')).toBe(0)
 });
 it('should call editItem method', () =>
 {
     const value = {
         target:{
             value:"item"
         }
     }
     const wrapper = shallow(<List {...props}/>);
     wrapper.instance().editItem(value);
     expect(wrapper.state('requiredItem')).toEqual(value);
 });
 it('renders edit button for handleoncreate', () => {
    const wrapper = shallow(<List {...props} />);
    wrapper.find(`[id="edit"]`).simulate('click', {target: {requiredItem: "Hello Added"}});
    expect(wrapper.exists()).toBe(true)
  });
  it('renders delete button for handleoncreate', () => {
    const wrapper = shallow(<List {...props} />);
    wrapper.find(`[id="delete"]`).simulate('click', {target: {data: "Hello Added"}});
    expect(wrapper.exists()).toBe(true)
  });
});