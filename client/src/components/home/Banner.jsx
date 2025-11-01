import React from "react";

const Banner = () => {
  return (
    // Phần container của banner với hiệu ứng gradient nền và căn giữa nội dung
    <div className="w-full py-2.5 font-medium text-sm text-green-800 text-center bg-linear-to-r from-[#ABFF7E] to-[#FDFEFF]">
      <p>
        {/* Nhãn "New" với nền màu xanh lá cây và chữ trắng, làm nổi bật thông báo mới */}
        <span className="px-3 py-1 rounded-lg text-white bg-green-600 mr-2">
          New
        </span>
        {/* Nội dung chính của banner: AI Website Builder */}
        AI Website Builder
      </p>
    </div>
  );
};

export default Banner;
