import {
  trigger, stagger, animate, transition, style, group, query, state, animateChild,
  animation, useAnimation
} from '@angular/animations';

export let startScreen = animation([
  style({  position: 'fixed', width: '100%'}),
  group([
    query('.anim-startbaba', [
      style({transform: 'translateX(-100vw)'}),
      animate(400, style({transform: 'translateX(0)'}))
    ]),
    query('.anim-startbody', [
      style({transform: 'translateY(100vh)'}),
      animate(400, style({transform: 'translateY(0)'}))
    ])
  ])

]);
export const startScreenAnimation =
  trigger('startScreenAnimation', [
    transition(':enter', useAnimation(startScreen))
  ]);
