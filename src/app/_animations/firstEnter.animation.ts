import {
  trigger, stagger, animate, transition, style, group, query, state, animateChild,
  animation, useAnimation
} from '@angular/animations';
export let firsEnter = animation([
  // initial styles
  query(':enter', [
    style({ position: 'fixed', width: '100%', transform: 'translateY(100%)' }),
  ], {optional: true}),
  // animate styles
  query(':leave',
    group([
      query(':leave .anim-baba', [
        style({transform: 'translateY(0)'}),
        animate(600, style({transform: 'translateY(100vh)'}))
      ], { optional: true }),
      query(':leave .anim-body', [
        style({transform: 'translateY(0)'}),
        animate(600, style({transform: 'translateY(-100%)'}))
      ], { optional: true }),
      query(':leave .anim-title', [
        style({transform: 'translateY(0)'}),
        animate(300, style({transform: 'translateY(-100%)'}))
      ], { optional: true })
    ]), {optional: true}),
  query(':enter',
    group([
      style({ transform: 'translateY(100%)' }),
      animate('600ms ease', style({  transform: 'translateY(0%)'  }) ),
      query(':enter .anim-baba,:enter .anim-body', [
        style({transform: 'translateY(200px)'}),
        animate(800, style({transform: 'translateY(0)'}))
      ], { optional: true })

    ]),
    {optional: true})
]);
export let goInner = animation([
  // initial styles
  query(':enter', [
    style({ position: 'fixed', width: '100%', transform: 'translateX(100vw)', zIndex: '400'}),
  ], {optional: true}),
  // animate styles
  query(':leave', [
    style({transform: 'translateX(0)'}),
    animate(300, style({transform: 'translateX(100vw)'}))
    ], {optional: true}),
  query(':enter',
    group([
      style({transform: 'translateX(100vw)', zIndex: '400'}),
      animate(300, style({transform: 'translateX(0)'}))
    ]),
    {optional: true})
]);
export const firstEnterAnimation =
  trigger('firstEnterAnimation', [
    transition('* <=> media,* <=> art,* <=> contacts,* <=> promo', [ useAnimation(firsEnter), animateChild() ]),
    transition('news <=> newslist,* => news,* => newslist', [ useAnimation(firsEnter), animateChild() ]),
    transition('news => inner, newslist => inner,media => inner, medialist => inner', [useAnimation(goInner), animateChild()]),
    transition('promolist => inner,promo => inner,artlist => inner,art => inner', [useAnimation(goInner), animateChild()])
  ]);


