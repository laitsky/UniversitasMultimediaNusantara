import {
  Component
} from '@angular/core';
import {
  Article
} from './article/article.model'; // import juga model article
// yang telah dibangun
// oh ya isi from pada import merupakna path karena article mode ada di folder article maka
// kita harus masuk ke folder article dulu, baru ambil article.model ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularModelWithObjects';
  articles: Article[];

  constructor() {
    // kita deklarasi saja data awal pada constructor dengan membuat object article
    this.articles = [new Article('Angular 2', 
    'https://angular.io', 
    10),
    new Article('FullStack', 'https://fullstack.io', 2),
    new Article('Angular Homepage', 'https://angular.io', 1)
    ];
  }
  // untuk tambah article
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
  // untuk mensort article
  sortedArticle(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
