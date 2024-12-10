import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAboutmeComponent } from './dialog-aboutme.component';

describe('DialogAboutmeComponent', () => {
  let component: DialogAboutmeComponent;
  let fixture: ComponentFixture<DialogAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAboutmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
