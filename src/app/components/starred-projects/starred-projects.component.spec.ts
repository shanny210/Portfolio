import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredProjectsComponent } from './starred-projects.component';

describe('StarredProjectsComponent', () => {
  let component: StarredProjectsComponent;
  let fixture: ComponentFixture<StarredProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarredProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarredProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
