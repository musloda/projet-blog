import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjetComponent } from './page-projet.component';

describe('PageProjetComponent', () => {
  let component: PageProjetComponent;
  let fixture: ComponentFixture<PageProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
