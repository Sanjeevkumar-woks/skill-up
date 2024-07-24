import { Tabs } from "antd";
import { Card } from "./CourseCard";
import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export const BestCourses = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const development = [
    {
      poster:
        "https://i0.wp.com/lh3.googleusercontent.com/-e7zy95WSPVE/X_RxPPgu-2I/AAAAAAAAJwM/VazGO9ThmeMqwBKt2KMqYKgusJy_Zy1pwCLcBGAsYHQ/image.png?ssl=1",
      category: "Development",
      price: "20",
      title: "Learn JavaScript With Imagination",
      noStudents: 60,
      duration: "70 h 45 m",
      noGraduates: 40,
    },
    {
      poster:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/training-youtube-thumbnail-design-template-c03a387c9fb1e0bf6069868683e7fe23_screen.jpg?ts=1630949973",
      category: "Development",
      price: "20",
      title: "Learn JavaScript With Imagination",
      noStudents: 60,
      duration: "70 h 45 m",
      noGraduates: 40,
    },
    {
      poster:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/313901626/original/40ba8bbaa6c3376fec0bdc42b50ac2e3f4d8b3e2/design-attractive-online-course-thumbnail-for-udemy.png",
      category: "Development",
      price: "20",
      title: "Learn JavaScript With Imagination",
      noStudents: 60,
      duration: "70 h 45 m",
      noGraduates: 40,
    },
  ];

  const items = [
    {
      key: "1",
      label: "Development",
      children: (
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {development.map((item) => {
            return (
              <Card
                title={item.title}
                poster={item.poster}
                category={item.category}
                price={item.price}
                duration={item.duration}
                noStudents={item.noStudents}
                noGraduates={item.noGraduates}
              />
            );
          })}
        </div>
      ),
    },
    {
      key: "2",
      label: "Design",
      children: (
        <div className="flex gap-2 flex-wrap justify-center items-center">
          <Card />
          <Card />
          <Card />
        </div>
      ),
    },
    {
      key: "3",
      label: "Data Science",
      children: (
        <div className="flex gap-2 flex-wrap justify-center items-center">
          <Card />
          <Card />
          <Card />
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
