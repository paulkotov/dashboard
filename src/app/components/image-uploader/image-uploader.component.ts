import { Component, OnInit } from '@angular/core';

class ImageFile {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
  public selectedFile: ImageFile;

  constructor() { }

  ngOnInit() {
  }

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
      // this.imageService.uploadImage(this.selectedFile.file).subscribe(
      //   (res) => this.onSuccess(),
      //   (err) => this.onError()
      // );
      console.log(this.selectedFile);
      reader.readAsDataURL(image);
    });
  }
}
