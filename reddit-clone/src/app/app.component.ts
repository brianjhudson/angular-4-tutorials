import { Component } from '@angular/core';
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]
  constructor() {
    this.articles = [
      new Article('Article 1', 'http://article.com'), 
      new Article('Article 2', 'http://article.com'), 
      new Article('Article 3', 'http://article.com'), 
    ]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement) : boolean {
    console.log(`Adding article ${title.value} and link ${link.value}`)
    this.articles.push(new Article(title.value, link.value))
    return false
  }
  sortArticles(): Article[] {
    return this.articles.sort((a,b) => b.votes - a.votes)
  }
}
