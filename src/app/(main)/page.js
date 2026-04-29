import LeftSidebar from "@/components/homePage/news/LeftSidebar";
import RightSidebar from "@/components/homePage/news/RightSidebar";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}
export default async function Home() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="grid grid-cols-12 gap-4 my-[80px] container mx-auto">
      <div className="font-bold text-center   col-span-3">
        <LeftSidebar categories={categories} activeId={null} />
      </div>
      <div className="font-bold text-lg bg-purple-500 col-span-6">All News</div>
      <div className="font-bold text-center  col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}
