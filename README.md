# Angular Loading Component

> A simple Angular Loading Component. This is built by Angular CLI v9.

Simple Demo: [Demo](https://codesandbox.io/s/crimson-sun-g2kzq?file=/src/app/app.module.ts:0-389)

## Install

```bash
npm i -s ngx-simple-loading
```

## Usage

Import the component in app.module.ts or whatever else you like,

```bash
import { NgxSimpleLoadingComponent } from 'ngx-simple-loading';
```

also in the same file, add the component in declarations

```bash
@NgModule({
  declarations: [
    ...
    NgxSimpleLoadingComponent
  ],
  ...
})
```

Then, use the component by just

```bash
<ngx-simple-loading></ngx-simple-loading>
```

## Setting the text

It is possible to customize the text by setting attribute "text", say

```bash
<ngx-simple-loading [text]="'読み込み中'"></ngx-simple-loading>
```
