import React from "react";
import { UserRound, Mail, Lock } from "lucide-react";

const Login = () => {
  // Lấy tham số "state" từ URL (nếu có) để xác định đang ở màn hình đăng nhập hay đăng ký
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  // State quản lý trạng thái (login hoặc register)
  const [state, setState] = React.useState(urlState || "login");

  // State quản lý dữ liệu của form (tên, email, mật khẩu)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  // Xử lý sự kiện submit form (hiện chưa thực hiện xử lý gì thêm)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Xử lý đăng nhập/đăng ký tại đây
  };

  // Xử lý sự kiện thay đổi input trong form, cập nhật lại state formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    // Layout căn giữa form đăng nhập/đăng ký, nền xám nhạt
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        {/* Tiêu đề: Tùy vào state là login hay register */}
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>
        {/* Mô tả hướng dẫn */}
        <p className="text-gray-500 text-sm mt-2">Please {state} to continue</p>
        {/* Nếu là màn hình đăng ký thì hiện trường Name */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <UserRound size={16} color="#6B7280" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-none outline-none ring-0"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {/* Trường nhập Email */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail size={14} color="#6B7280" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Trường nhập Password */}
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock size={14} color="#6B7280" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Nút Quên mật khẩu */}
        <div className="mt-4 text-left text-indigo-500">
          <button className="text-sm" type="reset">
            Forget password?
          </button>
        </div>
        {/* Nút submit (Đăng nhập hoặc Đăng ký) */}
        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>
        {/* Chuyển đổi giữa đăng nhập <-> đăng ký */}
        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-gray-500 text-sm mt-3 mb-11"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            click here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
