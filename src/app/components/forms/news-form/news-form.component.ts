import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/NewsService/news.service';
import { News } from 'src/app/models/news';

class ImageFile {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {
  private id;
  public newsItem: News;
  public showNews = false;
  // TODO realize uploading from server
  public hashTags = ['csgo', 'warcraft2'];
  public selectedFile: ImageFile;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    if (this.id && this.id !== 'new') {
      this.newsService.getNewsById(this.id).subscribe(news => {
        this.newsItem = news;
      });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  saveNewsItem() {
    this.newsService.saveNews(this.newsItem).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/']);
      }
    );
  }

  setHashTag(event) {
    console.log(event.target.value);
  }

  changeNewsDate() {}

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  uploadImage(imageInput: any) {
    const image: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageFile(event.target.result, image);
      this.selectedFile.pending = true;
      // this.imageService.uploadImage(this.selectedFile.file).subscribe();
    });
    reader.readAsDataURL(image);
  }

}
