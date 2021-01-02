import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

// import image1 from "assets/img/bg.jpg";
// import image2 from "assets/img/bg2.jpg";
// import image3 from "assets/img/bg3.jpg";

import Trees from "views/Components/pics/nahh.jpg"
import Ambassador from "views/Components/pics/ambassador.jpg"
import Davis from "views/Components/pics/davis.jpg"
import Buffalo from "views/Components/pics/buffalo.jpg"
import Hackathon from "views/Components/pics/hackathon.jpg"
import BNL from "views/Components/pics/bnl.jpg"
import Teaching from "views/Components/pics/teaching.jpg"

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={Teaching} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Teaching in systems programming, Buffalo NY
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={BNL} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Brookhaven National Laboratory, Upton NY
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={Hackathon} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      My first hackathon, UB Hacking, Buffalo NY
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={Buffalo} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Seeing Niagara Falls at night, Niagara Falls NY
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={Davis}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Davis Hall, the computer science building, Buffalo NY
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={Ambassador} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      College of Arts and Sciences Ambassador Checkin Station, Buffalo NY
                    </h4>
                  </div>
                </div>
                {/* <div>
                  <img src={Trees} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div> */}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
