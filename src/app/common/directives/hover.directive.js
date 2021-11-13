import { WFMDirective } from 'framework'

class AppHoverDirective extends WFMDirective {
    constructor(config) {
        super(config)
    }
}

export const appHoverDirective = new AppHoverDirective({
    selector: '[appHover]',
    onInit(element, color) {

        let defaultColor = element.css().color

        element.on('mouseenter', () => {
            element.css({color})
            // color <=> color:color in object
        })

        element.on('mouseleave', () => {
            element.css({color: defaultColor})
        })

    }
})