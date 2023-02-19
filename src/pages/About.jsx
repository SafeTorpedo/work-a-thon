import React from "react";
import Pratham from "../assets/images/Pratham.jpg";
import devsapriya from "../assets/images/devsapriya.jpg";
import Kennis from "../assets/images/Kennis.jpg";
import aakanksha from "../assets/images/aakanksha.jpg";
import "../index.css";
import Navbar from "../components/Navbar";
const About = () => {
    return (
        <div id="about">
            <Navbar />
            {/* All card components come down here */}
            <h1 className="mt-2 -mb-20 text-3xl font-bold text-center text-white">
                Meet the team!
            </h1>
            <div id="about" className="w-full py-[10rem] px-4 text-white ">
                <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4 gap-6">
                    <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <img
                            className="w-21 mx-auto mt-[-3rem] "
                            src={Pratham}
                            alt=""
                        />
                        <h2 className="text-2xl font-bold text-center py-8">
                            Pratham Gupta
                        </h2>
                        <div className="text-center font-medium ">
                            <p>Frontend Developer</p>
                            <p>
                                Vellore Institute of Technology Vellore, India
                            </p>
                            <p>2nd Year</p>
                        </div>
                        <div className="text-center">
                            <a
                                href="https://www.linkedin.com/in/pratham-gupta-a23673243/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                    Connect with me
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <img
                            className="w-21 mx-auto mt-[-3rem] "
                            src={devsapriya}
                            alt=""
                        />
                        <h2 className="text-2xl font-bold text-center py-8">
                            Dev Sapriya
                        </h2>
                        <div className="text-center font-medium ">
                            <p>Backend</p>
                            <p>Pandit Deendayal Energy University</p>
                        </div>
                        <div className="text-center">
                            <a
                                href="https://www.linkedin.com/in/devsapariya94/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                    Connect with me
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <img
                            className="w-21 mx-auto mt-[-3rem] "
                            alt=""
                            src={aakanksha}
                        />
                        <h2 className="text-2xl font-bold text-center py-8">
                            Aakanksha Rangdal
                        </h2>
                        <div className="text-center font-medium ">
                            <p>Designer, Frontend</p>
                            <p>Sreenidhi Institute of Science and Technology</p>
                        </div>
                        <div className="text-center">
                            <a
                                href="https://www.linkedin.com/in/aakanksha-rangdal/ "
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                    Connect with me
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <img
                            className="w-21 mx-auto mt-[-3rem] "
                            src={Kennis}
                            alt=""
                        />
                        <h2 className="text-2xl font-bold text-center py-8">
                            Kennis Joseph
                        </h2>
                        <div className="text-center font-medium ">
                            <p>FullStack Developer</p>
                            <p>
                                Shree Sai Institute Of Technology (SSIT),
                                Ratlam, MP
                            </p>
                            <p>2nd Year</p>
                        </div>
                        <div className="text-center">
                            <a
                                href=" https://www.linkedin.com/in/kennis-joseph-a519571a1/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                    Connect with me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
