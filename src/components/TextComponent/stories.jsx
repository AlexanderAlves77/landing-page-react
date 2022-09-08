import {TextComponent} from '.'

export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Molestias omnis error nihil laudantium. Obcaecati sed, quisquam 
        voluptatibus quae fugit architecto aliquam quia? Beatae suscipit 
        voluptatum earum doloribus aspernatur nostrum quasi.`
    },
    argsTypes: {
        children: { type: 'string' }
    }
}

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    )
}