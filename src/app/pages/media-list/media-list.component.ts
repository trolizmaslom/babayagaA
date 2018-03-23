import { AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ConnectService} from '../../_services/connect.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomService} from '../../_services/custom.service';
import {popupAnimation} from '../../_animations/show.hide.popup.animation';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  animations: [popupAnimation]
})
export class MediaListComponent implements OnInit, AfterViewInit {
  pageData;
  anchor;
  stater = 'hide';
  popupData;
  type = 'media';
  constructor(public conServ: ConnectService,
              public actRout: ActivatedRoute,
              public router: Router,
              public elRef: ElementRef,
              public popService: CustomService) {}
  ngOnInit() {
    this.conServ.getResult('media.list.json').subscribe((response) => {
      this.pageData = response;
    }, (error) => {
      console.log(error);
    });
  }
  ngAfterViewInit() {
    this.actRout.paramMap.subscribe((params) => {
      this.anchor = params.get('anchor');
      if (this.anchor) {
        const promo = this.elRef.nativeElement.getElementsByClassName('promo');
        const target = this.elRef.nativeElement.getElementsByClassName(this.anchor);
        setTimeout(() => {
          const top = target[0].getBoundingClientRect().top - 15;
          promo[0].scrollTo(0, top);
        }, 1600);
      }
    },  (error) => {
      console.log(error);
    });
  }
  showPopup(article, group = this.type) {
    this.type = group;
    this.popService.getResult(article, this.type).subscribe((response) => {
      this.popupData = response;
      this.stater = 'show';
    }, (error) => {
      console.log(error);
    });
  }
}
