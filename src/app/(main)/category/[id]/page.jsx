import LeftSidebar from "@/components/homePage/news/LeftSidebar";
import NewsCard from "@/components/homePage/news/NewsCard";
import RightSidebar from "@/components/homePage/news/RightSidebar";
import { getCategories, getNewsByCategoriesId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  /** Catch All Categories Data */
  const categories = await getCategories();
  // console.log(categories);

  /** Catch All News Categories Wise */
  const news = await getNewsByCategoriesId(id);
  return (
    <div className="grid grid-cols-12 gap-4 my-[80px] container mx-auto">
      <div className="font-bold text-center   col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>
      <div className="font-bold text-lg col-span-6 p-6 bg-gray-300">
        <h2>News By Category</h2>
        <ul>
          {news.length > 0 ? (
            news.map((n) => <NewsCard  key={n?._id} news={n}></NewsCard>)
          ) : (
            <h2 className="text-red-500">This Category News Not Found</h2>
          )}
        </ul>
      </div>
      <div className="font-bold text-center  col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
