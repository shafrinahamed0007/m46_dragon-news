import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  return (
    <div className="w-9/12 mx-auto">
      <div className=" conatiner mx-auto card bg-base-100 shadow-sm">
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

          <p className="font-semibold ">{news?.details}</p>
          <div>
            <div className="flex gap-1">
              <IoMdStar className="text-xl text-yellow-400" />
              {news?.rating?.number}
            </div>
            <div className="card-actions justify-end mt-5">
              <Link href={`/category/${news?.category_id}`}>
                <button className="btn btn-primary">See Other News <BsArrowRight /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
