import { useState } from "react";
import "./Blogs.css";

export default function Blogs() {
  const [lengthArray, setLengthArray] = useState([]);
  const [blogs, setBlogs] = useState([
    {
      title: "Front end and Web Design",
      date: "September 20, 2022",
      description:
        "New innovations and ideas in design. Incorporating quality design in you websites.",
    },
    {
      title: "Front end and Web Design",
      date: "September 20, 2022",
      description: "New innovations and ideas in design.",
    },
    {
      title: "Front end and Web Design jskfdas sdf",
      date: "September 20, 2022",
      description: "New innovations and ideas in design.",
    },
    {
      title: "Front end and Web Design",
      date: "September 20, 2022",
      description: "New innovations and ideas in design.",
    },
  ]);
  const addMoreBlogs = () => {
    const newBlogs = [
      ...blogs,
      {
        title: "New Blog 1",
        date: "February 3, 2024",
        description: "This is a new blog added dynamically.This is a new blog added dynamically.This is a new blog added dynamically.",
      },
      {
        title: "New Blog 2",
        date: "February 3, 2024",
        description: "Another new blog added dynamically.This is a new blog added dynamically.",
      },
      {
        title: "New Blog 3",
        date: "February 3, 2024",
        description: "This is a new blog added dynamically.This is a new blog added dynamically.This is a new blog added dynamically.",
      },
    ];
    const moreLength = Math.floor((newBlogs.length - 4) / 3);
    let tempArray = [];
    for (let i = 0; i < moreLength; i++) {
      tempArray.push(i);
    }
    setLengthArray(tempArray);
    setBlogs(newBlogs);
  };
  return (
    <div className="blogs">
      <div className="blog-star">
        <svg
          viewBox="0 0 152 476"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M276.727 386.321L185.073 475.731L162.052 336.574L23.4488 353.295L114.893 251.804L0.471785 219.063L109.013 156.055L82.6535 29.6202L196.661 141.21C196.661 141.21 231.975 88.4481 199.316 39.0537C162.307 7.89432 137.463 -14.058 171.893 11.1059C184.093 20.0223 192.983 29.4746 199.316 39.0537C243.041 75.867 303.746 125.532 303.746 125.532L304.328 8.60499L429.223 122.738L276.727 386.321Z"
            fill="#4C86F9"
          />
        </svg>
      </div>
      <div className="blog-svg1"></div>
      <div className="blog-svg2"></div>
      <div className="blog-svg3"></div>
      <div className="blog-svg4"></div>
      <div className="blog-wpr">
        <h2>
          <span>Explore, </span>
          <span>Inspire </span>
          <span>And </span>
          <span>Ignite</span>
        </h2>
        <h3>Welcome to Our Blogopolis!</h3>
        <div className="blog-flex1">
          <div>
          <div>
            <div className="blog-card bcard1">
              <h4>{blogs[0].title}</h4>
              <p>{blogs[0].date}</p>
              <p>{blogs[0].description}</p>
            </div>
          </div>
          {lengthArray.map((item, index) => {
            return (
                  <div key={index}>
                     <div className="blog-card bcard7 bcard1" >
                      <h4>{blogs[3 * item + 4].title}</h4>
                      <p>{blogs[3 * item + 4].date}</p>
                      <p>{blogs[3 * item + 4].description}</p>
                    </div>
                  </div>
            );
          })}
          </div>
          <div className="blog-flex2">
            <div className="blog-flex3">
              <div>
                <div className="blog-card bcard2">
                  <h4>{blogs[1].title}</h4>
                  <p>{blogs[1].date}</p>
                  <p>{blogs[1].description}</p>
                </div>
              </div>
              <div>
                <div className="blog-card bcard3">
                  <h4>{blogs[2].title}</h4>
                  <p>{blogs[2].date}</p>
                  <p>{blogs[2].description}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="blog-card bcard4">
                <h4>{blogs[3].title}</h4>
                <p>{blogs[3].date}</p>
                <p>{blogs[3].description}</p>
              </div>
            </div>
          {lengthArray.map((item, index) => {
            return (
            <div key={index} className="blog-flex3 blog-flex4">
                  <div>
                    <div className="blog-card h100">
                      <h4>{blogs[3 * item + 5].title}</h4>
                      <p>{blogs[3 * item + 5].date}</p>
                      <p>{blogs[3 * item + 5].description}</p>
                    </div>
                  </div>
                  <div>
                    <div className="blog-card h100">
                      <h4>{blogs[3 * item + 6].title}</h4>
                      <p>{blogs[3 * item + 6].date}</p>
                      <p>{blogs[3 * item + 6].description}</p>
                    </div>
                  </div>
              </div>
            );
          })}
          </div>
        </div>
        <div className="more-btn">
          <a onClick={addMoreBlogs}>More Blogs</a>
        </div>
      </div>
    </div>
  );
}
