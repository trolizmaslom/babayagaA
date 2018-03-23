import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MediaService} from '../../_services/media.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-media-inner',
  templateUrl: './media-inner.component.html',
  styles: [':host{width: 100%; height: 100%; display: flex; justify-content: center; align-content: center; position: relative;}']
})
export class MediaInnerComponent implements OnInit {
  pageData;
  slideConfig = {
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  returnUrl;
  constructor(public actRoute: ActivatedRoute,
              public mediaServ: MediaService,
              public router: Router,
              public sanitar: DomSanitizer) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params) => {
      const article = params.get('article');
      this.returnUrl = params.get('root');
      this.mediaServ.getResult(article).subscribe((response) => {
        this.pageData = response;
      }, (error) => {
        console.log(error);
        this.router.navigate(['not-found']);
      });
    });
  }
  onBackButton() {
    this.router.navigate([this.returnUrl]);
  }
  getYtUrl(item) {
    return this.sanitar.bypassSecurityTrustResourceUrl(item);
  }
}
