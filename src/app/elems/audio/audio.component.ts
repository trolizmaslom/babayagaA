import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html'
})
export class AudioComponent {
  @Input() pageData ;
  constructor(public elRef: ElementRef) { }
  checkAudio(audio) {
    if (audio.paused) {
      const el = this.elRef.nativeElement;
      const arr = el.getElementsByClassName('ts-elems-audio');
      for (let i = 0; i < arr.length; i++) {
        arr[i].pause();
      }
      audio.play();
    } else {
      audio.pause();
    }
  }
}
