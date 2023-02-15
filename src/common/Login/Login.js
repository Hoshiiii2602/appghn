import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillShieldLockFill,
  BsPencilSquare,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { authProvider } from "../../app/Context/AuthProvider";
import { auth } from "../../app/firebase/configfb";

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  const [hours, setHours] = useState("");

  useEffect(() => {
    let today = new Date();
    if (today.getHours() < 6 && today.getHours() >= 0) {
      setHours(
        "Chào mừng bạn đến với ngày mới !!! Còn khá sớm hãy ngủ xíu đi bạn nhé 😁"
      );
    } else if (today.getHours() >= 6 && today.getHours() < 12) {
      setHours(
        "Buổi sáng an lành, thực hiện mọi công việc trong ngày mới nào !!!"
      );
    } else if (today.getHours() >= 12 && today.getHours() < 17) {
      setHours("Buổi chiều vui vẻ bạn nhé !!!");
    } else {
      setHours(
        "Buổi tối an lành bên gia đình và gác lại công việc bạn nhé !!!"
      );
    }
  }, []);

  const auths = getAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleLoginEmailPsw = (data) => {
    console.log("1");
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auths.currentUser, {
          displayName: data.name,
        }).then(() => console.log("success"));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Login failed,plz check email or psw again");
      });
  };
  return (
    <div className="grid grid-cols-5 m-0">
      <div className="laptop:block col-span-2 mobile:hidden">
        <img
          className="banner flex w-full h-[100vh]"
          src="https://storage.googleapis.com/online-prod-public/notifications%2F2022%2FNovember%2F18%2F%5Bd67aa596-8b60-4064-8ee9-8280c3e5df5d%5D1910.jpg"
          alt="banner"
        ></img>
      </div>
      <div
        className="container col-span-3 text-center pt-80"
        style={{ backgroundColor: "#eee" }}
      >
        <form onSubmit={handleSubmit((data) => handleLoginEmailPsw(data))}>
          <p className="h1 font-medium text-center mt-8 mb-4">
            ĐĂNG NHẬP TÀI KHOẢN
          </p>
          <h4>{hours}</h4>
          <div className="flex flex-row items-center mb-4 justify-center mt-24">
            <BsPencilSquare
              className="primary-color"
              style={{ fontSize: "24px", marginRight: "10px" }}
            />
            <div className="form-outline w-1/2 flex-fill mb-0">
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
              />
              {errors.email && (
                <p className="italic text-red-500">Required value</p>
              )}
            </div>
          </div>

          <div className="flex flex-row items-center mb-4 justify-center mt-2 mb-12">
            <BsFillShieldLockFill
              className="primary-color"
              style={{ fontSize: "24px", marginRight: "10px" }}
            />
            <div className="form-outline w-1/2 flex-fill mb-0">
              <div className="flex relative">
                <input
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Z]).{8,}$/gm,
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
                {showPass ? (
                  <BsFillEyeFill
                  className="primary-color"
                    style={{
                      position: "absolute",
                      right: "4px",
                      top: "25%",
                    }}
                    onClick={() => setShowPass(!showPass)}
                  />
                ) : (
                  <BsFillEyeSlashFill
                  className="primary-color"
                    style={{
                      position: "absolute",
                      right: "4px",
                      top: "25%",
                    }}
                    onClick={() => setShowPass(!showPass)}
                  />
                )}
              </div>
              {errors.password && (
                <p className="italic text-red-500">Required value</p>
              )}
            </div>
          </div>
          <button type="submit" className="btn text-black btn-primary w-60">
            Đăng nhập
          </button>
          <Link to="/registor" type="button"  className="btn text-black btn-primary w-60 ml-24">
            Đăng ký
          </Link>
          <p className="pt-6">Bạn muốn trở lại <Link to="/" className="primary-color">Home</Link></p>
        </form>
      </div>
    </div>
  );
}
