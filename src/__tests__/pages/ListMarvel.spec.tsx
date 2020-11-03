import { render } from '@testing-library/react-native';
import React from 'react';
import ListMarvel from '../../pages/ListMarvelPage';
describe('List heroes', () => {
  it('List heroes marvel 100', () => {
    const { debug } = render(<ListMarvel />)

    debug()
  })
})