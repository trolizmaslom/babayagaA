import { trigger, stagger, animate, transition, style, group, query, state, animateChild,
  animation, useAnimation
} from '@angular/animations';


export const popupAnimation =
  trigger('popupAnimation', [
    state('hide', style({ pointerEvents: 'none', transform: 'translateX(100%)'})),
    state('show', style({pointerEvents: 'all',  transform: 'translateX(0)'})),
    transition('show => hide', [
      animate(300, style({ pointerEvents: 'none', transform: 'translateX(100%)'}))
    ]),
    transition('hide => show', [
      animate(300, style({pointerEvents: 'all',  transform: 'translateX(0)'}))
    ]),
  ]);
