import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

export interface carouselItems {
  id: number;
  url: string;
  title: string;
  alt: string;
  link: string;
  target: '_blank' | '';
}

@Component({
  tag: 'wc-materializecss-carousel',
  styleUrl: 'wc-materializecss-carousel.scss'
})
export class WcMaterializecssCarousel {
  @Event() mcssCarouselComponentDidLoad: EventEmitter;
  @Prop() items: carouselItems[] = [];
  @Prop() template:boolean = true;

  componentDidLoad() {
    this.mcssCarouselComponentDidLoad.emit();
  }

  defaultRender() {
    return [
      <div class="carousel">
        {this.items.map((item) =>
          <a class="carousel-item" href={item.link} data-id={item.id} title={item.title} target={item.target}>
            <img src={item.url}  alt={item.alt}/>
          </a>
        )}
      </div>]
  }

  customRender() {
  }

  render() {
    if(!this.template) return this.defaultRender();
  }

}
