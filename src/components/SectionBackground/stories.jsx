import { SectionBackground } from '.'

export default {
    title: 'SectionBackground',
    component: SectionBackground,
    args: {
        children: (
            <div>
                <h1>SectionContainer</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe dicta sint, cumque ad laudantium ipsam, cum porro repudiandae at,
                    iusto dolorem. Quo ut, similique dicta adipisci cumque iusto error earum.
                </p>
            </div>
        )
    },
    argsTypes: {
        children: { type: '' }
    }
}

export const Template = (args) => {
    return (
        <div>
            <SectionBackground {...args} />
        </div>
    )
}