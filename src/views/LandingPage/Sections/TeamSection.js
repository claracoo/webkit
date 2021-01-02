import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

// import team1 from "assets/img/faces/avatar.jpg";
// import team2 from "assets/img/faces/christian.jpg";
// import team3 from "assets/img/faces/kendall.jpg";


import Aina from "assets/img/aina.jpg";
import BadSeed from "assets/img/badSeed.png";
import BadSeedPoster from "assets/img/badSeedPoster.png";
import Bar from "assets/img/Bar.png";
import Bubble from "assets/img/Bubble.png";
import Doodle from "assets/img/Doodle.png";
import SeedForward from "assets/img/SeedForward.png";
import SpikersLogo from "assets/img/spikersLogo.png";
import Stairs from "assets/img/stairs.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={SeedForward} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                SeedForward
                <br />
                <small className={classes.smallTitle}>App</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={SpikersLogo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Spikers
                <br />
                <small className={classes.smallTitle}>Team</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={Bar} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                BarView
                <br />
                <small className={classes.smallTitle}>App</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={Doodle} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Doodle.bob
                <br />
                <small className={classes.smallTitle}>Game</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={Bubble} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Bubble
                <br />
                <small className={classes.smallTitle}>Website</small>
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
