import { screen } from '@testing-library/react'
import { GridTwoColumn } from '.'
import { renderTheme } from '../../styles/render-theme'

import mock from './mock';

describe('<GridTwoColum />', () => {
    it('should render', () => {
        renderTheme(<GridTwoColum>Children</GridTwoColum>)
        expect(screen.getByRole('heading')).toBeInTheDocument()
    })

    it('should render two column grid', () => {
        const { container } = renderTheme(<GridTwoColum {...mock} />)
        expect(container).toMatchSnapshot()
    })
})