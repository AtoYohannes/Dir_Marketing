import React from "react";
import Slider from "react-animated-slider";

import {
  MerkatoOnline,
  PoloTrip,
  Omritech,
} from "../../../assets/DemoJobsImage";
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
      title: "ቬሎዎች",
      description:
        "ሰርግዎን በዘመኑ እና ወቅታቸን በጠበቁ አልባሳት ማድመቅ ይፈልጋሉ?? እንግዲያዉስ የሚፈልጉትን መረጃም ሆነ አልባሳት እዚሁ መነን ግብዪት ላይ ያገኙታል።",
      button: "Read More",
      image: Omritech,
    },
    {
      title: "TITLE GOES HERE ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Read More",
      image: PoloTrip,
    },
  ];
  
  const HomeImageContainer = () => (
    <div>
      <Slider autoplay={4000} className="slider-wrapper">
        {magazines.map((magazine, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${magazine.image}') no-repeat center center`,
            }}
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
  