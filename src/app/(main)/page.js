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
        <h2 className="text-lg ">All Categories</h2>
        <ul className="flex flex-col gap-3 mt-5 ">
          {categories.map((category) => {
            return <li className="bg-slate-100 p-2 rounded-md font-bold text-center text-xl" key={category.category_id}>{category.category_name}</li>;
          })}
        </ul>
      </div>
      <div className="font-bold text-lg bg-purple-500 col-span-6">
        All News
      </div>
      <div className="font-bold text-lg bg-yellow-500 col-span-3">
        Social Icons
      </div>
    </div>
  );
}
