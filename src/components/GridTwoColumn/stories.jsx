import {GridTwoColumn} from '.'

export default {
    title: 'GridTwoColumn',
    component: GridTwoColumn,
    args: {
        title: 'Grid two columns',
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Praesentium, nam eum aspernatur voluptatem iusto temporibus 
        tenetur amet accusantium voluptatum doloribus architecto eveniet 
        rerum non. Odit sequi fugiat provident illo aliquam.`,
        srcImg: 'assets/images/javascript.svg'
    },
    argsTypes: {
        children: { type: 'string' }
    }
}

export const Template = (args) => {
    return (
        <div>
            <GridTwoColumn {...args} />
        </div>
    )
}