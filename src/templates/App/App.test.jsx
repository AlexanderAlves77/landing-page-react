import Home from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme'
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />)
  const headingContainer = screen.getByRole('heading', { name: 'Olá' }).parentElement
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg
  })
  expect(headingContainer).toMatchSnapshot()
  expect(headingContainer).toHaveStyleRule('background', 'blue')
})
