import { Tabs } from "antd";
import Button from "./Button";
import { Card } from "./CourseCard";
import { allCourses } from "../utils/Courses";
import { useMemo } from "react";

export const BestCourses = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const development = useMemo(() => {
    return allCourses.filter((course) => course.category === "Development");
  }, [allCourses]);

  const design = useMemo(() => {
    return allCourses.filter((course) => course.category === "Design");
  }, [allCourses]);

  const business = useMemo(() => {
    return allCourses.filter((course) => course.category === "Business");
  }, [allCourses]);

  const tabs = [
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
          {development.map((course) => {
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
          {design.map((course) => {
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
          {business.map((course) => {
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
          items={tabs}
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
