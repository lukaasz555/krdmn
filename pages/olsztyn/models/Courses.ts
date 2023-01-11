export interface ICourse {
	id: string;
	name: string;
	price: Number;
	category: string;
	desc?: string;
}

export interface CourseDataProps {
	allCourses: [];
}
