import './App.css';
import { BsEnvelope, BsWhatsapp, BsChevronLeft, BsChevronRight, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaFacebookF, FaCertificate, FaTwitter, FaLinkedin, FaPlay, FaQuoteRight, FaGraduationCap, FaUniversity, FaHandPointRight, FaUserFriends, FaChalkboardTeacher } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { TiSocialGooglePlus, TiSocialInstagram } from "react-icons/ti";
import { GiTeacher, GiUpgrade } from "react-icons/gi";
import { HiArrowLongRight, HiUserGroup, HiComputerDesktop } from "react-icons/hi2";
import { CiYoutube, CiPenpot } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import myimg from "./img/f_logo.SVG";
import myimg1 from "./img/i1.SVG";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var icon_bar = [
  { ico: <FaFacebookF></FaFacebookF> },
  { ico: <FaTwitter></FaTwitter> },
  { ico: <TiSocialGooglePlus></TiSocialGooglePlus> },
  { ico: <FaLinkedin></FaLinkedin> },
  { ico: <TiSocialInstagram></TiSocialInstagram> },
  { ico: <CiYoutube></CiYoutube> },
  { ico: <BsWhatsapp></BsWhatsapp> },
]

var arr_obj = [
  { name: "HOME" },
  { name: "COURSES" },
  { name: "ACTIVITIES" },
  { name: "BLOG" },
  { name: "KNOW US" },
  { name: "GET IN TOUCH" },
  { name: "STUDENT ZONE" },
]

var slider = [require("./img/a1.jpg"), require("./img/a2.jpg"), require("./img/a3.jpg"), require("./img/a4.jpg"),
require("./img/a5.jpg"), require("./img/a6.jpg")]

var courses = [
  { img: require("./img/i3.jpg"), name: "Development Courses" },
  { img: require("./img/i4.jpg"), name: "Design Courses" },
  { img: require("./img/i5.jpg"), name: "Programming IT" },
  { img: require("./img/i6.jpg"), name: "Trendy Courses" },
  { img: require("./img/i7.jpg"), name: "Civil-Mech. Engineering" },
  { img: require("./img/i8.jpg"), name: "Business Development" }
]

var counter = [
  { icon: <FaUserFriends></FaUserFriends>, count: "18000+", name: 'HAPPY STUDENTS' },
  { icon: <CiPenpot></CiPenpot>, count: "10+", name: 'CERTIFICATION APPROVAL' },
  { icon: <FaChalkboardTeacher></FaChalkboardTeacher>, count: "100+", name: 'CERTIFIED TEACHERS' },
  { icon: <FaGraduationCap></FaGraduationCap>, count: "12000+", name: 'STUDENTS PLACEDS' }
]
var read_our = [
  {
    icon: <GiTeacher class='sv1'></GiTeacher>,
    name: 'Industry Experts As Trainers',
    pragraph: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
  {
    icon: <HiUserGroup class='sv2'></HiUserGroup>,
    name: 'Latest Curriculum',
    pragraph: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time."
  },
  {
    icon: <HiComputerDesktop class='sv3'></HiComputerDesktop>,
    name: 'Latest Technology',
    pragraph: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."
  },
  {
    icon: <MdSupportAgent class='sv4'></MdSupportAgent>,
    name: 'Industry Experts As Trainers',
    pragraph: "At the end of each training,our training instructor will go through the possible technical questions you may be asked."
  },
  {
    icon: <GiUpgrade class='sv5'></GiUpgrade>,
    name: 'Latest Curriculum',
    pragraph: "We will be provided free upgradation for any newer version of the course you have."
  },
  {
    icon: <FaHandsHoldingChild class='sv6'></FaHandsHoldingChild>,
    name: 'Latest Technology',
    pragraph: "We will provide you lifetime support on all the courses you learned from us."
  },
]
var stu_place = [
  // {img:require('./img/i14.png')},
  { img: require('./img/i15.png') },
  { img: require('./img/i16.png') },
  { img: require('./img/i17.png') },
  { img: require('./img/i18.png') },
  { img: require('./img/i19.png') },
  // {img:require('./img/i14.png')},
  { img: require('./img/i15.png') },
  { img: require('./img/i16.png') },
  { img: require('./img/i17.png') },
  { img: require('./img/i18.png') },
  { img: require('./img/i19.png') }
]
var our_course = [
  { pra: "Multimedia Training Institute In Varachha" },
  { pra: "spoken english class in katargam" },
  { pra: "Web development training in katargam" },
  { pra: "Best animation training course" },
  { pra: "C++ Programming Language Training Institute In Varachha" },
  { pra: "Python Training Institute In Varachha" },
  { pra: "Adobe illustrator design" },
  { pra: "Adobe xd design training institute in varachha" },
  { pra: "Multimedia Training Institute In Varachha" },
  { pra: "spoken english class in katargam" },
  { pra: "Web development training in katargam" },
  { pra: "Best animation training course" },
]

function App() {
  return (

    // top header
    <div class="homepage">
      <div class="top_header">
        <div class="container">
          <div class="main_header">
            <div class="left_info">
              <a class="inbox"><BsEnvelope></BsEnvelope><span>info@cdmi.in</span></a>
              <a class="certificate"><FaCertificate></FaCertificate><span> Verify Certificate</span></a>
            </div>
            <div class="qus">
              <p>HAVE ANY QUESTION ? +91 90333 16003</p>
            </div>
            <div class="icon">
              <a>
                {
                  icon_bar.map((ele) => {
                    return (
                      <li>{ele.ico}</li>
                    )
                  })
                }
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div class="logo-head">
        <div class="container">
          <div class="menu-head">
            <div class="logo">
              <img src={myimg1}></img>
            </div>
            <div class="menu">
              <ul className="pt-4">
                {
                  arr_obj.map((ele) => {
                    return (
                      <li>{ele.name}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <OwlCarousel className="owl-theme" items={1} autoplay autoplayTimeout={2000} loop margin={10} dots={false} nav>
        {
          slider.map((ele) => {
            return (
              <div class="item">
                <img src={ele}></img>
              </div>
            )
          })
        }
      </OwlCarousel>

      {/* Course */}
      <div class="course-info">
        <div class="container">
          <div class="course_title">
            <p class="first_title">
              <hr></hr>
              <span>CREATIVE COURSE</span>
            </p>
            <p class="second_title">
              <h1>OFFERED COURSES</h1>
            </p>
          </div>
          <div className="course_img">
            {
              courses.map((ele, ind) => {
                return (
                  <div key={ind}>
                    <img src={ele.img}></img>
                    <a>{ele.name}</a><hr></hr>
                    <div className="flex star_icon">
                      <p>
                        <i><BsStarFill></BsStarFill></i>
                        <i><BsStarFill></BsStarFill></i>
                        <i><BsStarFill></BsStarFill></i>
                        <i><BsStarFill></BsStarFill></i>
                        <i><BsStarHalf></BsStarHalf></i>
                      </p>
                      <button><a>Know more..!</a></button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div class="viewall">
            <button>View All Courses<HiArrowLongRight></HiArrowLongRight></button>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div class="about-us">
        <div class="about-head">
          <p class="first-head">
            <hr></hr>
            <span>ABOUT US</span>
          </p>
          <p class="second-head">
            <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
          </p>
          <p class="about-info">Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
          </p>
          <div class="about-enroll">
            <button>Enroll Now..!<HiArrowLongRight></HiArrowLongRight></button>
          </div>
        </div>
        <div class="aboutus-img">
          <div className="right_img flex">
            <img src={require("./img/i9.jpg")}></img>
          </div>
          {/* <p className="play">
                    <a href='https://youtu.be/ZZpoqf-mwEM?si=mxur6i92DSBGZUoo'><i className='p_icon'><FaPlay></FaPlay></i></a>
                  </p> */}
        </div>
      </div>

      {/* count */}
      <div class='review'>
        <div class='counter'>
          <div class='container'>
            <div class='good-review '>
              <div className='count'>
                {
                  counter.map((ele, ind) => {
                    return (
                      <div key={ind}>
                        <p>{ele.icon}</p>
                        <h1>{ele.count}</h1>
                        <h4>{ele.name}</h4>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Student */}
      <div class='happy-us'>
        <div className='container'>
          <div class='test-main'>
            <div class='test-head'>
              <p class='test1-head'>
                <hr></hr>
                <span>HAPPY STUDENTS</span>
              </p>
              <p class='test2-head'>
                <h1>ALUMNI SPEAK</h1>
              </p>
              <p className='test-icon'>
                <p><FaQuoteRight></FaQuoteRight></p>
                <div>
                  <p><BsChevronLeft></BsChevronLeft></p>
                  <p><BsChevronRight></BsChevronRight></p>
                </div>
              </p>
              <p class='test-info'>Good place to get trained on all the programming languages!
                Highly qualified trainers with enthusiastic founder! Must visit for all the students who are interested to get jobs!
              </p>
              <p class='test-person'>
                <img src={require('./img/i11.jpg')}></img>
                <span>
                  <p>Nilay Rabadiya</p>
                  <i>
                    <h5>CEO </h5>
                    <p>@ Techtical Solution</p>
                  </i>
                </span>
              </p>
            </div>
            {/* <div class='test-img'> */}
            <div className="side_img flex">
              <img src={require('./img/i13.jpg')} style={{ objectFit: "cover", width: "70%" }}></img>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* Why Choose Creative */}
      <div className="creative_info">
        <div class="container">
          <div class="creative-head">
            <p class="creative1-head">
              <hr></hr>
              <span>READ OUR DIFFERENCE</span>
            </p>
            <p class='creative2-head'>
              <h1>WHY CHOOSE CREATIVE</h1>
            </p>
          </div>
          <div class='only_creative'>
            {
              read_our.map((ele, ind) => {
                return (
                  <div key={ind}>
                    <h1>{ele.icon}</h1>
                    <h3>{ele.name}</h3>
                    <p>{ele.pragraph}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* student info */}
      <div class="student_info">
        <div class="container">
          <div class="student-head">
            <p class="stu1-head">
              <hr></hr>
              <span>STUDENT PLACEMENT</span>
            </p>
            <p class="stu2-head">
              <h1>OUR RECRUITMENT PARTNERS</h1>
            </p>
            <div>
              <OwlCarousel className="owl-theme" items={5} autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
                {
                  stu_place.map((ele) => {
                    return (
                      <img src={ele.img}></img>
                    )
                  })
                }
              </OwlCarousel>
            </div>
          </div>

          {/*our button */}
          <div className="demand">
            <p className="our_info">Our Demanded Course -</p>
            <div className="parent_btn">
              <div className="btn3">
                {
                  our_course.map((ele, ind) => {
                    return (
                      <div key={ind}>
                        <p class="down_button">{ele.pra}</p>
                      </div>

                    )
                  })
                }
              </div>

              <p className="show">Show More</p>
            </div>
          </div>
        </div>
      </div>

      {/*Footer  */}
      <footer>
        <div className="footer_back">
          <div className="footer_img">
            <img src={myimg}></img>
            <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
            <span>FOLLOW US ON</span>
            <p className="down_icon">
              <i>
                {
                  icon_bar.map((ele) => {
                    return (
                      <li>{ele.ico}</li>
                    )
                  })
                }
              </i>
            </p>
          </div>
          <div className="footer_link">
            <p>FEATURE LINKS</p>
            <ul>
              <li><i><FaHandPointRight></FaHandPointRight></i>About Us</li>
              <li><i><FaHandPointRight></FaHandPointRight></i>Blogs</li>
              <li><i><FaHandPointRight></FaHandPointRight></i>Join Us</li>
              <li><i><FaHandPointRight></FaHandPointRight></i>Company Login</li>
              <li><i><FaHandPointRight></FaHandPointRight></i>Certificate Verification</li>
            </ul>
          </div>
          <div className="other_branch">
            <p className="contact">CONTACT US</p>
            <h4>HEAD OFFICE - YOGICHOWK</h4>
            <p className="address">401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
            <p className="number">Mo : +91 90333 16003</p>
            <h4>OTHER BRANCHES</h4>
            <ul>
              <li><i><FaUniversity></FaUniversity></i>Katargam</li>
              <li><i><FaUniversity></FaUniversity></i>Mota Varachha</li>
              <li><i><FaUniversity></FaUniversity></i> Adajan</li>
              <li><i><FaUniversity></FaUniversity></i> Navsari</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p class="copyright-text">
              © <span id="date">2023</span>All Rights Reserved by Creative Design & Multimedia Institute.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default App;