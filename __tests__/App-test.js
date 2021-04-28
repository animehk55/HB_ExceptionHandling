// /**
//  * @format
//  */

// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });


// import React from 'react';
// import renderer from 'react-test-renderer';
// import Intro from '../Intro';

// test('renders correctly', () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

import 'react-native';
import React from 'react';
import Employee from './Components/Employee.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Employee />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});