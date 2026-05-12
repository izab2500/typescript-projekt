import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CourseService } from './services/course-service';
import { StudyPlanService } from './services/study-plan-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  courseService = inject(CourseService);
  studyPlanService = inject(StudyPlanService);
  router = inject(Router);

  protected readonly title = signal('projekt-test');
  ngOnInit(): void {
    this.courseService.loadCourses();
    this.studyPlanService.loadCourseIdsLS();
  }
}
