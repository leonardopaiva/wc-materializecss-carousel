import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss'
})
export class MyComponent {
  @Event() mcssCarouselComponentDidLoad: EventEmitter;
  @Prop() items: any[] = [];
  @Prop() template:boolean = true;

  componentDidLoad() {
    this.mcssCarouselComponentDidLoad.emit();
  }

  defaultRender() {
    return [<div>
      <div class="carousel">
        {this.items.map((item) =>
          <a class="carousel-item" href="#one!">
            <img src={item.url} title="{item}"/>
            <div>{item.url}</div>
          </a>
        )}
      </div>
    </div>]
  }

  customRender() {
  }

  render() {
    if(!this.template) return this.defaultRender();
  }

}
