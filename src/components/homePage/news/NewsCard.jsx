import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";

const NewsCard = ({ news }) => {
  console.log("News: ", news);
  return (
    <div className="bg-gray-40 border mt-5 p-6 ">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/* Author info */}
          <div className="bg-slate-200 p-4 rounded-md">
            <div className="flex justify-between">
              <Image
                src={news?.author?.img}
                alt={news?.author?.name}
                height={40}
                width={40}
                className="rounded-full"
              />
              <div className="flex">
                <div>
                  <h2 className="font-semibold">{news?.author?.name}</h2>
                  <p className="text-xs">{news?.author?.published_date}</p>
                </div>
                <div>
                  <div className="flex gap-1">
                    <CiShare2 className="text-xl" />
                    <CiBookmark className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <figure>
            <Image
              className="w-full"
              src={news?.image_url}
              alt={news?.title}
              height={150}
              width={150}
            />
          </figure>
          <h2 className="card-title"> {news?.title}</h2>

          <p className="font-semibold line-clamp-3">{news?.details}</p>
          <div>
            <div className="flex gap-1">
              <IoMdStar className="text-xl text-yellow-400" />
              {news?.rating?.number}
            </div>
            <div className="card-actions justify-end mt-5">
              <Link href={`/news/${news?._id}`}>
                <button className="btn btn-primary">Read More...</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
