import { Tabs } from "antd";
import { Card } from "./CourseCard";
import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export const BestCourses = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const allCourses = [
    {
      poster:
        "https://github.com/Sanjeevkumar-woks/skill-up/blob/master/public/images/course_thumb01.jpg.png?raw=true",
      category: "Development",
      mentor: "David Miller",
      rating: 4.8,
      price: 9,
      title: "Learn JavaScript With Imagination",
      noStudents: 5,
      duration: "11h 20m",
      noGraduates: 22,
    },
    {
      poster:
        "https://github.com/Sanjeevkumar-woks/skill-up/blob/master/public/images/course_thumb02.jpg.png?raw=true",
      category: "Design",
      mentor: "Wilson",
      rating: 4.5,
      price: "10",
      title: "Learn JavaScript With Imagination",
      noStudents: 60,
      duration: "70 h 45 m",
      noGraduates: 202,
    },
    {
      poster:
        "https://github.com/Sanjeevkumar-woks/skill-up/blob/master/public/images/course_thumb03.jpg.png?raw=true",
      category: "Data Science",
      mentor: "warren",
      rating: 4.8,
      price: "20",
      title: "Learn JavaScript With Imagination",
      noStudents: 8,
      duration: "18h 20m",
      noGraduates: 66,
    },
    {
      poster:
        "https://github.com/Sanjeevkumar-woks/skill-up/blob/master/public/images/course_thumb04.jpg.png?raw=true",
      category: "Business",
      mentor: "Robert Fox",

      rating: 4.2,
      price: "20",
      title: "Learn JavaScript With Imagination",
      noStudents: 5,
      duration: "11h 20m",
      noGraduates: 22,
    },
  ];

  const items = [
    {
      key: "1",
      label: "All Courses",
      children: (
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {allCourses.map((course) => {
            return <Card course={course} />;
          })}
        </div>
      ),
    },
    {
      key: "2",
      label: "Development",
      children: (
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {allCourses.map((course) => {
            return <Card course={course} />;
          })}
        </div>
      ),
    },
    {
      key: "3",
      label: "Design",
      children: (
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {allCourses.map((course) => {
            return <Card course={course} />;
          })}
        </div>
      ),
    },
    {
      key: "4",
      label: "Business",
      children: (
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {allCourses.map((course) => {
            return <Card course={course} />;
          })}
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-10 bg-gradient-to-r items-center from-indigo-900 to-indigo-600 w-full h-full p-4">
      <p className="text-sm items-center text-purple-600 bg-purple-200 rounded-xl p-1  ">
        Our Top Courses
      </p>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-3xl text-white font-bold ">
          Explore Our World's Best Courses
        </p>
        <p className="text-sm text-gray-500">
          When known printer took a galley of type scrambled make
        </p>
      </div>
      <div className="w-50 ">
        <Tabs
          itemColor="red"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          size="large"
          centered
        />
      </div>

      <div>
        <Button
          text={"See All Courses ->"}
          color={"blue"}
          icon={"IoIosArrowRoundForward"}
        />
      </div>
    </div>
  );
};
