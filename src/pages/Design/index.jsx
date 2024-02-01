import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  Text,
  TextArea,
} from "components";

import "react-circular-progressbar/dist/styles.css";

const DesignPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="md:h-[1713px] h-[904px] md:px-5 relative w-full">
            <div className="md:h-[1713px] h-[904px] m-auto w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Img
                    className="md:flex-1 h-[354px] sm:h-auto object-cover w-[23%] md:w-full"
                    src="images/img_ellipse36.png"
                    alt="ellipseThirtySix"
                  />
                  <div className="backdrop-opacity-[0.5] bg-white-A700 blur-[1000.00px] h-[634px] mb-[51px] md:ml-[0] ml-[59px] md:mt-0 mt-[219px] rounded-[50%] w-[634px]"></div>
                  <Img
                    className="md:flex-1 h-[634px] sm:h-auto md:ml-[0] ml-[113px] md:mt-0 mt-[270px] object-cover w-[23%] md:w-full"
                    src="images/img_ellipse37.png"
                    alt="ellipseThirtySeven"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[270px] object-cover right-[16%] top-[0] w-[45%]"
                src="images/img_ellipse39.png"
                alt="ellipseThirtyNine"
              />
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[125px] items-start justify-start right-[1%] top-[3%] w-[90%]">
              <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-teal-300"
                  size="txtInterSemiBold50"
                >
                  Biccas
                </Text>
                <ul className="flex md:flex-1 sm:flex-col flex-row gap-10 sm:hidden items-start justify-center mb-3 md:ml-[0] ml-[339px] md:mt-0 mt-[25px] w-[35%] md:w-full common-row-list">
                  <li>
                    <a href="javascript:" className="text-black-900 text-lg">
                      <Text size="txtInterMedium18">Home</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base hover:text-black-900 text-gray-500"
                    >
                      <Text size="txtInterMedium16">Product</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base hover:text-black-900 text-gray-500"
                    >
                      <Text size="txtInterMedium16">FAQ</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="sm:mt-0 mt-0.5 text-base hover:text-black-900 text-gray-500"
                    >
                      <Text size="txtInterMedium16">Blog</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base hover:text-black-900 text-gray-500"
                    >
                      <Text size="txtInterMedium16">About Us</Text>
                    </a>
                  </li>
                </ul>
                <div className="flex md:flex-1 flex-row gap-5 items-center justify-between mb-1 md:ml-[0] ml-[130px] md:mt-0 mt-4 w-[13%] md:w-full">
                  <a href="javascript:" className="text-base text-gray-500">
                    <Text size="txtInterMedium16">Login</Text>
                  </a>
                  <Button
                    className="!text-gray-50 cursor-pointer font-medium leading-[normal] min-w-[80px] text-base text-center"
                    shape="round"
                    color="teal_300"
                    size="sm"
                  >
                    Sign Up
                  </Button>
                </div>
              </header>
              <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[43%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="leading-[90.00px] md:text-5xl text-[80px] text-gray-900 w-full"
                      size="txtInterBold80"
                    >
                      We’re here to Increase your Productivity
                    </Text>
                    <Img
                      className="h-[26px] mt-[30px]"
                      src="images/img_vector32.svg"
                      alt="vectorThirtyTwo"
                    />
                    <Text
                      className="leading-[30.00px] mt-[50px] text-black-900 text-lg w-[84%] sm:w-full"
                      size="txtInterMedium18"
                    >
                      <>
                        Let&#39;s make your work more organize and easily using
                        the Taskio Dashboard with many of the latest featuresin
                        managing work every day.
                      </>
                    </Text>
                    <div className="flex flex-row gap-10 items-center justify-start mt-[50px] w-[65%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[165px] rounded-[31px] text-center text-lg"
                        color="teal_300"
                      >
                        Try free trial
                      </Button>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                        <Img
                          className="h-10 w-10"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtInterMedium18Gray900"
                        >
                          View Demo
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[434px] h-[558px] relative w-[55%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start ml-[117px] mt-[173px] p-[18px] rounded-[10px] w-12"
                    style={{ backgroundImage: "url('images/img_group15.svg')" }}
                  >
                    <Img
                      className="h-2 my-0.5"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </div>
                  <div className="absolute md:h-[434px] h-[558px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bg-teal-300_01 md:h-[434px] h-[526px] right-[16%] rounded-[10px] top-[0] w-[59%] sm:w-full">
                      <Img
                        className="absolute h-[262px] right-[0] top-[0]"
                        src="images/img_vector26.svg"
                        alt="vectorTwentySix"
                      />
                      <Img
                        className="absolute bottom-[0] h-[332px] left-[0]"
                        src="images/img_vector27.svg"
                        alt="vectorTwentySeven"
                      />
                      <Img
                        className="absolute bottom-[0] h-[434px] left-[0] object-cover w-[95%]"
                        src="images/img_charliegreen3.png"
                        alt="charliegreenThree"
                      />
                    </div>
                    <Button
                      className="absolute bottom-[0] flex h-12 items-center justify-center right-[23%] rotate-[-15deg] w-12"
                      shape="round"
                      color="deep_orange_200"
                      size="sm"
                    >
                      <Img
                        className="h-6"
                        src="images/img_television.svg"
                        alt="television"
                      />
                    </Button>
                    <Img
                      className="absolute h-[59px] right-[11%] top-[5%] w-[59px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <div className="absolute bg-white-A700 flex flex-col items-center justify-end left-[0] p-3.5 rounded-[10px] top-[5%] w-[38%]">
                      <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start">
                            <Text
                              className="text-blue_gray-300 text-xs"
                              size="txtInterRegular12"
                            >
                              Enter amount
                            </Text>
                            <Text
                              className="text-base text-black-900"
                              size="txtInterMedium16Black900"
                            >
                              $450..00
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[64px] my-2 rounded-[14px] text-[13px] text-center"
                            color="teal_300_01"
                            size="xs"
                          >
                            Send
                          </Button>
                        </div>
                        <Line className="bg-gray-200 h-px mt-[3px] w-full" />
                      </div>
                    </div>
                    <div className="absolute bg-gray-900_01 bottom-[9%] h-[219px] right-[0] rotate-[-15deg] rounded-[10px] w-[27%]">
                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <div className="bg-blue_gray-900 h-[152px] mt-[67px] rounded-[76px] w-[56%]"></div>
                          <Img
                            className="h-[143px] md:h-auto object-cover w-[44%]"
                            src="images/img_ellipse14.png"
                            alt="ellipseFourteen"
                          />
                        </div>
                      </div>
                      <div className="absolute flex flex-col gap-[19px] justify-start left-[8%] top-[5%] w-[67%]">
                        <Img
                          className="h-[38px] md:ml-[0] ml-[35px]"
                          src="images/img_contrast.svg"
                          alt="contrast"
                        />
                        <div className="md:h-[33px] h-[52px] md:ml-[0] ml-[17px] relative w-[61%]">
                          <Text
                            className="absolute right-[0] text-gray-300 text-xs top-[0]"
                            size="txtInterRegular12Gray300"
                          >
                            Creadit Crad
                          </Text>
                          <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-between mx-auto w-full">
                            <div className="bg-blue_gray-100 h-1 mb-[23px] rounded-[50%] w-1"></div>
                            <div className="bg-blue_gray-100 h-1 mb-5 mt-0.5 rounded-[50%] w-1"></div>
                            <div className="bg-blue_gray-100 h-1 mb-[17px] mt-[5px] rounded-[50%] w-1"></div>
                            <div className="bg-blue_gray-100 h-1 mb-[15px] mt-2 rounded-[50%] w-1"></div>
                            <Text
                              className="mt-1.5 text-gray-200_01 text-xs"
                              size="txtInterRegular12Gray20001"
                            >
                              1234
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="bg-white-A700_6c h-[30px] mb-[22px] rounded w-[31%]"></div>
                          <Text
                            className="mt-[27px] text-gray-50 text-xs"
                            size="txtInterRegular12Gray50"
                          >
                            09/25
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[12%] flex flex-col items-center justify-start left-[15%] w-1/5">
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-3 rounded-[10px] w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-300 text-xs"
                              size="txtInterRegular12"
                            >
                              Total Income
                            </Text>
                            <div className="flex flex-row gap-7 items-center justify-between w-full">
                              <Text
                                className="text-base text-black-900"
                                size="txtInterMedium16Black900"
                              >
                                $245.00
                              </Text>
                              <Img
                                className="h-5 w-5"
                                src="images/img_barchart21.svg"
                                alt="barchartTwentyOne"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[55px] justify-start md:ml-[0] ml-[130px] mt-[17px] md:px-5 w-3/4 md:w-full">
          <Text
            className="md:ml-[0] ml-[230px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
            size="txtInterBold40"
          >
            More than 25,000 teams use Collabs
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-start w-[17%] md:w-full">
                <Img
                  className="h-8"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="mt-1 text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-500"
                  size="txtInterSemiBold30"
                >
                  Unsplash
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-center w-[14%] md:w-full">
                <div className="flex md:h-7 h-[35px] justify-end relative w-[27%]">
                  <div className="h-7 ml-auto mt-auto w-[79%]">
                    <Text
                      className="m-auto text-gray-500 text-xl"
                      size="txtInterSemiBold20"
                    >
                      N
                    </Text>
                    <div className="absolute border-2 border-gray-500 border-solid h-7 inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[7px] mx-auto"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                    <Img
                      className="h-[35px] mb-auto mt-[-7px] z-[1]"
                      src="images/img_user_gray_500.svg"
                      alt="user_One"
                    />
                  </div>
                </div>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
                  size="txtInterSemiBold30"
                >
                  Notion
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-center w-[19%] md:w-full">
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_group143.svg"
                  alt="group143"
                />
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
                  size="txtInterSemiBold30"
                >
                  INTERCOM
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-center md:mt-0 mt-[3px] w-[15%] md:w-full">
                <Img
                  className="h-[30px]"
                  src="images/img_thumbsup_gray_500.svg"
                  alt="thumbsup_One"
                />
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
                  size="txtInterSemiBold30"
                >
                  descript
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-start md:mt-0 mt-[3px] w-[19%] md:w-full">
                <Button
                  className="flex h-[30px] items-center justify-center mb-1.5 w-[30px]"
                  shape="circle"
                  color="gray_500"
                  size="xs"
                >
                  <Img src="images/img_qrcode.svg" alt="qrcode" />
                </Button>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
                  size="txtInterSemiBold30"
                >
                  grammarly
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[130px] items-center mt-[126px] w-full">
          <div className="bg-gray-50_01 flex md:flex-col flex-row gap-[27px] items-center justify-start p-[58px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[71px] w-[49%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900 w-[96%] sm:w-full"
                  size="txtInterSemiBold50Gray900"
                >
                  How we support our pratner all over the world
                </Text>
                <Text
                  className="leading-[30.00px] mt-[30px] text-base text-gray-500 w-full"
                  size="txtInterMedium16"
                >
                  SaaS become a common delivery model for many business
                  application, including office software, messaging software,
                  payroll processing software, DBMS software, management
                  software
                </Text>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-20 grid grid-cols-2 mt-[73px] w-[57%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-evenly w-full">
                        <RatingBar
                          className="flex justify-between w-[142px]"
                          value={5}
                          starCount={5}
                          activeColor="#ffc728"
                          size={26}
                        ></RatingBar>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start">
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtInterBold18"
                      >
                        <span className="text-gray-900 font-inter text-left font-bold">
                          4.9
                        </span>
                        <span className="text-gray-900 font-inter text-left font-normal">
                          {" "}
                          /{" "}
                        </span>
                        <span className="text-gray-900 font-inter text-left font-medium">
                          5 rating
                        </span>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtInterBold18Gray500"
                      >
                        databricks
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-evenly w-full">
                        <RatingBar
                          className="flex justify-between w-[142px]"
                          value={4}
                          starCount={5}
                          color="#bbbbbb"
                          activeColor="#ffc728"
                          size={26}
                        ></RatingBar>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start">
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtInterBold18"
                      >
                        <span className="text-gray-900 font-inter text-left font-bold">
                          4.8
                        </span>
                        <span className="text-gray-900 font-inter text-left font-normal">
                          {" "}
                          /{" "}
                        </span>
                        <span className="text-gray-900 font-inter text-left font-medium">
                          5 rating
                        </span>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtInterBold18Gray500"
                      >
                        Chainalysis
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[39%] md:w-full">
              <List
                className="flex flex-col gap-[30px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-between w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center mb-[77px] w-[60px]"
                      shape="square"
                      size="md"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_group7.svg"
                        alt="groupSeven"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start sm:mt-0 mt-[5px]">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                        size="txtInterBold28"
                      >
                        Publishing
                      </Text>
                      <Text
                        className="leading-[30.00px] text-gray-500 text-lg w-full"
                        size="txtInterMedium18Gray500"
                      >
                        Plan, collaborate, and publishing your contetn that
                        drivees meaningful engagement and growth for your barnd
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center mb-[47px] w-[60px]"
                      shape="square"
                      size="md"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_piechart1.svg"
                        alt="piechartOne"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start sm:mt-0 mt-[5px]">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                        size="txtInterBold28"
                      >
                        Analytics
                      </Text>
                      <Text
                        className="leading-[30.00px] text-gray-500 text-lg w-full"
                        size="txtInterMedium18Gray500"
                      >
                        Analyze your performance and create goegeous report
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-between w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center mb-[47px] w-[60px]"
                      shape="square"
                      size="md"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_command1.svg"
                        alt="commandOne"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start sm:mt-0 mt-[5px]">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                        size="txtInterBold28"
                      >
                        Engagement
                      </Text>
                      <Text
                        className="leading-[30.00px] text-gray-500 text-lg w-full"
                        size="txtInterMedium18Gray500"
                      >
                        Quiuckly navigate you anda engage with your adience
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="sm:h-[2175px] md:h-[2299px] h-[2638px] md:px-5 relative w-full">
            <div className="absolute flex flex-col md:gap-10 gap-[468px] inset-x-[0] justify-start mx-auto top-[12%] w-full">
              <Img
                className="h-[634px] md:h-auto mr-[1000px] object-cover w-[31%]"
                src="images/img_ellipse41.png"
                alt="ellipseFortyOne"
              />
              <Img
                className="h-[634px] md:h-auto md:ml-[0] ml-[1123px] object-cover w-[23%]"
                src="images/img_ellipse40.png"
                alt="ellipseForty"
              />
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-10 items-start justify-between right-[4%] top-[34%] w-[87%]">
              <div className="flex flex-col gap-[50px] items-center justify-start w-[35%] md:w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900 w-full"
                  size="txtInterBold50"
                >
                  What Benifit Will You Get
                </Text>
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-end justify-start w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_checkmark_teal_300.svg"
                      alt="checkmark_One"
                    />
                    <Text
                      className="mb-0.5 sm:mt-0 mt-[7px] text-gray-900 text-lg"
                      size="txtInterMedium18Gray900"
                    >
                      Free Consulting With Experet Saving Money
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-end justify-start w-[42%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_checkmark_teal_300.svg"
                      alt="checkmark_Two"
                    />
                    <Text
                      className="mb-0.5 mt-[7px] text-gray-900 text-lg"
                      size="txtInterMedium18Gray900"
                    >
                      Online Banking
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-end justify-start w-[76%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_checkmark_teal_300.svg"
                      alt="checkmark_Three"
                    />
                    <Text
                      className="mb-0.5 mt-[7px] text-gray-900 text-lg"
                      size="txtInterMedium18Gray900"
                    >
                      Investment Report Every Month
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-end justify-start w-[71%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_checkmark_teal_300.svg"
                      alt="checkmark_Four"
                    />
                    <Text
                      className="mb-0.5 mt-[7px] text-gray-900 text-lg"
                      size="txtInterMedium18Gray900"
                    >
                      Saving Money For The Future
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-1/2 md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_checkmark_teal_300.svg"
                      alt="checkmark_Five"
                    />
                    <Text
                      className="text-gray-900 text-lg"
                      size="txtInterMedium18Gray900"
                    >
                      Online Transection
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:h-[529px] h-[543px] justify-end relative w-[52%] md:w-full">
                <Button
                  className="flex h-12 items-center justify-center mb-[219px] ml-[55px] mt-auto rotate-[15deg] w-12"
                  shape="round"
                  color="teal_200"
                  size="sm"
                >
                  <Img className="h-6" src="images/img_sort.svg" alt="sort" />
                </Button>
                <div className="absolute md:h-[529px] h-[543px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="absolute h-[529px] inset-y-[0] my-auto object-cover right-[11%] rounded-[20px] w-[70%]"
                    src="images/img_rectangle48.png"
                    alt="rectangleFortyEight"
                  />
                  <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[0] p-3 rounded-[10px] shadow-bs top-[7%] w-[48%]">
                    <div className="flex flex-row items-center justify-between w-[95%] md:w-full">
                      <Img
                        className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                        src="images/img_ellipse33.png"
                        alt="ellipseThirtyThree"
                      />
                      <div className="flex flex-col gap-[11px] items-start justify-start">
                        <Text
                          className="text-base text-gray-900"
                          size="txtInterMedium16Gray900"
                        >
                          Amanda Young
                        </Text>
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtInterMedium12"
                        >
                          Expert Saving Money
                        </Text>
                      </div>
                      <Button
                        className="flex h-10 items-center justify-center my-[9px] rounded-[50%] w-10"
                        shape="circle"
                        color="teal_200"
                        size="sm"
                      >
                        <Img
                          className="h-5"
                          src="images/img_messagecircle1.svg"
                          alt="messagecircleOne"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute flex flex-col items-center justify-start right-[0] top-[22%] w-[22%]">
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-3 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-300 text-xs"
                            size="txtInterRegular12"
                          >
                            Total Income
                          </Text>
                          <div className="flex flex-row gap-7 items-center justify-between w-full">
                            <Text
                              className="text-base text-gray-900"
                              size="txtInterMedium16Gray900"
                            >
                              $245.00
                            </Text>
                            <Img
                              className="h-5 w-5"
                              src="images/img_barchart21_teal_200.svg"
                              alt="barchartTwentyOne_One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bottom-[0] cursor-pointer flex items-center justify-center left-[3%] min-w-[302px] ml-[18px]"
                    leftIcon={
                      <Img
                        className="h-6 mb-px mr-[15px] bottom-[0] right-[2%] absolute"
                        src="images/img_circle_1.svg"
                        alt="circle 1"
                      />
                    }
                    shape="round"
                  >
                    <div className="!text-gray-900 leading-[normal] text-left text-lg tracking-[-0.54px]">
                      Money Transfer Succesfull
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[82%]">
              <Text
                className="leading-[73.00px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-900"
                size="txtInterBold50"
              >
                <>
                  Choose Plan
                  <br />
                  That’s Right For You
                </>
              </Text>
              <Text
                className="mt-[41px] text-center text-gray-500 text-lg"
                size="txtInterBold18Gray500"
              >
                Choose plan that works best for you, feel free to contact us
              </Text>
              <div className="bg-white-A700 flex flex-row gap-[38px] items-center justify-end mt-[38px] p-[7px] rounded-[10px] shadow-bs w-[29%] md:w-full">
                <Text
                  className="text-gray-900 text-lg"
                  size="txtInterMedium18Gray900"
                >
                  Bil Monthly
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[160px] text-center text-lg"
                  shape="round"
                  color="teal_300"
                  size="md"
                >
                  Bil Yearly
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-[67px] w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-[15px] items-center justify-center mb-[18px] md:mt-0 mt-[22px] p-5 rounded-[20px] shadow-bs w-[32%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-[19px] w-[63%] md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                      size="txtInterSemiBold30Gray900"
                    >
                      Free
                    </Text>
                    <Text
                      className="leading-[27.00px] mt-[9px] text-center text-gray-500 text-lg w-full"
                      size="txtInterMedium18Gray500"
                    >
                      Have a go and test your superpowers
                    </Text>
                    <div className="flex flex-row items-start justify-center mt-[17px] w-[24%] md:w-full">
                      <Text
                        className="text-gray-500 text-lg"
                        size="txtInterMedium18Gray500"
                      >
                        $
                      </Text>
                      <Text
                        className="ml-1 mt-[5px] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900"
                        size="txtInterSemiBold50Gray900"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-50_02 flex flex-col items-center justify-end mb-[5px] p-[25px] sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-center justify-start mt-[3px] w-[92%] md:w-full">
                      <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                        <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                          <CheckBox
                            className="font-medium text-left text-lg"
                            inputClassName="h-[26px] mr-[5px] w-[26px]"
                            name="2users"
                            id="2users"
                            label="2 Users"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium text-left text-lg"
                            inputClassName="h-[26px] mr-[5px] w-[26px]"
                            name="2files"
                            id="2files"
                            label="2 Files"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium text-left text-lg"
                            inputClassName="h-[26px] mr-[5px] w-[26px]"
                            name="publicsharecomm_One"
                            id="publicsharecomm_One"
                            label="Public Share & Comments"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium text-left text-lg"
                            inputClassName="h-[26px] mr-[5px] w-[26px]"
                            name="chatsupport"
                            id="chatsupport"
                            label="Chat Support "
                          ></CheckBox>
                          <CheckBox
                            className="font-medium text-left text-lg"
                            inputClassName="h-[26px] mr-[5px] w-[26px]"
                            name="newincomeapps"
                            id="newincomeapps"
                            label="New income apps"
                          ></CheckBox>
                        </div>
                        <Button className="cursor-pointer font-semibold min-w-[260px] rounded-[20px] text-center text-lg">
                          Signup for free
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-teal-300 h-[684px] pt-[39px] relative rounded-[20px] w-[32%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[-78.32px] mx-auto w-[57%] z-[1]">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtInterSemiBold30WhiteA700"
                    >
                      Pro
                    </Text>
                    <Text
                      className="leading-[27.00px] mt-[9px] text-center text-lg text-white-A700 w-full"
                      size="txtInterMedium18WhiteA700"
                    >
                      Experiment the power of infinite possibilities
                    </Text>
                    <div className="flex flex-row items-start justify-center mt-[17px] w-[24%] md:w-full">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtInterMedium18WhiteA700"
                      >
                        $
                      </Text>
                      <Text
                        className="ml-1 mt-[5px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                        size="txtInterSemiBold50WhiteA700"
                      >
                        8
                      </Text>
                    </div>
                  </div>
                  <div className="h-[538px] mt-auto mx-auto w-full">
                    <div className="bg-teal-300_02 h-[538px] m-auto rounded-[269px] w-full"></div>
                    <div className="absolute bottom-[4%] flex flex-col gap-[15px] inset-x-[0] items-center justify-start mx-auto w-[90%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[130px] text-center text-sm"
                        shape="round"
                        color="teal_200_01"
                        size="sm"
                      >
                        Save $50 a year
                      </Button>
                      <div className="bg-white-A700 flex flex-col items-center justify-end p-[25px] sm:px-5 rounded-[10px] w-full">
                        <div className="flex flex-col items-center justify-start mt-[3px] w-[93%] md:w-full">
                          <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                            <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                              <CheckBox
                                className="font-medium text-left text-lg"
                                inputClassName="h-[26px] mr-[5px] w-[26px]"
                                name="4users"
                                id="4users"
                                label="4 Users"
                              ></CheckBox>
                              <CheckBox
                                className="font-medium text-left text-lg"
                                inputClassName="h-[26px] mr-[5px] w-[26px]"
                                name="allapps"
                                id="allapps"
                                label="All apps"
                              ></CheckBox>
                              <CheckBox
                                className="font-medium text-left text-lg"
                                inputClassName="h-[26px] mr-[5px] w-[26px]"
                                name="unlimitededitab_One"
                                id="unlimitededitab_One"
                                label="Unlimited editable exports"
                              ></CheckBox>
                              <CheckBox
                                className="font-medium text-left text-lg"
                                inputClassName="h-[26px] mr-[5px] w-[26px]"
                                name="foldersandcolla_One"
                                id="foldersandcolla_One"
                                label="Folders and collaboration "
                              ></CheckBox>
                              <CheckBox
                                className="font-medium text-left text-lg"
                                inputClassName="h-[26px] mr-[5px] w-[26px]"
                                name="allincomingapps_One"
                                id="allincomingapps_One"
                                label="All incoming apps"
                              ></CheckBox>
                            </div>
                            <Button
                              className="cursor-pointer font-semibold min-w-[260px] rounded-[20px] shadow-bs text-center text-lg"
                              color="teal_300"
                            >
                              Go to pro
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-3.5 items-center justify-center mb-[18px] md:mt-0 mt-[22px] p-5 rounded-[20px] shadow-bs w-[32%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-[19px] w-[76%] md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                      size="txtInterSemiBold30Gray900"
                    >
                      Business
                    </Text>
                    <Text
                      className="leading-[27.00px] mt-[9px] text-center text-gray-500 text-lg w-full"
                      size="txtInterMedium18Gray500"
                    >
                      Unveil new superpowers and join the Design Leaque
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[17px] w-[30%] md:w-full">
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="text-gray-500 text-lg"
                          size="txtInterMedium18Gray500"
                        >
                          $
                        </Text>
                        <Text
                          className="mt-[5px] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900"
                          size="txtInterSemiBold50Gray900"
                        >
                          16
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50_02 flex flex-col items-center justify-end mb-[5px] p-[25px] sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-center justify-start mt-[3px] w-[94%] md:w-full">
                      <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                        <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                          <CheckBox
                            className="font-medium text-left text-lg"
                            inputClassName="h-[26px] mr-[5px] w-[26px]"
                            name="allthefeatures"
                            id="allthefeatures"
                            label="All the features of pro plan"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium text-left text-lg"
                            inputClassName="h-[26px] mr-[5px] w-[26px]"
                            name="accountsuccess"
                            id="accountsuccess"
                            label="Account success Manager"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium text-left text-lg"
                            inputClassName="h-[26px] mr-[5px] w-[26px]"
                            name="singlesignonsso_One"
                            id="singlesignonsso_One"
                            label="Single Sign-On (SSO)"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium text-left text-lg"
                            inputClassName="h-[26px] mr-[5px] w-[26px]"
                            name="coconceptionpog_One"
                            id="coconceptionpog_One"
                            label="Co-conception pogram"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium text-left text-lg"
                            inputClassName="h-[26px] mr-[5px] w-[26px]"
                            name="collaborationso_One"
                            id="collaborationso_One"
                            label="Collaboration-Soon"
                          ></CheckBox>
                        </div>
                        <Button className="cursor-pointer font-semibold min-w-[260px] rounded-[20px] text-center text-lg">
                          Goto Business
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[82%]">
              <div className="flex flex-col md:gap-10 gap-[74px] items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900"
                    size="txtInterSemiBold50Gray900"
                  >
                    Our Features you cab get
                  </Text>
                  <Text
                    className="leading-[30.00px] text-gray-500 text-lg"
                    size="txtInterMedium18Gray500"
                  >
                    We offer a variety of interesting features that you can help
                    increase yor productivity at work and manage your projrct
                    esaly
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[162px] sm:mt-0 my-7 rounded-[33px] text-center text-lg"
                    color="teal_300"
                  >
                    Get Started
                  </Button>
                </div>
                <div className="gap-11 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col gap-[26px] items-start justify-start w-full">
                    <Img
                      className="h-[430px] rounded-bl-[20px] rounded-br-[20px]"
                      src="images/img_frame247.svg"
                      alt="frame247"
                    />
                    <div className="flex flex-col gap-4 items-start justify-start">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                        size="txtInterSemiBold30Gray900"
                      >
                        Collboration Teams{" "}
                      </Text>
                      <Text
                        className="leading-[30.00px] text-gray-500 text-lg w-full"
                        size="txtInterMedium18Gray500"
                      >
                        Here you can handle projects together with team
                        virtually
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[29px] items-start justify-start w-full">
                    <div className="bg-gray-50_01 md:h-[369px] h-[430px] pl-5 pt-5 relative rounded-[20px] w-full">
                      <Img
                        className="absolute bottom-[0] h-[332px] right-[0]"
                        src="images/img_group177.svg"
                        alt="group177"
                      />
                      <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[85%]">
                        <div className="flex flex-col gap-[9px] justify-start w-full">
                          <div className="flex flex-row items-start justify-evenly w-full">
                            <div className="md:h-[194px] h-[205px] mb-[21px] relative w-[91%]">
                              <div className="absolute bg-teal-300 bottom-[0] md:h-[173px] h-[174px] left-[0] rounded-[10px] shadow-bs1 w-[95%]">
                                <Img
                                  className="h-[173px] m-auto"
                                  src="images/img_vector39.svg"
                                  alt="vectorThirtyNine"
                                />
                                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-[78%]">
                                  <Img
                                    className="h-[42px] w-[42px]"
                                    src="images/img_thumbsup_yellow_a400.svg"
                                    alt="thumbsup_Two"
                                  />
                                  <Text
                                    className="mt-[29px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                                    size="txtInterMedium30"
                                  >
                                    Document File
                                  </Text>
                                  <Text
                                    className="mt-[5px] text-lg text-white-A700"
                                    size="txtInterMedium18WhiteA700"
                                  >
                                    456 GB I 1056 Items
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="absolute flex h-[66px] items-center justify-center right-[0] top-[0] w-[66px]"
                                shape="round"
                                size="md"
                              >
                                <Img src="images/img_union.svg" alt="union" />
                              </Button>
                            </div>
                            <div className="bg-light_blue-A700 h-36 mt-[82px] rounded-[14px] w-[9%]"></div>
                          </div>
                          <Img
                            className="h-[134px] ml-9 md:ml-[0]"
                            src="images/img_group182.svg"
                            alt="group182"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                        size="txtInterSemiBold30Gray900"
                      >
                        Cloud Storage
                      </Text>
                      <Text
                        className="leading-[30.00px] text-gray-500 text-lg w-full"
                        size="txtInterMedium18Gray500"
                      >
                        No nedd to worry about storage because we provide
                        storage up to 2 TB
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[29px] items-start justify-start w-full">
                    <div className="bg-gray-50_01 md:h-[332px] h-[430px] pl-5 pt-5 relative rounded-[20px] w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[332px] items-center justify-end pl-[7px] py-[7px] right-[0] w-[95%]"
                        style={{
                          backgroundImage: "url('images/img_group177.svg')",
                        }}
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[238px] items-start justify-end mb-[21px] mt-[59px] p-[33px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group17.svg')",
                          }}
                        >
                          <Img
                            className="h-10 mt-[132px] w-10"
                            src="images/img_thumbsup_teal_300.svg"
                            alt="thumbsup_Three"
                          />
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-[190px] inset-x-[0] items-center justify-start mx-auto top-[5%] w-[190px]">
                        <div className="h-[190px] relative w-[190px]">
                          <div className="h-[190px] m-auto w-[190px]">
                            <div className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-auto overflow-visible"
                                value={49}
                                counterClockwise
                                strokeWidth={18}
                                styles={{
                                  trail: { strokeWidth: 18, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(90deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-auto overflow-visible"
                                value={19}
                                counterClockwise
                                strokeWidth={18}
                                styles={{
                                  trail: { strokeWidth: 18, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(90deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-auto overflow-visible"
                                value={18}
                                counterClockwise
                                strokeWidth={18}
                                styles={{
                                  trail: { strokeWidth: 18, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(90deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                          </div>
                          <div className="absolute flex flex-row gap-[22px] h-max inset-y-[0] items-start justify-between left-[2%] my-auto w-[69%]">
                            <Text
                              className="mt-[49px] text-black-900 text-sm"
                              size="txtInterMedium14"
                            >
                              60%
                            </Text>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[78px] items-center justify-start p-[19px] w-[78px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group18.svg')",
                              }}
                            >
                              <Img
                                className="h-[37px]"
                                src="images/img_user_light_blue_a700.svg"
                                alt="user_Two"
                              />
                            </div>
                          </div>
                          <Text
                            className="absolute bottom-[35%] right-[0] text-black-900 text-sm"
                            size="txtInterMedium14"
                          >
                            40%
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                        size="txtInterSemiBold30Gray900"
                      >
                        Daily Analytics
                      </Text>
                      <Text
                        className="leading-[30.00px] text-gray-500 text-lg w-full"
                        size="txtInterMedium18Gray500"
                      >
                        We always provide useful informatin to make it easier
                        for you every day
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray-900_01 flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[41px] mt-[130px] mx-auto w-[82%]">
              <ul className="flex flex-col items-center justify-center w-full common-column-list">
                <li>
                  <a href="javascript:">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between">
                      <div className="flex flex-col items-center justify-start w-2/5 md:w-full">
                        <div className="flex flex-col gap-[43px] items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-[96%] sm:w-full"
                              size="txtInterSemiBold50WhiteA700"
                            >
                              People are Saying About DoWhith
                            </Text>
                            <Text
                              className="leading-[30.00px] mt-5 text-gray-500 text-lg w-[99%] sm:w-full"
                              size="txtInterMedium18Gray500"
                            >
                              Everything you need to accept to payment and grow
                              your money of manage anywhere on planet
                            </Text>
                            <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] mt-[42px] w-[99%] md:w-full">
                              <Img
                                className="h-[38px]"
                                src="images/img_thumbsup_blue_gray_100.svg"
                                alt="thumbsup_Four"
                              />
                              <Text
                                className="leading-[30.00px] mt-10 text-gray-500 text-lg w-full"
                                size="txtInterMedium18Gray500"
                              >
                                I am very helped by this E-wallet application ,
                                my days are very easy to use this application
                                and its very helpful in my life , even I can pay
                                a short time 😍
                              </Text>
                              <Text
                                className="mt-[45px] text-gray-500 text-lg"
                                size="txtInterMedium18Gray500"
                              >
                                _ Aria Zinanrio
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-start md:ml-[0] ml-[5px] w-[88%] md:w-full">
                            <Img
                              className="h-[66px] md:h-auto rounded-[50%] w-[66px]"
                              src="images/img_ellipse54.png"
                              alt="ellipseFiftyFour"
                            />
                            <Img
                              className="h-[66px] md:h-auto rounded-[50%] w-[66px]"
                              src="images/img_ellipse55.png"
                              alt="ellipseFiftyFive"
                            />
                            <Img
                              className="h-[66px] md:h-auto rounded-[50%] w-[66px]"
                              src="images/img_ellipse56.png"
                              alt="ellipseFiftySix"
                            />
                            <Img
                              className="h-[66px] md:h-auto rounded-[50%] w-[66px]"
                              src="images/img_ellipse57.png"
                              alt="ellipseFiftySeven"
                            />
                            <Button
                              className="flex h-[66px] items-center justify-center rounded-[50%] w-[66px]"
                              shape="circle"
                              variant="outline"
                            >
                              <Img
                                src="images/img_contrast_white_a700.svg"
                                alt="contrast_One"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue_gray-900_01 flex flex-col gap-2.5 items-center justify-start p-10 sm:px-5 rounded-[20px] w-[52%] md:w-full">
                        <div className="flex flex-col gap-[9px] items-center justify-start w-[32%] md:w-full">
                          <Img
                            className="h-[86px]"
                            src="images/img_group.svg"
                            alt="group"
                          />
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                            size="txtInterMedium30"
                          >
                            Get Started
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start mb-6 w-[83%] md:w-full">
                          <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                            <Text
                              className="text-lg text-white-A700"
                              size="txtInterMedium18WhiteA700"
                            >
                              Email
                            </Text>
                            <Input
                              name="groupFour"
                              placeholder="Enter your email"
                              className="font-medium leading-[normal] p-0 placeholder:text-gray-500 text-left text-sm w-full"
                              wrapClassName="w-full"
                              type="email"
                            ></Input>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[22px] w-full">
                            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtInterMedium18WhiteA700"
                              >
                                Message
                              </Text>
                              <TextArea
                                className="bg-white-A700 border-0 font-medium leading-[normal] pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-[21px] rounded-[10px] placeholder:text-gray-500 text-gray-500 text-left text-sm w-full"
                                name="groupThree"
                                placeholder="What are you say ?"
                              ></TextArea>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-semibold leading-[normal] min-w-[440px] sm:min-w-full mt-5 text-base text-center"
                            shape="round"
                            color="teal_300"
                          >
                            Request Demo
                          </Button>
                          <Text
                            className="md:ml-[0] ml-[323px] mt-2.5 text-sm text-white-A700"
                            size="txtInterMedium14WhiteA700"
                          >
                            or Start Free Trial
                          </Text>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[153px]">
                      <div className="flex flex-col items-start justify-start w-[36%] md:w-full">
                        <Text
                          className="sm:text-[40px] md:text-[46px] text-[50px] text-teal-300"
                          size="txtInterSemiBold50"
                        >
                          Biccas
                        </Text>
                        <Text
                          className="mt-[21px] text-gray-500 text-lg"
                          size="txtInterMedium18Gray500"
                        >
                          Get started noew try our product
                        </Text>
                        <div className="flex h-[60px] md:h-[91px] justify-end mt-[31px] relative w-full">
                          <Text
                            className="mb-4 ml-5 mt-auto text-gray-500 text-lg"
                            size="txtInterMedium18Gray500"
                          >
                            Enter your email here
                          </Text>
                          <div className="absolute border-2 border-gray-500 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-[7px] rounded-[30px] w-full">
                            <Button
                              className="flex h-[46px] items-center justify-center rounded-[50%] w-[46px]"
                              shape="circle"
                              color="teal_300"
                              size="sm"
                            >
                              <Img
                                className="h-6"
                                src="images/img_arrowleft.svg"
                                alt="arrowleft"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:mt-0 mt-4 w-[51%] md:w-full">
                        <div className="flex flex-col gap-[30px] items-start justify-start w-[30%] sm:w-full">
                          <a
                            href="javascript:"
                            className="text-lg text-white-A700"
                          >
                            <Text size="txtInterMedium18WhiteA700">
                              Support
                            </Text>
                          </a>
                          <ul className="flex flex-col items-start justify-start w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  Help centre
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-[17px] text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  Account information
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-5 text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  About
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-[19px] text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  Contact us
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-[30px] items-start justify-start w-[26%] sm:w-full">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtInterMedium18WhiteA700"
                          >
                            Help and Solution
                          </Text>
                          <ul className="flex flex-col gap-[19px] items-start justify-start md:w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  Talk to support
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  Support docs
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  System status
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  Covid responde
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-[31px] items-start justify-start w-[23%] sm:w-full">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtInterMedium18WhiteA700"
                          >
                            Product
                          </Text>
                          <ul className="flex flex-col items-start justify-start w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  Update
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-[19px] text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  Security
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-[18px] text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  Beta test
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-[21px] text-gray-500 text-lg"
                              >
                                <Text size="txtInterMedium18Gray500">
                                  Pricing product
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[61px]">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtInterMedium18WhiteA700"
                        >
                          © 2022 Biccas Inc. Copyright and rights reserved
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-between w-[28%] md:w-full">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtInterMedium18WhiteA700"
                        >
                          Terms and Condtions
                        </Text>
                        <div className="bg-gray-500 h-1 mb-[11px] mt-2 rounded-[50%] w-1"></div>
                        <a
                          href="javascript:"
                          className="text-lg text-white-A700"
                        >
                          <Text size="txtInterMedium18WhiteA700">
                            Privacy Policy
                          </Text>
                        </a>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DesignPage;
