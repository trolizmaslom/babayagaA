import {
  trigger, stagger, animate, transition, style, group, query, state, animateChild,
  animation, useAnimation
} from '@angular/animations';

export let enterLogo = animation([
  group([
    animate(400, style({opacity: '1'})),
    query('.logo', [
      style({transform: 'scale(3)', opacity: '0'}),
      animate(400,  style({transform: 'scale(1)', opacity: '1'}))
    ])
  ])
]);
export let leaveLogo = animation([
  animate(600, style({opacity: '0'}))
]);
export const logoAnimation =
  trigger('logoAnimation', [
    state('off', style({opacity: '0'})),
    state('on', style({opacity: '1', pointerEvents: 'all'})),
    transition('off => on,* => on', useAnimation(enterLogo)),
    transition('on => off', useAnimation(leaveLogo))
  ]);
