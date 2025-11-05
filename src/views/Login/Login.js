import React, { useState } from "react";
import WhiteLogo from "../../assets/images/white-logo.svg";
import Logo from "../../assets/images/logo.svg";
import ImgPhone from "../../assets/images/login/mobiles.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Loader from "../../components/common/Loader";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)

    const handleLogin = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false);
            navigate("/dashboard");
        }, 5000)
    }



    return (
        <>
            {loader && <Loader />}

            <div className="login-page">
                <div className="left-section">
                    <div className="custome-coursole">
                        <div className="coursole-para">
                            <p>Lorem ipsum dolor sit amet consectetur. Mi cursus senectus id <br />posuere donec turpis mauris pharetra urna. Gravida faucibus  </p>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="logo-section-login">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="login-section">
                        {/* <h4>Login into your account</h4> */}
                        <div className="loginFeilds">
                            <div className="feilds">
                                <label>Email</label>
                                <input type="text" />
                            </div>
                            <div className="feilds">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div className="feilds remember-forgot">
                                {/* <div className="rememberMe form-check checkBoxCustomeSection">
                                    <label className="checkBoxCustome">Remember me
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </div> */}
                                <div className="forgot-text">
                                    Forgot Password?
                                </div>
                            </div>
                            <div className="feilds">
                                <button className="customeBtn successBtn w-100 px-3 py-2" onClick={handleLogin}>Log in</button>
                            </div>
                            <div className="dontHaveAccRequestAdmin">
                                <p>Or</p>
                            </div>
                            <div className="feilds">
                                <button className="customeBtn btnEmpty w-100 px-3 py-2" >Signup</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;