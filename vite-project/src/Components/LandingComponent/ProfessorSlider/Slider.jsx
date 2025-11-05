// App.jsx
import React from "react";
import CourseCard from "./CourseCard/CourseCard";

function App() {
  const courses = [
    {
      title: "دوره پیشرفته React و Next.js",
      instructor: "علی محمدی",
      students: 1245,
      startsAt: "1402/07/20",
      price: "۲۹۰,۰۰۰ تومان",
      rating: 4.8,
      bgImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "طراحی رابط کاربری حرفه ای",
      instructor: "سارا احمدی",
      students: 892,
      startsAt: "1402/08/01",
      price: "۱۸۰,۰۰۰ تومان",
      rating: 4.9,
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "برنامه نویسی پایتون مقدماتی",
      instructor: "محمد رضایی",
      students: 2103,
      startsAt: "1402/07/15",
      price: "رایگان",
      rating: 4.7,
      bgImage: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          دوره‌های آموزشی
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              instructor={course.instructor}
              students={course.students}
              startsAt={course.startsAt}
              price={course.price}
              rating={course.rating}
              bgImage={course.bgImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;