import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  updateProfile,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BsChevronDoubleLeft,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillPersonFill,
  BsFillShieldLockFill,
  BsKeyFill,
  BsPencilSquare,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/configfb";
import { addDocuments, generateKeywords } from "../firebase/service";

export default function RegistorwithAxios() {
  const [showPass, setShowPass] = useState(false);
  const [showPassRepeat, setShowPassRepeat] = useState(false);
  const [hours, setHours] = useState("");

  useEffect(() => {
    let today = new Date();
    if (0 > today.getHours() >= 6) {
      setHours(
        "Chào mừng bạn đến với ngày mới !!! Hãy ngủ đi cho khoẻ nhé bạn 😁"
      );
    } else if (6 > today.getHours() >= 12) {
      setHours(
        "Buổi sáng an lành, thực hiện mọi công việc trong ngày mới nào !!!"
      );
    } else if (12 > today.getHours() > 17) {
      setHours("Buổi chiều vui vẻ bạn nhé !!!");
    } else {
      setHours(
        "Buổi tối an lành bên gia đình và gác lại công việc bạn nhé !!!"
      );
    }
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch("password", "");

  const handleLogin = async () => {
    const { additionalUserInfo, user } = await firebase
      .auth()
      .signInWithPopup(new FacebookAuthProvider());
    if (additionalUserInfo?.isNewUser) {
      addDocuments("inforUser", {
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
        email: user.email,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName),
      });
    }
  };

  const sigInwithEmailAndPsd = async (data) => {
    const auths = getAuth();

    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auths.currentUser, {
          displayName: data.name,
        }).then(() => console.log("success"));

        addDocuments("userEmail", {
          displayName: data.name,
          email: user.email,
          psw: password.current,
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  const navigate = useNavigate();

  const handleGoHomePage = () => {
    navigate("/");
  };

  const handleLogins = () => {
    navigate("/login");
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
      <div className="laptop:col-span-3 mobile:col-span-4">
        <section className="h-[100vh]" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: 25 }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-center">
                      <div className="w-[70%] m-auto">
                        <p className="text-center h1 fw-bold mb-5 mx-md-4 mt-40 my-24">
                          ĐĂNG KÝ TÀI KHOẢN
                        </p>
                        <h2 className="text-center mt-6 mb-16 primary-color">
                          {hours}
                        </h2>

                        <form
                          onSubmit={handleSubmit((data) =>
                            sigInwithEmailAndPsd(data)
                          )}
                          className="w-full"
                        >
                          <div className="flex flex-row items-center mb-4">
                            <BsFillPersonFill
                              className="primary-color"
                              style={{ fontSize: "24px", marginRight: "10px" }}
                            />
                            <div className="form-outline w-full flex-fill mb-0">
                              <input
                                {...register("name", { required: true })}
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your name"
                              />
                              {errors.name && (
                                <p className="italic text-red-500">
                                  Required value
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-row items-center mb-4">
                            <BsPencilSquare
                              className="primary-color"
                              style={{ fontSize: "24px", marginRight: "10px" }}
                            />
                            <div className="form-outline w-full flex-fill mb-0">
                              <input
                                {...register("email", { required: true })}
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                              />
                              {errors.email && (
                                <p className="italic text-red-500">
                                  Required value
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-row items-center mb-4">
                            <BsFillShieldLockFill
                              className="primary-color"
                              style={{ fontSize: "24px", marginRight: "10px" }}
                            />
                            <div className="form-outline w-full flex-fill mb-0">
                              <div className="flex relative">
                                <input
                                  {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*[A-Z]).{8,}$/gm,
                                    minLength: {
                                      value: 8,
                                      message:
                                        "Password must have at least 8 characters",
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
                                <p className="italic text-red-500">
                                  Required value
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-row items-center mb-4">
                            <BsKeyFill
                              className="primary-color"
                              style={{ fontSize: "24px", marginRight: "10px" }}
                            />
                            <div className="form-outline w-full flex-fill mb-0">
                              <div className="flex relative">
                                <input
                                  {...register("repeatPassword", {
                                    validate: (value) =>
                                      value === password.current ||
                                      "The passwords do not match",
                                  })}
                                  type={showPassRepeat ? "text" : "password"}
                                  name="repeatPassword"
                                  className="form-control"
                                  placeholder="Repeat password"
                                />
                                {showPassRepeat ? (
                                  <BsFillEyeFill
                                    className="primary-color"
                                    style={{
                                      position: "absolute",
                                      right: "4px",
                                      top: "25%",
                                    }}
                                    onClick={() =>
                                      setShowPassRepeat(!showPassRepeat)
                                    }
                                  />
                                ) : (
                                  <BsFillEyeSlashFill
                                    className="primary-color"
                                    style={{
                                      position: "absolute",
                                      right: "4px",
                                      top: "25%",
                                    }}
                                    onClick={() =>
                                      setShowPassRepeat(!showPassRepeat)
                                    }
                                  />
                                )}
                              </div>
                              {errors.repeatPassword && (
                                <p className="italic text-red-500">
                                  Required value
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="form-check flex mb-5">
                            <input
                              {...register("argree", { required: true })}
                              name="argree"
                              className="form-check-input w-[20px] !mr-8"
                              type="checkbox"
                              id="form2Example3c"
                            />
                            <label
                              className="form-check-label mt-2"
                              htmlFor="form2Example3"
                            >
                              Đồng ý với điều khoản {" "}
                              <Link to="/pages/notification" className="primary-color">Terms of service</Link>
                            </label>
                            {errors.argree && (
                              <p className="italic text-red-500 mt-2 ml-4">
                                Requied value
                              </p>
                            )}
                          </div>
                          <div className="tablet:flex justify-between mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn text-black btn-primary btn-lg"
                            >
                              Tạo tài khoản
                            </button>
                            <button
                              type="button"
                              onClick={handleGoHomePage}
                              className="items-center mobile:hidden tablet:flex"
                            >
                              <BsChevronDoubleLeft className="primary-color" />
                              <p className="text-primary ml-2">Quay lại HOME</p>
                            </button>
                          </div>
                          <div className="flex mt-10 justify-center">
                            <button
                              className="text-blue-700"
                              onClick={handleLogin}
                            >
                              Login with Facebook
                            </button>
                            <div className="ml-4">
                              <button
                                onClick={handleLogins}
                                className="hover:no-underline"
                                href="/sigin-email"
                              >
                                <p>
                                  Or login if have
                                  <span className="text-red-500 ml-2">
                                    your account
                                  </span>
                                </p>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
