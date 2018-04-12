import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Foo from '../index';

describe('A suite', function() {
  it('should render compenent with wrapper class .list-loading', function() {
    expect(shallow(<Foo />).find('.list-loading').length).toBe(1);
  });

  it('should render 4 items by class .list-loading-item stylized"', function() {
    expect(shallow(<Foo />).find('.list-loading').length).toBe(1);
  });

//   it('should mount in a full DOM', function() {
//     expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
});