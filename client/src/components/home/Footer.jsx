import React from "react";
import logo from "../../assets/logo.svg";

// Footer với chú thích tiếng Việt cho từng phần chính
const Footer = () => {
  return (
    <>
      {/* Import font và thiết lập font-family cho toàn trang */}
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      {/* Footer tổng, căn bố cục responsive và nền gradient */}
      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-linear-to-r from-white via-green-200/60 to-white mt-40">
        {/* Khối trái: logo và các đường link */}
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
          {/* Logo thương hiệu */}
          <a href="#">
            <img alt="logo" className="h-11 w-auto" src={logo} />
          </a>
          {/* Cột Product */}
          <div>
            <p className="text-slate-800 font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Home {/* Trang chủ */}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Support {/* Hỗ trợ */}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Pricing {/* Bảng giá */}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Affiliate {/* Cộng tác viên */}
                </a>
              </li>
            </ul>
          </div>
          {/* Cột Resources */}
          <div>
            <p className="text-slate-800 font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Company {/* Công ty */}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Blogs {/* Blog */}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Community {/* Cộng đồng */}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Careers {/* Nghề nghiệp */}
                  <span className="text-xs text-white bg-green-600 rounded-md ml-2 px-2 py-1">
                    We're hiring! {/* Đang tuyển dụng! */}
                  </span>
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  About {/* Giới thiệu */}
                </a>
              </li>
            </ul>
          </div>
          {/* Cột Legal */}
          <div>
            <p className="text-slate-800 font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Privacy {/* Chính sách riêng tư */}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Terms {/* Điều khoản */}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Khối phải: slogan, social links, bản quyền */}
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          {/* Câu slogan thấy được giá trị khách hàng */}
          <p className="max-w-60">
            Making every customer feel valued—no matter the size of your
            audience.{" "}
            {/* Mỗi khách hàng đều quan trọng – dù bạn có bao nhiêu người theo dõi. */}
          </p>
          {/* Các icon mạng xã hội */}
          <div className="flex items-center gap-4 mt-3">
            {/* Dribbble */}
            <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
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
                className="lucide lucide-dribbble size-5 hover:text-green-500"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/"
              target="_blank"
              rel="noreferrer"
            >
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
                className="lucide lucide-linkedin size-5 hover:text-green-500"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* X (Twitter cũ) */}
            <a href="https://x.com/" target="_blank" rel="noreferrer">
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
                className="lucide lucide-twitter size-5 hover:text-green-500"
                aria-hidden="true"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
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
                className="lucide lucide-youtube size-6 hover:text-green-500"
                aria-hidden="true"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
          </div>
          {/* Thông tin bản quyền */}
          <p className="mt-3 text-center">
            © 2025 Resume Builder {/* Bản quyền 2025 Resume Builder */}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
