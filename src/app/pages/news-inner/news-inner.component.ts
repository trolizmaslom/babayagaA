import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsService} from '../../_services/news-service.service';

@Component({
  selector: 'app-news-inner',
  templateUrl: './news-inner.component.html'
})
export class NewsInnerComponent implements OnInit {
  pageData;
  slideConfig = {
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  returnUrl;
  constructor(public actRoute: ActivatedRoute,
              public newsServ: NewsService,
              public router: Router) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params) => {
      const article = params.get('article');
      this.returnUrl = params.get('root');
      this.newsServ.getResult(article).subscribe((response) => {
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
