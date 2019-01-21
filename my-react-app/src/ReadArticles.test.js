import React from 'react';
import renderer from "react-test-renderer";
import ReadArticles from './components/ReadArticles/ReadArticles';

it("renders correctly", () => {
    const tree = renderer.create(<ReadArticles/>).toJSON();
    expect(tree).toMatchSnapshot();
  });