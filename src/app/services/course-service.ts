import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { CourseInterface } from '../models/course-interface';

@Injectable({
  providedIn: 'root',
})

export class CourseService {
  private http = inject(HttpClient);
  courses = signal<CourseInterface[]>([]);
  subjects = signal<string[]>([]);
  allCourses: CourseInterface[] = [];
  sortColumn: string = "";
  sortDirection: string = "";
  choosedSubject: string = "";
  searchString: string = ""
  displayedCourses: number = 50;
  multiplier: number = 1;
  currentCoursesState: CourseInterface[] = [];
  allCoursesMap: Map<string, CourseInterface> = new Map;

  loadCourses(): void {
    this.http.get<CourseInterface[]>('/json/courses.json')
      .subscribe({
        next: (data) => {
          this.allCourses = data;
          this.allCoursesMap = new Map(this.allCourses.map(c => [c.courseCode, c]))
          this.currentCoursesState = data;
          this.coursesBy50(this.currentCoursesState)
          const uniqeSubj = [...new Set(data.map(c => c.subject))];
          this.subjects.set(uniqeSubj);
        },
        error: (err) => {
          console.error('Kunde inte ladda kurser:', err);
          this.courses.set([]);
        }
      });
  }


  // Filtrerar på kurskod eller kursnamn (globalt eller ämne)
  filterSearch(value: string) {
    this.resetColumnSortVars();
    this.searchString = value;
    const searchString = value.trim().toLowerCase();
    if (!searchString) {
      this.displayedCourses = 50;
      this.multiplier = 1;
      this.choosedSubject = "";
      this.currentCoursesState = this.allCourses;
      this.coursesBy50(this.currentCoursesState);
      return;
    }
    if (this.choosedSubject) {

      const searchedInSubject = this.allCourses.filter(c =>
        c.subject === this.choosedSubject &&
        (
          c.courseCode.toLowerCase().includes(searchString) ||
          c.courseName.toLowerCase().includes(searchString)
        )
      );
      this.displayedCourses = 50;
      this.multiplier = 1;
      this.currentCoursesState = searchedInSubject
      this.coursesBy50(this.currentCoursesState);
      return;
    }
    const searched = this.allCourses.filter(c =>
      c.courseCode.toLowerCase().includes(searchString) ||
      c.courseName.toLowerCase().includes(searchString));
    this.displayedCourses = 50;
    this.multiplier = 1;
    this.currentCoursesState = searched
    this.coursesBy50(this.currentCoursesState);
  }

  // Sortera på ämne
  sortBySubject(value: string) {
    this.resetColumnSortVars()
    const subject = value
    this.choosedSubject = value;
    if (!subject) {
      this.displayedCourses = 50;
      this.multiplier = 1;
      this.choosedSubject = ""
      this.currentCoursesState = this.allCourses
      this.coursesBy50(this.currentCoursesState);
      return;
    } const coursesWithSameSubject = this.allCourses.filter(c => c.subject === subject);
    this.displayedCourses = 50;
    this.multiplier = 1;
    this.currentCoursesState = coursesWithSameSubject
    this.coursesBy50(this.currentCoursesState);
    this.searchString = "";

  }
  // Hanterar stigande eller fallande sortering
  sortByColumn(event: Event) {
    const column = event.target as HTMLElement;
    const id = column.id;

    // Ny kolumn
    if (this.sortColumn !== id) {
      this.sortColumn = id;
      this.sortDirection = "ascending";
      this.sortAscending(id);
      return;
    }

    // Samma kolumn
    if (this.sortDirection === "ascending") {
      this.sortColumn = id;
      this.sortDirection = "descending";
      this.sortDescending(id);
      return;
    }

    // fallback
    this.sortColumn = id;
    this.sortDirection = "ascending";
    this.sortAscending(id);

  }

  resetColumnSortVars() {
    this.sortColumn = "";
    this.sortDirection = "";
  }

  // Sortera stigande
  sortAscending(key: any): void {
    const coursesArr: CourseInterface[] = [...this.courses()];
    const ascArr = coursesArr.sort((a: any, b: any) => {
      const key1 = a[key];
      const key2 = b[key];
      // Sortera strängar
      if (typeof key1 === "string") return key1.toLowerCase().localeCompare(key2.toLowerCase());
      // Sortera nummer (poäng)
      return key1 - key2

    })
    // Uppdatera signal
    this.courses.set(ascArr)
  }

  // Sortera fallande
  sortDescending(key: any): void {
    const coursesArr: CourseInterface[] = [...this.courses()];
    const descArr = coursesArr.sort((a: any, b: any) => {
      const key1 = a[key];
      const key2 = b[key];
      // Sortera strängar
      if (typeof key1 === "string") return key2.toLowerCase().localeCompare(key1.toLowerCase());
      // Sortera nummer (poäng)
      return key2 - key1

    })
    // Uppdatera signal
    this.courses.set(descArr)
  }

  getNumberOfCourses(): number {
    return this.courses().length
  }

  coursesBy50(courseData: CourseInterface[]) {
    const courses = this.displayedCourses * this.multiplier;
    const newArr = courseData.slice(0, courses);
    this.courses.set(newArr);
    this.multiplier += 1;
    return newArr
  }

}

