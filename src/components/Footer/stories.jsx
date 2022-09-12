import {Footer} from '.'

export default {
    title: 'Footer',
    component: Footer,
    args: {
        html: `<p>Feito com ❤ por Fulldevstacks</p>`,
    }
}

export const Template = (args) => {
    return (
        <div>
            <Footer {...args} />
        </div>
    )
}