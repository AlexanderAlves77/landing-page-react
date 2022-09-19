import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { Base } from '.'
import { mockBase } from './mock'

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base>Children</Base>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    const { container } = renderTheme(<Base {...mockBase} />)
    expect(container).toMatchSnapshot()
  })
})