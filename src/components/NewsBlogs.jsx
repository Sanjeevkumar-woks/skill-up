import { NewsBlogsCard } from "./NewsBlogsCard";

export const NewsBlogs = () => {
  const feeds = [
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

  return (
    <div className="flex flex-col gap-10 bg-gradient-to-r items-center from-indigo-900 to-indigo-600 w-full h-full p-4">
      <p className="text-sm items-center text-purple-600 bg-purple-200 rounded-xl p-1  ">
        News & Blogs
      </p>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-3xl text-white font-bold ">Our Latest News Feed</p>
        <p className="text-sm text-gray-500">
          when known printer took a galley of type scrambl edmake
        </p>
      </div>
      <div className="flex gap-2 flex-wrap justify-center items-center">
        {feeds.map((feed) => (
          <NewsBlogsCard feed={feed} />
        ))}
      </div>
    </div>
  );
};
