import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "Breaking News: Major Event Unfolds in the city",
    category: "World News",
    location: "Washington, D.C.",
    summary:
      "মার্কিন কংগ্রেসে কিং চার্লসের ভাষণ এবং ইরান যুদ্ধের প্রেক্ষাপটে ওয়াশিংটনে রাজনৈতিক উত্তেজনা তুঙ্গে।",
    date: "2026-04-29",
  },
  {
    id: 2,
    title: "Election Alert: AI Monitoring in West Bengal Polls",
    category: "Politics",
    location: "West Bengal, India",
    summary:
      "পশ্চিমবঙ্গ বিধানসভা নির্বাচনের দ্বিতীয় দফায় বুথ পর্যবেক্ষণে প্রথমবারের মতো লাইভ AI প্রযুক্তি ব্যবহার করছে নির্বাচন কমিশন।",
    date: "2026-04-29",
  },
  {
    id: 3,
    title: "Tech Update: $15 Billion AI Data Centre Hub",
    category: "Technology",
    location: "Visakhapatnam, India",
    summary:
      "গুগল এবং আদানি কানেক্স বিশাখাপত্তনমে ১৫ বিলিয়ন ডলারের বিশাল AI ডেটা সেন্টার হাব স্থাপনের ঘোষণা দিয়েছে।",
    date: "2026-04-29",
  },
  {
    id: 4,
    title: "Climate Crisis: Record Heatwave Hits Banda",
    category: "Environment",
    location: "Banda, India",
    summary:
      "তাপমাত্রা ৪৭.৬ ডিগ্রি সেলসিয়াসে পৌঁছানোর ফলে বান্দা আজ বিশ্বের অন্যতম উত্তপ্ত স্থান হিসেবে রেকর্ড করা হয়েছে।",
    date: "2026-04-29",
  },
  {
    id: 5,
    title: "Sports News: PSG Defeats Bayern in Champions League",
    category: "Sports",
    location: "Munich, Germany",
    summary:
      "চ্যাম্পিয়ন্স লিগের সেমিফাইনালের প্রথম লেগে বায়ার্ন মিউনিখকে ৫-৪ গোলে হারিয়ে রেকর্ড সৃষ্টি করেছে পিএসজি।",
    date: "2026-04-29",
  },
];
const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto ">
      <button className="btn btn-active btn-error text-white">
        Latest News
      </button>
      <Marquee pauseOnHover={true} speed="50" >
       {
        news.map(n => {
           return <span key={n.id}>{n?.summary}</span>
        })
       }
      </Marquee>
    </div>
  );
};

export default BreakingNews;
