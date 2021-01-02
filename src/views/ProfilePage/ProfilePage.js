import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

// import profile from "assets/img/faces/christian.jpg";

// import studio1 from "assets/img/examples/studio-1.jpg";
// import studio2 from "assets/img/examples/studio-2.jpg";
// import studio3 from "assets/img/examples/studio-3.jpg";
// import studio4 from "assets/img/examples/studio-4.jpg";
// import studio5 from "assets/img/examples/studio-5.jpg";
// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";
// import Resume from "./Resume.png"

// import { Page, Text, View, Document, StyleSheet } from 'react-pdf';
// import Resume360 from './Resume360.pdf';

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  // const MyDocument = () => (
  //   <Document file={Resume360}>
  //     <Page size="A4" >
  //       {/* <View style={styles.section}>
  //         <Text>Section #1</Text>
  //       </View>
  //       <View style={styles.section}>
  //         <Text>Section #2</Text>
  //       </View> */}
  //     </Page>
  //   </Document>);
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  // function onDocumentLoadSuccess() {
  //   setNumPages(1);
  // }

  return (
    <div>
      <Header
        color="transparent"
        brand="Clara Cook"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small image={require("assets/img/bg3.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title} style={{ color: "white" }}>My Resume</h1>
                {/* <h3 className={classes.subtitle}>
                  A passion for the intersection of humans and technology.
                </h3> */}
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              {/* <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}> */}
              {/* <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem> */}
              <GridItem>
                {/* <MyDocument /> */}
                {/* <Document
                  file={Resume}
                >
                  <Page pageNumber={1} />
                </Document> */}
              </GridItem>
              <GridItem>
                <div style={{ textAlign: "center" }}>
                  <h1>Clara Cook</h1>
                  <h4>Cell: 914-330-6229</h4>
                  <h4>Email: claracook99@gmail.com</h4>
                  <h4> LinkedIn: <a href="https://www.linkedin.com/in/claracook/">https://www.linkedin.com/in/claracook/</a></h4>
                  <h4> Website: <a href="claracook.com/projects">claracook.com/projects</a></h4>
                </div>
              </GridItem>
              <GridItem>
                <div>
                  <h3>Education</h3>
                  <b>Bachelor’s in Computer Science and Cognitive Science</b>
                  <p>University at Buffalo, The State University of New York</p>
                  <p>Minors: Spanish and Psychology</p>
                  <p>Focus: Higher Level Mental Processing</p>
                  <p>Expected Graduation: May 2021</p>
                  <b>3.98 GPA</b>
                </div>
              </GridItem>
              <h4></h4>
              <GridItem>
                <h3>Experience</h3>
                <div>
                  <p><span><b>Artificial Intelligence Intern</b></span> (2020 - Present)</p>
                  <p>Brookhaven National Laboratory <span><i> Daniel Olds, Head of PDF Beamline</i></span> </p>
                  <ul>
                    <li>Built TensorForce custom environment for reinforcement learning paradigm for the autonomous scheduling of beamline data by applying human reinforcement schedules to machine learning</li>
                    <li>Designed and prototyped interface to track decision making in a machine learning system based on the parameterized version of environment, allowing researchers to control hyperparameters in a GUI</li>
                    <li>Collaborated on COVID-19 machine learning project proposal for a graphical neural net and designed interface</li>
                  </ul>
                </div>
                <div>
                  <p><span><b>UX/UI Software Engineering Intern </b></span> (2019 - 2020)</p>
                  <p>Neural Cloud Solutions <span><i> Daniel Lundquist, CEO, CIO</i></span></p>
                  <ul>
                    <li>Drew website design ideas for social media platform related applications including organization of design components and executed designs in React and React Native</li>
                    <li>Updated working websites for optimization of client consumption by using psychological principles</li>
                  </ul>
                </div>
                <div>
                  <p><span><b>Research Assistant </b></span> (2017 - 2019)</p>
                  <p>Psycholinguistics Department, University at Buffalo <span><i> Gail Mauner, Director of Cognitive Science </i></span> </p>
                  <ul>
                    <li>Worked with doctoral students by programming eye tracker device software for retina mapping, analyzing data, and preparing experiment with ePrime and Praat software</li>
                    <li>Enacted video series using ambiguous noun/verbs and garden path sentences for preliterate cognitive development with child directed speech</li>
                    <li>•	Wrote debriefing papers for sound and video clip norming studies that verified ambiguous noun/verbs’ saliency</li>
                  </ul>
                </div>
                <div>
                  <p><span><b>Chief Biotechnology TA  </b></span> (2017 - 2019)</p>
                  <p>Boston Leadership Institute <span><i>Jim Dixon, Presidential Distinguished Teacher  </i></span> </p>
                  <ul>
                    <li>Lead students in advanced high school and early college level laboratories, including how to use biotechnology like CRISPR, Mitochondrial Extraction, and Protein Barcoding</li>
                    <li>Directed and oversaw multiple TA’s projects and schedules by organizing lab preparation and lesson plans</li>
                  </ul>
                </div>
              </GridItem>
              <GridItem>
                <div>
                  <h3>Honors and Awards</h3>
                  <p><span><b>Phi Beta Kappa  </b></span> (2020 - Present)</p>
                  <p><span><b>Tau Beta Pi  </b></span> (2020 - Present)</p>
                  <p><span><b>Sigma Delta Pi  </b></span> (2020 - Present)</p>
                  <p><span><b>Grace W. Capen Award  </b></span> 2019</p>
                  <p><span><b>Honor's College  </b></span> (2017 - Present)</p>
                  <p><span><b>Provost Scholarship  </b></span> (2017 - Present)</p>
                  <p><span><b>Dean's List  </b></span> (2017 - Present)</p>
                </div>
              </GridItem>
              <GridItem>
                <div>
                  <h3>Skills and Languages</h3>
                  <p><span><b>Programming Languages:  </b></span> React, Python, Scala, JavaScript, HTML, mySQL, SQL, SQLite, C, Node.JS, React Native, Php, Java, vis.JS, Node.JS, CSS</p>
                  <p><span><b>Additional Software:  </b></span> ePrime, Praat, Tensorforce, Tensor Board, Figma, Adobe Premier, Microsoft Office, InVision, Photoshop</p>
                  <p><span><b>Additional Skills: </b></span> Advanced Spanish, Statistical Analysis, Molecular Biology lab techniques, DNA, Plasmid, and Mitochondrial extraction, CRISPR</p>
                </div>
              </GridItem>
              <GridItem>
                <h3>Professional Affiliations</h3>
                <p><span><b>Women in Science and Engineering </b></span> <span><i>Member </i></span> (2019 - Present)</p>
                <p><span><b>DivTech </b></span> <span><i>Lecturer </i></span> (2019 - Present)</p>
                <p><span><b>Undergraduate Psychology Association</b></span> <span><i>Treasurer </i></span> (2018 - Present)</p>
                <p><span><b>Honors College</b></span> <span><i>Mentor </i></span> (2017 - Present)</p>
              </GridItem>

              {/* <GridItem>
                <img
                  alt="..."
                  src={Resume}
                  className={navImageClasses}

                />,
                </GridItem> */}
            </GridContainer>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
