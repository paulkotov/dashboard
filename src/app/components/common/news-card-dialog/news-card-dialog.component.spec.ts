import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardDialogComponent } from './news-card-dialog.component';

describe('NewsCardDialogComponent', () => {
  let component: NewsCardDialogComponent;
  let fixture: ComponentFixture<NewsCardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
