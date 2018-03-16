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
        animate(600, style({transform: 'translateY(100%)'}))
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
      animate('600ms ease', style({  transform: 'translateY(0%)'  }) ),
      query(':enter .anim-baba,:enter .anim-body', [
        style({transform: 'translateY(200px)'}),
        animate(800, style({transform: 'translateY(0)'}))
      ], { optional: true })

    ]),
    {optional: true})
]);

export const firstEnterAnimation =
  trigger('firstEnterAnimation', [
    transition('promo <=> news,promo <=> media,promo <=> art,promo <=> contacts,* => promo', [
      useAnimation(firsEnter),
      animateChild()
    ]),
    transition('news <=> media,news <=> art,news <=> contacts,* => news', [
      useAnimation(firsEnter),
      animateChild()
    ]),
    transition('media <=> art,media <=> contacts,art <=> contacts,* => media,* => art, * => contacts', [
      useAnimation(firsEnter),
      animateChild()
    ]),
  ]);


