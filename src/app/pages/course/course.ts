import { Component, inject } from '@angular/core';
import { CourseService } from '../../services/course-service';
import { StudyPlanService } from '../../services/study-plan-service';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  courseService = inject(CourseService);
  studyPlanService = inject(StudyPlanService);

  isSelected(courseId:string) {
   return this.studyPlanService.courseIdsLS().includes(courseId);
  }

}
