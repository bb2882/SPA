import { WFMComponent, $ } from 'framework';

class TabsPageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }

    events() {
        return {
            'click .collapsible': 'onTabClick'
        }
    }

    onTabClick({target}) {
        let $target = $(target)
        if(!$target.hasClass('collapsible-header')) return
        this.el.findAll('.js-tab').forEach(e => {
            e.removeClass('active')
        })
        $target.parent().addClass('active')
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `
        <div class="row">
            <div class="col s6 offset-s3">
                <ul class="collapsible popout collapsible-accordion">

                    <li class='js-tab'>
                        <div class="collapsible-header"><i class="material-icons">subtitles</i></div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda molestiae deleniti a voluptatibus laboriosam dolores, error quam numquam, provident totam, expedita dolore eum impedit tempore asperiores dignissimos. Architecto, dolor?
                        Sapiente maxime suscipit sit et omnis natus asperiores odit commodi quidem soluta excepturi in repellat, officiis id, cupiditate assumenda repudiandae debitis, officia molestiae. Cupiditate nulla natus quas tempore in debitis?</span></div>
                    </li>

                    <li class='js-tab'>
                        <div class="collapsible-header"><i class="material-icons">games</i></div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda molestiae deleniti a voluptatibus laboriosam dolores, error quam numquam, provident totam, expedita dolore eum impedit tempore asperiores dignissimos. Architecto, dolor?
                        Sapiente maxime suscipit sit et omnis natus asperiores odit commodi quidem soluta excepturi in repellat, officiis id, cupiditate assumenda repudiandae debitis, officia molestiae. Cupiditate nulla natus quas tempore in debitis?</span></div>
                    </li>

                    <li class="active js-tab">
                        <div class="collapsible-header"><i class="material-icons">Library</i></div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda molestiae deleniti a voluptatibus laboriosam dolores, error quam numquam, provident totam, expedita dolore eum impedit tempore asperiores dignissimos. Architecto, dolor?
                        Sapiente maxime suscipit sit et omnis natus asperiores odit commodi quidem soluta excepturi in repellat, officiis id, cupiditate assumenda repudiandae debitis, officia molestiae. Cupiditate nulla natus quas tempore in debitis?</span></div>
                    </li>

                </ul>
            </div>
        </div>
    `,
    styles: `
        .collapsible-accordion { margin-top: 30px; }
        .collapsible li.active .collapsible-body {
            display: block;
          }
    `
});