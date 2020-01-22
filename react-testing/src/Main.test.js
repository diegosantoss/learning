import React from 'react';
import Main from './Main';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

it("should render Main component", () => {
  const props = {
    title: 'Titulo da página',
    description: 'Aqui um breve resumo de test'
  }

  const main = mount(<Main {...props} />);
  expect(toJson(main)).toMatchSnapshot();
})

it("should render Main component empty", () => {
  const props = {
    title: null,
    description: null
  }

  const main = mount(<Main {...props} />);
  expect(toJson(main)).toMatchSnapshot();
})

// it("should render the homepage for the non logged in user", () => {
//   const props = {
//     isLoggedIn: false,
//     username: null
//   }
//   const app = mount(<App {...props} />)
//   expect(toJson(app)).toMatchSnapshot()
// })