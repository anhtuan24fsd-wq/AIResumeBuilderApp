import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    // Container chính của CTA, căn giữa, viền nét đứt, padding lớn
    <div
      id="cta"
      className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-10 sm:px-16 mt-28"
    >
      {/* Nội dung bên trong: text + nút, xếp cột dọc trên mobile, hàng ngang trên desktop */}
      <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 -mt-10 -mb-10 w-full">
        {/* Đoạn mô tả CTA */}
        <p className="text-xl font-medium max-w-md text-slate-800">
          Build your perfect resume with our AI-powered resume builder.
        </p>
        {/* Nút chuyển tới trang đăng ký tạo CV */}
        <Link
          to="/app?state=register"
          className="flex items-center gap-2 rounded py-3 px-8 bg-green-500 hover:bg-green-600 transition text-white"
        >
          <span>Create Resume Now</span>
          {/* Icon mũi tên sang phải cho nút CTA */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4.5"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
