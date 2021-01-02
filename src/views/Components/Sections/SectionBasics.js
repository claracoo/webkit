import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
// import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  // React.useEffect(() => {
  //   if (
  //     !document
  //       .getElementById("sliderRegular")
  //       .classList.contains("noUi-target")
  //   ) {
  //     Slider.create(document.getElementById("sliderRegular"), {
  //       start: [40],
  //       connect: [true, false],
  //       step: 1,
  //       range: { min: 0, max: 100 }
  //     });
  //   }
  //   if (
  //     !document.getElementById("sliderDouble").classList.contains("noUi-target")
  //   ) {
  //     Slider.create(document.getElementById("sliderDouble"), {
  //       start: [20, 60],
  //       connect: [false, true, false],
  //       step: 1,
  //       range: { min: 0, max: 100 }
  //     });
  //   }
  //   return function cleanup() { };
  // });
  // const handleToggle = value => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setChecked(newChecked);
  // };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>About Me</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3 style={{ width: "850px" }}>
              {/* Buttons
              <br /> */}
              <p>Hello, I’m Clara Cook, and I specialize in Human Computer Interaction.</p>

              <p>I am currently a senior at the University at Buffalo with a double major in computer science, and cognitive science, a concentration in higher level processing, plus a double minor in psychology and Spanish. My schedule is jam-packed with all of the facets of study I love. My passion for all of these subjects ties in around the idea that different people all over the world use different technology. However, the experience of dealing with difficult techonology is universal.</p>
              <p></p>
              <p>HCI is a field ever more important in an ever more technological world: many students come to college with little or no computer experience, automatically putting them at a disadvantage. Despite being brilliant and diligent people, the learning curve for incorporating so many new computer skills into school is daunting. My dream is to flatten that curve; applying HCI principles can make a world of difference and bring the best people to the forefront.</p>
            </h3>
          </div>
        </div>
        {/* <div className={classes.space50} />
        <div className={classes.space70} />
        <div className={classes.space70} />
        <div id="sliders">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Sliders</h3>
              </div>
              <div id="sliderRegular" className="slider-primary" />
              <br />
              <div id="sliderDouble" className="slider-info" />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Badges</h3>
              </div>
              <Badge>default</Badge>
              <Badge color="primary">primary</Badge>
              <Badge color="info">info</Badge>
              <Badge color="success">success</Badge>
              <Badge color="warning">warning</Badge>
              <Badge color="danger">danger</Badge>
              <Badge color="rose">rose</Badge>
            </GridItem>
          </GridContainer>
        </div> */}
      </div>
    </div>
  );
}
