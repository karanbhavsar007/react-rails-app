import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
//snapshot of App and if code is changed the test will fail notifying what all was changed
it("renders correctly", () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});