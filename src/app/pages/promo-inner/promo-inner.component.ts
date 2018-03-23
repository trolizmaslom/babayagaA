import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PromoService} from '../../_services/promo.service';

@Component({
  selector: 'app-promo-inner',
  templateUrl: './promo-inner.component.html',
  styles: [':host{width: 100%; height: 100%; display: flex; justify-content: center; align-content: center;}']
})
export class PromoInnerComponent implements OnInit {
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
              public promoServ: PromoService,
              public router: Router) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params) => {
      const article = params.get('article');
      this.returnUrl = params.get('root');
      this.promoServ.getResult(article).subscribe((response) => {
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

}
