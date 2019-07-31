import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
  @Event() todoCompleted: EventEmitter;
  @Prop() first: any[] = [];

  @Prop() options: any = {};
  @Prop() customTemplate:boolean = false;

  @Prop() middle: string;
  @Prop() last: string;

  componentDidLoad() {
    this.todoCompleted.emit();

    // var carouselTarget = document.querySelector(".carousel");
    // @ts-ignore
    // var instance = M.Carousel.init(carouselTarget, {});
  }

  defaultRender() {
    return [<div>
      {
        <link rel="stylesheet" href={`default.css`} />
      }
      <div class="carousel">
        {this.first.map((item) =>
          <a class="carousel-item" href="#one!">
            <img src={item.url} title="{item}"/>
            <div>{item.url}</div>
          </a>
        )}
      </div>
    </div>]
  }

  customRender() {
    return [<slot></slot>];
  }

  render() {
    if (!this.customTemplate) return this.defaultRender();

    return this.customRender();
  }

}
