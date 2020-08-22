import React from "react";
import Slider from "react-animated-slider";

import { MerkatoOnline } from "../../../assets/DemoJobsImage";
import { Button } from "reactstrap";

const magazines = [
  {
    title: "Traditional (የሃበሻ ቀሚስ) ",
    description:
      "ስለኢትዮጵያ ባህላዊ ልብስ በጣም በሰፊው የሚነገር እና የተጻፈ ጽሑፍ ‹ሃበሻ ኪሚሴ / ኪሴሴ› ወይም ‹የሐበሻ ልብስ› ይባላል ፡፡ ብዙውን ጊዜ ቁርጭምጭሚቶች ላይ ይወርዳል እና ከጫማ ጋር ይለበሳል።",
    button: "Read More",
    image: MerkatoOnline,
  },
  {
    title: "Traditional (የሃበሻ ቀሚስ) ",
    description:
      "ስለኢትዮጵያ ባህላዊ ልብስ በጣም በሰፊው የሚነገር እና የተጻፈ ጽሑፍ ‹ሃበሻ ኪሚሴ / ኪሴሴ› ወይም ‹የሐበሻ ልብስ› ይባላል ፡፡ ብዙውን ጊዜ ቁርጭምጭሚቶች ላይ ይወርዳል እና ከጫማ ጋር ይለበሳል።",
    button: "Read More",
    image: MerkatoOnline,
  },
];

const HomeImageContainer = () => (
  <div>
    <Slider autoplay={2000} className="slider-wrapper">
      {magazines.map((magazine, index) => (
        <div
          key={index}
          className="slider-content"
          style={
            {
              // background: `url('${magazine.image}') no-repeat center center`,
            }
          }
        >
          <div className="inner">
            <h1>{magazine.title}</h1>
            <p>{magazine.description}</p>
            <Button outline color="light">
              Read More
            </Button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default HomeImageContainer;
