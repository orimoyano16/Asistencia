import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galeria } from './galeria';

describe('Galeria', () => {
  let component: Galeria;
  let fixture: ComponentFixture<Galeria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galeria],
    }).compileComponents();

    fixture = TestBed.createComponent(Galeria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the first media item selected', () => {
    expect(component.currentIndex).toBe(0);
    expect(component.currentItem).toEqual(component.mediaItems[0]);
  });

  it('should navigate to next item when next() is called', () => {
    component.next();
    expect(component.currentIndex).toBe(1);
    expect(component.currentItem).toEqual(component.mediaItems[1]);
  });
});
