---
layout: post
title: Hello world!
date: '2016-06-28 21:14:03 +0200'
categories: website
comments: false
description: >-
  Hello and welcome to my new website hendrikroth.com, a short introduction
  about me and a blog about some web technologies, I'm using.
---

# Hello World!

```javascript
/**
 * Just say hello
 * @param  {String} text Say hello to who?
 * @return {String}      Full sentence
 */
const sayHello = (text) => {
    return `Hello ${text}!`;
};
const helloWorld = sayHello('world');
console.log(helloWorld);
```

## About me

Hi, my name is Hendrik Roth. I'm a full stack web developer with over 10 years experience, living in the near of Dortmund, Germany. I'm passionate about creating awesome stuff, focused on simplicity and lightweight solutions. During my free time, I'm restoring my old '65 VW split bus and meeting my friends with the same attidude, loving all the good old things. This is why I choosed this simple, retro feeling design. The yellow brand color is based on the colors of the in Dortmund located football club, Borussia Dortmund/BVB.

## Blogs technology

To keep things simple, this blog is made by the static site generator [Jekyll](https://jekyllrb.com). This generator helps creating static HTML blog pages, inclusive transpiling and minifying [SASS](http://sass-lang.com) to CSS.

## Hosting

This page is hosted on [Github Pages](https://pages.github.com), which offers free static website hosting and supports Jekyll. By offering Universal SSL, the CDN [Cloudflare](https://www.cloudflare.com) gives this website HTTP2/SSL support.
