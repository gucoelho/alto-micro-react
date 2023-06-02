import Builder from 'fluentbuilder'
import { Post } from '@models'

export class PostBuilder extends Builder<Post> {
    
    constructor(){
        super()

        this.addShape(faker => ({
            id: faker.random.alphaNumeric(),
            title: faker.name.title(),
            subtitle: faker.name.title(),
            body:  `<p>${faker.random.alphaNumeric()}</p>`
        }))
    }

    withId(id: string): this {
        this.ruleFor("id", id);
        return this
    }

    withTitle(title: string): this {
        this.ruleFor("title", title);
        return this
    }
}
