import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentComponent } from './Student.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('StudentComponent', () => {
let component: StudentComponent;
let fixture: ComponentFixture<StudentComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ StudentComponent ],
schemas: [ NO_ERRORS_SCHEMA ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(StudentComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});


