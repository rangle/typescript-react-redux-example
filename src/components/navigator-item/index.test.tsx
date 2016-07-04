import { shallow, render } from 'enzyme';

import * as React from 'react';

import NavigatorItem from './index';

describe('Navigator Item Component', () => {
  it('should create a navigator item', () => {
   const navigatorItem = shallow(<NavigatorItem />);
   expect(NavigatorItem.length).toBe(1);
   expect(navigatorItem.hasClass('truncate')).toBe(true);
  });

  it('should create a navigator item with default props and classes', () => {
   const navigatorItem = shallow(<NavigatorItem />);
   expect(navigatorItem.hasClass('hide')).toBe(false);
   expect(navigatorItem.hasClass('mr2')).toBe(false);
   expect(navigatorItem.hasClass('ml2')).toBe(false);
  });

  it('should create a navigator item with classes that match props', () => {
   const navigatorItem = shallow(<NavigatorItem isVisible={false} mr ml />);
   expect(navigatorItem.hasClass('hide')).toBe(true);
   expect(navigatorItem.hasClass('mr2')).toBe(true);
   expect(navigatorItem.hasClass('ml2')).toBe(true);
  });

  it('should render navigator item with no children by default', () => {
   const navigatorItem = render(<NavigatorItem />);
   expect(navigatorItem.text()).toBe('');
  });

  it('should render a navigator item with children correctly rendered', () => {
   const navigatorItem = render(<NavigatorItem>Hello World</NavigatorItem>);
   expect(navigatorItem.text()).toBe('Hello World');
  });
});

