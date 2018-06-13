# Angular Loading Component (Testing)

> A simple Angular Loading Component (Currently this is a testing library for testing create lib on angular). This is built by Angular CLI v6.

## Install

``` bash
npm i -s ngx-simple-loading
```

## Usage

Import the component in app.module.ts or whatever else you like, 

``` bash
import { NgxSimpleLoadingComponent } from 'ngx-simple-loading';
```

also in the same file, add the component in declarations

``` bash
@NgModule({
  declarations: [
    ...
    NgxSimpleLoadingComponent
  ],
  ...
})
```

Then, use the component by just 

``` bash
<ngx-simple-loading></ngx-simple-loading>
```

## Setting the text

It is possible to customize the text by setting attribute "text", say

``` bash
<ngx-simple-loading [text]="'読み込み中'"></ngx-simple-loading>
```

