import { Injectable, signal, inject } from '@angular/core';
import { CourseService } from './course-service';

@Injectable({
  providedIn: 'root',
})
export class StudyPlanService {
  courseService = inject(CourseService);
  courseIdsLS = signal<string[]>([]);

  loadCourseIdsLS() {
    const courseIds = this.getAllCourseIdsLS();
    this.courseIdsLS.set(courseIds);

  }

  getAllCourseIdsLS(): string[] {
    const arr: any = localStorage.getItem("courseIds");
    const courseIds: string[] = arr ? JSON.parse(arr) : [];
    return courseIds
  }

  addCourseIdLS(id: string): void {
    if (!id) return
    const courseIds = this.getAllCourseIdsLS();
    const isIdInLS = courseIds.some(idLS => idLS === id)
    console.log("ide add", id, isIdInLS)
    if (isIdInLS) return
    courseIds.push(id);
    localStorage.setItem("courseIds", JSON.stringify(courseIds))
    this.courseIdsLS.set(courseIds);
  }

  deleteCourseIdLS(id: string): void {
    console.log("ide dele", id)

    if (!id) return
    const courseIds = this.getAllCourseIdsLS();
    if (!courseIds.length) return
    const filteredArr = courseIds.filter(idLS => idLS !== id);
    localStorage.setItem("courseIds", JSON.stringify(filteredArr))
    this.courseIdsLS.set(filteredArr);
  }

  numberOfCoursesIdsLS(): number {
    return this.courseIdsLS().length
  }

  calcCredits(): number {
    const courseIds = this.getAllCourseIdsLS();
    if (!courseIds.length) return 0
    const allCoursesMap = this.courseService.allCoursesMap;
    if (!allCoursesMap) return 0
    const sum = courseIds.reduce((acc, id) => {
      return acc + (allCoursesMap.get(id)?.points || 0)
    }, 0)
    return sum
  }
}
