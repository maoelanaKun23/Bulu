import Enzyme,{shallow,render,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

// Set the default serializer for jet to be the from enzyme-to-json
// this produces an easier to read (for humans) serialized format.
expect.addSnapshotSerialier(createSerializer({mode:"deep"}));

// React 16 enzyme adapter
Enzyme.configure({adapter:new Adapter()});

// Make Enzyme functions availabale in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;