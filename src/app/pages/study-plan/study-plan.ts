import { Component, inject } from '@angular/core';
import { CourseService } from '../../services/course-service';
import { StudyPlanService } from '../../services/study-plan-service';

@Component({
  selector: 'app-study-plan',
  imports: [],
  templateUrl: './study-plan.html',
  styleUrl: './study-plan.css',
})
export class StudyPlan {
  courseService = inject(CourseService);
  studyPlanService = inject(StudyPlanService);



}
