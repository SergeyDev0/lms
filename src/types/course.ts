export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  studentsCount: number;
  createdAt: string;
}

export interface CourseCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}
