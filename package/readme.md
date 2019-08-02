# Stencil Web Component MaterializeCSS Carousel
This is an application of materializecss carousel as web component, created with stencil, this is not official.

The official Materializecss carousel can be found here: [https://materializecss.com/carousel.html](https://materializecss.com/carousel.html).

The github for this stencil web component project: [https://github.com/leonardopaiva/wc-materializecss-carousel](https://github.com/leonardopaiva/wc-materializecss-carousel).

There you can generate your own web component if you have more specific needs, and contributions are welcome.

### menu

- [Installing to basic html js project](#installing-to-basic-html-js-project)
- [example with custom template](#example-with-custom-template)
- [example with array of items](#example-with-array-of-items)
<br /><br />
- [Install in Angular](#install-in-angular)
- [example Angular array of items example](#example-angular-array-of-items)
- [example Angular custom template](#example-angular-custom-template)
<br /><br />
- <a href="https://stenciljs.com/docs/overview" target="_blank"> Angular, React, Vue, Ember, Javascript official stencil integration guide https://stenciljs.com/docs/overview </a>

## Installing to basic html js project 
##### [back to menu](#menu)

Run ``npm install wc-materializecss-carousel --save`` <br />

### Add scripts: <br />
```js
<script type="module" src="node_modules/wc-materializecss-carousel/dist/wc-materializecss-carousel/wc-materializecss-carousel.esm.js"></script><br />
<script nomodule src="node_modules/wc-materializecss-carousel/dist/wc-materializecss-carousel/wc-materializecss-carousel.js"></script><br />
```

## Example with custom template
##### [back to menu](#menu)

html
```html
<wc-materializecss-carousel>
  <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/3"></a>
  </div>
</wc-materializecss-carousel>
````
css, but you dont need to use this css, the default values will be 400px.
```css
<style>
  wc-materializecss-carousel .carousel {
    height: 100px;
  }
  wc-materializecss-carousel .carousel .carousel-item {
    width: 100px;
    height: 100px;
  }
</style>
```
js
```js
<script>
  var options = {
    dist: -100
  };

  initCarousel("wc-materializecss-carousel");

  function initCarousel(selector) {
    var cmp = document.querySelector(selector);

    if (cmp === null) return;

    cmp.addEventListener('mcssCarouselComponentDidLoad', event => { onDidLoad() })

    function onDidLoad() {
      if (typeof M === "undefined") {
        console.log("M not defined!");
        return;
      }

      var carouselTarget = cmp.querySelector(".carousel");

      var instance = M.Carousel.init(carouselTarget, options);
    }
  }
</script>
```
## Example with array of items
##### [back to menu](#menu)

html
```html
 <wc-materializecss-carousel template="false"></wc-materializecss-carousel>
```
css
you dont need this css, default values will be 400px;
```css
<style>
  wc-materializecss-carousel .carousel {
    height: 300px;
  }
  wc-materializecss-carousel .carousel .carousel-item {
    width: 300px;
    height: 300px;
  }
</style>
```
js
```js
 <script>
  //defaults
  var options = {
    dist: -100
  };

  var defaultArray = [
    {
      id: 0,
      title: '',
      url: 'https://lorempixel.com/250/250/nature/1',
      link: 'https://lorempixel.com/250/250/nature/1',
      alt: 'Imagem 01',
      target: ''
    },
    {
      id: 1,
      title: '',
      url: "https://lorempixel.com/250/250/nature/2",
      link: 'https://lorempixel.com/250/250/nature/2',
      alt: 'Imagem 02',
      target: '_blank'
    },
    {
      id: 2,
      title: '',
      url: "https://lorempixel.com/250/250/nature/3",
      link: 'https://lorempixel.com/250/250/nature/3',
      alt: 'Imagem 03',
      target: ''
    },
    {
      id: 3,
      title: '',
      url: "https://lorempixel.com/250/250/nature/4",
      link: 'https://lorempixel.com/250/250/nature/4',
      alt: 'Imagem 04',
      target: ''
    },
    {
      id: 4,
      title: '',
      url:"https://lorempixel.com/250/250/nature/5",
      link: 'https://lorempixel.com/250/250/nature/5',
      alt: 'Imagem 05',
      target: ''
    }
  ];

  initCarousel("wc-materializecss-carousel");

  function initCarousel(selector) {
    var cmp = document.querySelector(selector);

    if (cmp === null) return;

    cmp.items = defaultArray;

    cmp.addEventListener('mcssCarouselComponentDidLoad', event => { onDidLoad() })

    function onDidLoad() {
      if (typeof M === "undefined") {
        console.log("M not defined!");
        return;
      }

      var carouselTarget = cmp.querySelector(".carousel");

      var instance = M.Carousel.init(carouselTarget, options);
    }
  }
</script>
```

## Install in Angular
##### [back to menu](#menu)

Run ``npm install wc-materializecss-carousel --save`` <br />

### Add scripts: <br />
add import to src/main.ts file, and call defineWCMaterializeCSS(window)
```js
import { defineCustomElements as defineWCMaterializeCSS } from 'wc-materializecss-carousel/loader';

defineWCMaterializeCSS(window);
```

add CUSTOM_ELEMENTS_SCHEMA to src/app/app.module.ts
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
  ]
})
export class AppModule { }
```


## Angular examples

### example Angular custom template 
##### [back to menu](#menu)

html
```html
<wc-materializecss-carousel #mcssCarousel>
  <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/3"></a>
  </div>
</wc-materializecss-carousel>
```

css
you dont need this css, default values will be 400px;
```css
<style>
  wc-materializecss-carousel .carousel {
    height: 300px;
  }
  wc-materializecss-carousel .carousel .carousel-item {
    width: 300px;
    height: 300px;
  }
</style>
```

app.component.ts
```js
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit  {

  @ViewChild('mcssCarousel', {static: false}) mcssCarousel: ElementRef;

  options = {
    dist: -100
  };

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initCarousel(this.mcssCarousel);
  }

  initTest(): void {
  }

  initCarousel(element: ElementRef): void {

    const cmp = element.nativeElement;

    if (cmp === null) return;

    cmp.addEventListener('mcssCarouselComponentDidLoad', event => { this.onDidLoad(cmp); });

  }

  onDidLoad(cmp): void {
    // @ts-ignore
    if (typeof M === 'undefined') {
      console.log('M not defined!');
      return;
    }

    const carouselTarget = cmp.querySelector('.carousel');

    // @ts-ignore
    const instance = M.Carousel.init(carouselTarget, this.options);
  }
}
```



### example Angular array of items 
##### [back to menu](#menu)

html
```html
<wc-materializecss-carousel #mcssCarousel template="false"></wc-materializecss-carousel>
```

css
you dont need this css, default values will be 400px;
```css
<style>
  wc-materializecss-carousel .carousel {
    height: 300px;
  }
  wc-materializecss-carousel .carousel .carousel-item {
    width: 300px;
    height: 300px;
  }
</style>
```

app.component.ts
```js
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

export interface CarouselItems {
  id: number;
  url: string;
  title: string;
  alt: string;
  link: string;
  target: '_blank' | '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit  {

  @ViewChild('mcssCarousel', {static: false}) mcssCarousel: ElementRef;

  options = {
    dist: -100
  };

  defaultArray: CarouselItems[] = [
    {
      id: 0,
      title: '',
      url: 'https://lorempixel.com/250/250/nature/1',
      link: 'https://lorempixel.com/250/250/nature/1',
      alt: 'Imagem 01',
      target: ''
    },
    {
      id: 1,
      title: '',
      url: 'https://lorempixel.com/250/250/nature/2',
      link: 'https://lorempixel.com/250/250/nature/2',
      alt: 'Imagem 02',
      target: '_blank'
    },
    {
      id: 2,
      title: '',
      url: 'https://lorempixel.com/250/250/nature/3',
      link: 'https://lorempixel.com/250/250/nature/3',
      alt: 'Imagem 03',
      target: ''
    },
    {
      id: 3,
      title: '',
      url: 'https://lorempixel.com/250/250/nature/4',
      link: 'https://lorempixel.com/250/250/nature/4',
      alt: 'Imagem 04',
      target: ''
    },
    {
      id: 4,
      title: '',
      url: 'https://lorempixel.com/250/250/nature/5',
      link: 'https://lorempixel.com/250/250/nature/5',
      alt: 'Imagem 05',
      target: ''
    }
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initCarousel(this.mcssCarousel);
  }

  initTest(): void {
  }

  initCarousel(element: ElementRef): void {

    const cmp = element.nativeElement;

    if (cmp === null) return;

    cmp.items = this.defaultArray;

    cmp.addEventListener('mcssCarouselComponentDidLoad', event => { this.onDidLoad(cmp); });

  }

  onDidLoad(cmp): void {
    // @ts-ignore
    if (typeof M === 'undefined') {
      console.log('M not defined!');
      return;
    }

    const carouselTarget = cmp.querySelector('.carousel');

    // @ts-ignore
    const instance = M.Carousel.init(carouselTarget, this.options);
  }
}
```

