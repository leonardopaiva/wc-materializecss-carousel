#carouselItems
export interface carouselItems {
  id: number;
  url: string;
  title: string;
  alt: string;
  link: string;
  target: '_blank' | '';
}

# my-component



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type              | Default |
| ---------- | ---------- | ----------- | ----------------- | ------- |
| `items`    | --         |             | `carouselItems[]` | `[]`    |
| `template` | `template` |             | `boolean`         | `true`  |


## Events

| Event                          | Description | Type               |
| ------------------------------ | ----------- | ------------------ |
| `mcssCarouselComponentDidLoad` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
