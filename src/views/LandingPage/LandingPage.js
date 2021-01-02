import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import ReactPlayer from "react-player"
// core components
import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

import TeamSection from "./Sections/TeamSection"


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


import Aina from "assets/img/aina.jpg";
import BadSeed from "assets/img/badSeed.png";
import BadSeedPoster from "assets/img/badSeedPoster.png";
import Bar from "assets/img/Bar.png";
import Bubble from "assets/img/Bubble.png";
import Doodle from "assets/img/Doodle.png";
import SeedForward from "assets/img/SeedForward.png";
import SpikersLogo from "assets/img/spikersLogo.png";
import Stairs from "assets/img/stairs.png";

import PicsWord from "assets/videos/4pics1Word.mp4";
import BadSeedWeb from "assets/videos/BadSeedWeb.mp4";
import BarViewMobile from "assets/videos/BarViewMobile.mp4";
import BarViewWeb from "assets/videos/BarViewWeb.mp4";
import BubbleDesign from "assets/videos/BubbleDesign.mp4";
import BubbleVideo from "assets/videos/BubbleVideo.mp4";
import ChoreoCut from "assets/videos/ChoreoCut.mp4";
import CovidMockup from "assets/videos/CovidMockup.mp4";
import DoodleBobCut from "assets/videos/DoodleBobCut.mp4";
import TabletBubble from "assets/videos/TabletBubble.mp4";


import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { BarChart, Computer, FormatShapes, School } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                <h1 className={classes.title} style={{ color: "white" }}>My Projects</h1>
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
              <div className={classes.section}>
                <div className={classes.container}>
                  <div id="navigation-pills">
                    <div className={classes.title}>
                      <h3>My Projects</h3>
                    </div>
                    <div className={classes.title}>
                    </div>
                    <GridContainer>
                      <GridItem>
                        <NavPills
                          color="rose"
                          horizontal={{
                            tabsGrid: { xs: 12, sm: 4, md: 2 },
                            contentGrid: { xs: 12, sm: 8, md: 16 }
                          }}
                          tabs={[
                            {
                              tabButton: "Software",
                              tabIcon: Computer,
                              tabContent: (
                                <GridContainer>
                                  <GridItem>
                                    <NavPills
                                      color="info"
                                      tabs={[
                                        {
                                          tabButton: "Some Software With Interfaces",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>Some Software With Interfaces</h2>
                                              <GridItem>
                                                <h4>Online Pictionary: Doodle.bob</h4>
                                                <video controls type="video/mp4" src={DoodleBobCut} width="540"></video>
                                                <p>As an interactive game, the project focused on how we can efficiently send drawing strokes over the web. Its sleek design allowed users to trade off who gets to be the artist for a hidden word, allowing the other players to guess with added hints about the hidden word. Depending on how long it takes for the users to guess, people are awarded a certain amount of points.</p>
                                                <a href="https://github.com/UB-CSE/course-project-doodlejockeys">https://github.com/UB-CSE/course-project-doodlejockeys</a>
                                                <p></p>
                                                <a href="http://doodle-bob.herokuapp.com/">http://doodle-bob.herokuapp.com/</a>
                                              </GridItem>
                                              <h4 style={{ color: "white" }}>Space</h4>
                                              <GridItem>
                                                <h4>Social Media App: Bubble</h4>
                                                <video controls type="video/mp4" src={BubbleVideo} width="540"></video>
                                                <p>This project hightlighted different oportunities for applying human computer interaction principles. One of my favorite features of the project was the avatar changing page. It was also an opportunity to apply more accessibility features, even giving the option for the site to have a Spanish option.</p>
                                                <a href="https://github.com/CSE410HCI/the-tree-kings-web">https://github.com/CSE410HCI/the-tree-kings-web</a>
                                                <p></p>
                                                <a href="http://stark.cse.buffalo.edu/cse410/treekings/master/#/">http://stark.cse.buffalo.edu/cse410/treekings/master/#/</a>
                                              </GridItem>
                                              <h4 style={{ color: "white" }}>Space</h4>
                                              <GridItem>
                                                <h4>Ancestry of dancers and their training: Choreographic Lineage</h4>
                                                <video controls type="video/mp4" src={ChoreoCut} width="540"></video>
                                                <p>The dancer world is so clearly shaped by who trained whom and where. For this reason, this current project focuses on tracking the lineage of each dancer in relation to all the dancers from whom they have learned,  in whose work they have danced, and on whose style they have modeled their own practices. The data visualization centered project works to allow users to add to and explore the lineages of their own inspirations.</p>
                                                <a href="http://stark.cse.buffalo.edu/choreographiclineage/lineage_index.php#">http://stark.cse.buffalo.edu/choreographiclineage/lineage_index.php#</a>
                                              </GridItem>
                                              <h4 style={{ color: "white" }}>Space</h4>
                                              <GridItem>
                                                <h4>Real Time Online Game: Four Pictures One Word</h4>
                                                <video controls type="video/mp4" src={PicsWord} width="540" ></video>
                                                <p>Building a server, such that a game could be played in real time was a challenge, but one that introduced to me to sockets. The project involved building a game that multiple people could play at the same time with some sort of speed component. It was one of my first experiences with fully developing the front end.</p>
                                                <a href="https://github.com/kevinlob/Final-Project">https://github.com/kevinlob/Final-Project</a>
                                              </GridItem>
                                              <h4 style={{ color: "white" }}>Space</h4>
                                              <GridItem>
                                                <h4>Artificial Intelligence Autonomous Scheduler: BadSeed</h4>
                                                <img src={BadSeed} width="540"></img>
                                                <p>While this project was an aspect of the research I performed in 2020, it was highly software focused. I built my own tensorforce environment, such that I could autonomously schedule the measuring of samples based on their current clarity. The reinforcement learning paradigm had the goal of being made into an interactive artificial intelligence interface, but due to the length of the internship, the API was not able to be hooked up to the GUI. Please see the research section for further information!</p>
                                                <a href="https://github.com/claracoo/bad_seed">https://github.com/claracoo/bad_seed</a>
                                              </GridItem>
                                              <h4 style={{ color: "white" }}>Space</h4>
                                            </GridContainer>
                                          )
                                        },
                                        {
                                          tabButton: "Some Software Without Interfaces",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>Some Software Without Interfaces</h2>
                                              <GridItem>
                                                <h4>Semantic and Syntactic Language Processor: Riddle Solver</h4>
                                                <p>The project called on many resources of my understanding of computational linguistics. It became a demonstration in english morphology. Using nltk, I built a large enough grammar, such that my processor could talk in information and answer questions about the text based on a set of prompt types.</p>
                                                <a href="https://colab.research.google.com/drive/1RWiqcrS2t7inSCGhM1WImkuPhigcLS_T?authuser=2#scrollTo=AAYvliAISoKA">https://colab.research.google.com/drive/1RWiqcrS2t7inSCGhM1WImkuPhigcLS_T?authuser=2#scrollTo=AAYvliAISoKA</a>
                                              </GridItem>
                                              <h4 style={{ color: "white" }}>Space</h4>
                                              <GridItem>
                                                <h4>Beamline Simulator: Disaster Forcaster</h4>
                                                <p>This project allowed me to simulate beamline data, building a small number generator to highlight different parameters at the beamline and which of those parameter sequences could cause a halt in the synchrotron. From this simulator, I built a supervised learning paradigm able to identify the likelihood that the beamline would overheat based on the initial parameters, preventing a full halt of the facility before the "disaster" takes place.</p>
                                                <a href="https://colab.research.google.com/drive/1SZwRkp3Iiv_-AXydyJ_OuyirtdwSBv9n?usp=sharing">https://colab.research.google.com/drive/1SZwRkp3Iiv_-AXydyJ_OuyirtdwSBv9n?usp=sharing"</a>
                                              </GridItem>
                                              <h4 style={{ color: "white" }}>Space</h4>
                                              <GridItem>
                                                <h4>Handwriting Recognition</h4>
                                                <p>While this project was an aspect of the research I performed in 2020, it was highly software focused. I built my own tensorforce environment, such that I could autonomously schedule the measuring of samples based on their current clarity. The reinforcement learning paradigm had the goal of being made into an interactive artificial intelligence interface, but due to the length of the internship, the API was not able to be hooked up to the GUI. Please see the research section for further information!</p>
                                                <a href="https://colab.research.google.com/drive/1NL5XDs0E-hfzSdLdCvfZ22MpyyztTXF1?usp=sharing">https://colab.research.google.com/drive/1NL5XDs0E-hfzSdLdCvfZ22MpyyztTXF1?usp=sharing</a>
                                              </GridItem>
                                              <h4 style={{ color: "white" }}>Space</h4>
                                              <GridItem>
                                                <h4>An introduction to Natural Language Processing: Eliza</h4>
                                                <p>In cognitive science, one of the major contributing fields is the overlap between language and how the computer interacts with that language. As an introduction to computationnal linguistics, I build an Eliza program able to act as a mental health bot. As you can see from the progress from this project to a full riddle solver, I have made progress in my language processing.</p>
                                                <a href="https://colab.research.google.com/drive/1rSuMJBOy15YavN07_HRPCEFgOddOlcg0?usp=sharing">https://colab.research.google.com/drive/1rSuMJBOy15YavN07_HRPCEFgOddOlcg0?usp=sharing</a>
                                              </GridItem>
                                              <h4 style={{ color: "white" }}>Space</h4>
                                            </GridContainer>
                                          )
                                        },
                                        {
                                          tabButton: "Other Software Work",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>Other Software Work</h2>
                                              <GridItem>
                                                <p>Please note that the code itself is not included in this section because it is coursework. While I am very proud of these projects, placing these homeworks on the internet is a breach of the academic integrity policy.</p>
                                              </GridItem>
                                              <GridItem>
                                                <h4>Multipool Dynamic Memory Allocator</h4>
                                                <p>This was one of my favorite projects in all of college. I built from scratch the standard C functions: malloc(), calloc(), realloc(), and free(). Dealing with the operating system directly, I had to properly manage the memory, such that any program could use my software to replace the C standard. My program was robust enough to support Emacs, Vim, and even Firefox!</p>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>Genetic Algorithm</h4>
                                                <p>Using linear and polynnomial regressions, I built a genetic algorithm that was meant to mimic the mating and survival rates of salamanders under various environmental and adaptive trait conditions. The project gave me experience applying my biotech background to something grounded in computer science.</p>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>Route Planning System</h4>
                                                <p>By taking data from an API on tax entries, I was able to reconstruct the entire map layout of Buffalo, using another mapping API to overlay satilite data. From the map constructed, I built a graph system that allowed me to navigate the map, finding the shortest path from point A to point B. I was able to employ both breadth first and depth first search algorithms to highlight the efficiency and drawbacks of each algorithm.</p>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>Finding Closest Planetary Bodies</h4>
                                                <p>This was my first big project using MIPS assembly code. We took in data of different planetary bodies and where they would be depending on the time of year. Utilizing these resources, we had to take in a particular time and implement a classic divide and conquer algorithm to find the two closest planets.</p>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>Rhyming Dictionary</h4>
                                                <p>This project split a dictionary's words into the sounds of each syllable with the appropriate emphasis marked. From this reconstruction, I was able to build a rhyming dictionary that took a given word and found all of the words that rhymed with the input. I was able to parameterize the minimum number of syllables that needed to rhyme, such that someone could fit the programs to their needs; it even checked the extent to which two given words rhymed.</p>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                            </GridContainer>
                                          )
                                        }
                                      ]}
                                    />
                                  </GridItem>
                                </GridContainer>
                              )
                            },
                            {
                              tabButton: "Research",
                              tabIcon: BarChart,
                              tabContent: (
                                <GridContainer>
                                  <GridItem>
                                    <NavPills
                                      color="info"
                                      tabs={[
                                        {
                                          tabButton: "Brookhaven National Laboratory",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>Brookhaven National Laboratory</h2>
                                              <GridItem>
                                                <h4>Bad seed: Gamifying intelligent autonomous scheduling using human reward tactics</h4>
                                                <p>In beamline science, there is a lot of data. Some of the data is useable, while others are not. We take extra measurements of all of these data points such that we can figure out what data will be relevant to our scientific goals. As of now, we iteratively measure all of the samples present, but this only makes sense if all of these samples required an equal amount of measuring, so this paper discusses how we can use reinforcement learning to autonomously schedule when to measure which samples.</p>
                                                <a href="https://drive.google.com/file/d/1FUCtx72FnDm6gyakxc_htkzvooM9sN-m/view?usp=sharing">https://drive.google.com/file/d/1FUCtx72FnDm6gyakxc_htkzvooM9sN-m/view?usp=sharing</a>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>Bad seed: the Poster</h4>
                                                <img src={BadSeedPoster} width="540"></img>
                                                <p>The project used an A2C agent to learn the proper scheduling requirements. In the experiment, I used different human reinforcement learning schedules to see how it would affect the learning of this agent in a machine reinforcement learning environment. Similar to humans, the variable ratio schedule produced a steeper learning curve that the fixed ratio schedule.</p>
                                                <a href="https://drive.google.com/file/d/1CsBQ0MGqiX8qP-ZjDgeAfuaB1RT17KMp/view?usp=sharing">https://drive.google.com/file/d/1CsBQ0MGqiX8qP-ZjDgeAfuaB1RT17KMp/view?usp=sharing</a>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>Bad Seed: Interface Design</h4>
                                                <video controls type="video/mp4" src={BadSeedWeb} width="540"></video>
                                                <p>Part of the reason we want to autonomously schedule measurements is to reduce the amount of time a scientist has to spend at the beamtime. That being said, it would save significant time if a scientist could assign an assistant to make sure that the sample measurement is happening smoothly. An assistant however, may not have the same depth of knowledge about the process. A powerful tool then could be an interface that presents the underlying science in a way that is human understandable even if you have not been in the field for 10 years.</p>
                                                <a href="https://www.figma.com/file/zcFOWq9VgoGqo0tZ4Gb0ns/SULI_Design?node-id=0%3A1">https://www.figma.com/file/zcFOWq9VgoGqo0tZ4Gb0ns/SULI_Design?node-id=0%3A1</a>
                                              </GridItem>
                                            </GridContainer>
                                          )
                                        },
                                        {
                                          tabButton: "University at Buffalo",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>University at Buffalo</h2>
                                              <GridItem>
                                                <h4>Student Safety in Student Union Staircase</h4>
                                                <p>One of the most important kids of research that we can do is research that promotes safety. In one of the stair cases at school, we have an oportunity to promote student safety by updating the current staits to be up to code.</p>
                                                <a href="https://drive.google.com/file/d/1rc5-DvLSaGC1VbDAF8gGDRgE_4uDGwf8/view?usp=sharing">https://drive.google.com/file/d/1rc5-DvLSaGC1VbDAF8gGDRgE_4uDGwf8/view?usp=sharing</a>
                                              </GridItem>
                                              <GridItem>
                                                <img src={Stairs} width="540"></img>
                                                <h4>Student Safety: the Poster</h4>
                                                <p>The project used naturalistic observation, interview processes and archival research to determine the extend to which the student body is actually affected both in terms of number of students affected and the profundity of the effect noticeable to students. From there, I cross referenced the data with the safety codes for New York and the surrounding states. It is important that our campus is accessible to everyone, meaning that replacing and/or widening this structure could have valuable impacts.</p>
                                                <a href="https://drive.google.com/file/d/1RiflMVgac7Kc9kGQwdFtSgBbPG0fUahH/view?usp=sharing">https://drive.google.com/file/d/1RiflMVgac7Kc9kGQwdFtSgBbPG0fUahH/view?usp=sharing</a>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>Psycholinguistics Laboratory</h4>
                                                <p>I was able to work under the director of cognitive science, Dr. Gail Mauner, who specialized in psycholinguistics. In her lab, I worked on running the lab experiments for Dr. Mauner and her graduate students, programming the eye tracker, running participants through the studies, and doing data analysis and debreifing drafts. I was able to contribute to her research by helping with the methodology and corpora research on problem solving in language ambiguity.</p>
                                                <a href="https://www.researchgate.net/publication/320067051_About_sharing_and_commitment_the_retrieval_of_biased_and_balanced_irregular_polysemes">https://www.researchgate.net/publication/320067051_About_sharing_and_commitment_the_retrieval_of_biased_and_balanced_irregular_polysemes</a>
                                              </GridItem>
                                            </GridContainer>
                                          )
                                        }
                                      ]}
                                    />
                                  </GridItem>
                                </GridContainer>
                              )
                            },
                            {
                              tabButton: "Design",
                              tabIcon: FormatShapes,
                              tabContent: (
                                <GridContainer>
                                  <GridItem>
                                    <NavPills
                                      color="info"
                                      tabs={[
                                        {
                                          tabButton: "Web Interfaces",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>Web Interfaces</h2>
                                              <GridItem>
                                                <h4>Covid-19 Problem Solving: A tracker app to map possible breakouts</h4>
                                                <video controls type="video/mp4" src={CovidMockup} width="540" ></video>
                                                <p>Our project is a means of taking machine learning and applying it to finding probable COVID hotspots before they flare up. We hope that from this predicted data, we will be able to provide enough information to government officials that they will be able to take actions to prevent or mitigate the predicted effects. By taking in traveling data we propose that a graphical neural net will learn embeddings for nodes and edges to use as input to Feed Forward Network (FFN). The FFN will provide predictions with which we can display in a heatmap of the US. From the input data, we will use probabilistic heatmaps to represent not only the hotspot in question but the surrounding affected areas.</p>
                                                <a href="https://docs.google.com/presentation/d/1yCq-E_rQObpADF0XdIM5oE5EFMFXQTKmhn0bKLKmbds/edit?usp=sharing">https://docs.google.com/presentation/d/1yCq-E_rQObpADF0XdIM5oE5EFMFXQTKmhn0bKLKmbds/edit?usp=sharing</a>
                                                <p></p>
                                                <a href="https://www.figma.com/file/sLTMH8Ey4AcAqjwaaLtEsh/COVID-ML-Web-App">https://www.figma.com/file/sLTMH8Ey4AcAqjwaaLtEsh/COVID-ML-Web-App</a>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>Social Media App: Bubble</h4>
                                                <video controls type="video/mp4" src={BubbleDesign} width="540" ></video>
                                                <p>The original vision for the project was to be entirely location based, allowing users to meet new people that matched their various interests and were also close by. The exploratory nature of the application would mean that people who overlap from around the world even for a minute have a chance of finding one another.</p>
                                                <a href="https://www.figma.com/file/isBje8sf5qCWkLlievBEP0/Web">https://www.figma.com/file/isBje8sf5qCWkLlievBEP0/Web</a>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>BarView: Bands and Djs</h4>
                                                <video controls type="video/mp4" src={BarViewWeb} width="540" ></video>
                                                <p>BarView is a fantastic application that allows people to connect over the idea that there is some locale where they can enjoy a common interest, be that food, music, art, or just having a good time. The sweeping database of entertainment oportunities gives users the chance to see what people are talking about and follow their favorite places, and in this interface, musicians.</p>
                                                <a href="https://www.figma.com/file/OOmUKeyGhFK9FACXHxz4Ko/BarView-Web">https://www.figma.com/file/OOmUKeyGhFK9FACXHxz4Ko/BarView-Web</a>
                                              </GridItem>
                                            </GridContainer>
                                          )
                                        },
                                        {
                                          tabButton: "Mobile Interfaces",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>Mobile Interfaces</h2>
                                              <GridItem>
                                                <h4>Social Media App: Bubble</h4>
                                                <video controls type="video/mp4" src={TabletBubble} width="320" ></video>
                                                <p>Since the application revolves around the location data of users, explorative users can be out doing engaging in adventures and meet people during the fun. The mobility of the app is an added feature that could make the application even more interesting, allowing users to descend on the same point to gain new or familiar social interaction. The sleeker mobile design is one that highlights the simplicity of human centered design.</p>
                                                <a href="https://www.figma.com/file/RgWtwz64V26AekZaYQCiUk/Tablet">https://www.figma.com/file/RgWtwz64V26AekZaYQCiUk/Tablet</a>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>BarView: Bands and Djs</h4>
                                                <video controls type="video/mp4" src={BarViewMobile} width="320" ></video>
                                                <p>The mobility of this application also serves to enhance the experience of the user. This application also cares about distance, meaning that users can see their favorite locales that they reside near and can discover new ones, no matter where they are, constantly using their current location to learn. It would also make the communication between the bands and their fans more streamlined, allowing fans to get details about shows on the go, asking questions as they approach the lively atmosphere.</p>
                                                <a href="https://www.figma.com/file/jxCSyPB7rzkAWTvEMjGxTL/BarView">https://www.figma.com/file/jxCSyPB7rzkAWTvEMjGxTL/BarView</a>
                                              </GridItem>
                                            </GridContainer>
                                          )
                                        },
                                        {
                                          tabButton: "Logo Designs",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>Logo Designs</h2>
                                              <GridItem>
                                                <TeamSection></TeamSection>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                            </GridContainer>
                                          )
                                        }
                                      ]}
                                    />
                                  </GridItem>
                                </GridContainer>
                              )
                            },
                            {
                              tabButton: "Teaching",
                              tabIcon: School,
                              tabContent: (
                                <GridContainer>
                                  <GridItem>
                                    <NavPills
                                      color="info"
                                      tabs={[
                                        {
                                          tabButton: "Computer Science",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>Computer Science</h2>
                                              <GridItem>
                                                <h4>Tutoring Program for Girls in STEM: Introduction to Computer Science</h4>
                                                <img src={Aina} width="250"></img>
                                                <p>I started a program over the summer to engage girls in computer science, such as Aisha in the above picture. As an underrepresented demographic in the STEM field, it is important to me to help other girls feel accepted in a predominantly male dominated field. In this program, I introduced students to introductory coding practices and terminology, using python as a base language and ending with some javascript experience in web development.</p>
                                                <p>Here are a series of the structured materials that I designed for the course, not including the actual coding that we did together:</p>
                                                <p>Functions and Datatypes:</p>
                                                <a href="https://docs.google.com/presentation/d/1rsW8npQlXsH0EaCTZWXs0Ho4YHIIk9BYZ0yWVnWkDBk/edit?usp=sharing">https://docs.google.com/presentation/d/1rsW8npQlXsH0EaCTZWXs0Ho4YHIIk9BYZ0yWVnWkDBk/edit?usp=sharing</a>
                                                <p>Breaking down "The Function":</p>
                                                <a href="https://docs.google.com/presentation/d/1QvTWzMLFHyHTHXopdK5UDXIipF3OYCuO91JKMTMw278/edit?usp=sharing">https://docs.google.com/presentation/d/1QvTWzMLFHyHTHXopdK5UDXIipF3OYCuO91JKMTMw278/edit?usp=sharing</a>
                                                <p>Coding with String Types:</p>
                                                <a href="https://docs.google.com/presentation/d/1HffAJBqs4HJfEIex5E0KzSAMgh3OyWsa-wZWlZfrnPg/edit?usp=sharing">https://docs.google.com/presentation/d/1HffAJBqs4HJfEIex5E0KzSAMgh3OyWsa-wZWlZfrnPg/edit?usp=sharing</a>
                                                <p>Coding with Numeric Types:</p>
                                                <a href="https://docs.google.com/presentation/d/1gkwonCKsjlnB0h-jhvQoSlE5Fu2t3pgEt2T_Td2nrFw/edit?usp=sharing">https://docs.google.com/presentation/d/1gkwonCKsjlnB0h-jhvQoSlE5Fu2t3pgEt2T_Td2nrFw/edit?usp=sharing</a>
                                                <p>Introduction to Control Flow:</p>
                                                <a href="https://docs.google.com/presentation/d/1znZU3vw2FZ8iFjllaTfUJaOWL_dtLGyvtw618OmilTI/edit?usp=sharing">https://docs.google.com/presentation/d/1znZU3vw2FZ8iFjllaTfUJaOWL_dtLGyvtw618OmilTI/edit?usp=sharing</a>
                                                <p>Conditional Control Flow:</p>
                                                <a href="https://docs.google.com/presentation/d/1_bXtomj1Oa9BOy3behH6PieEPXtwo0tico7z0j1Q8xg/edit?usp=sharing">https://docs.google.com/presentation/d/1_bXtomj1Oa9BOy3behH6PieEPXtwo0tico7z0j1Q8xg/edit?usp=sharing</a>
                                                <p>Loops:</p>
                                                <a href="https://docs.google.com/presentation/d/1AtrZYKhPsTkhz3IpW-zg2RIfb7Q5OOUfh0atym_7VgM/edit?usp=sharing">https://docs.google.com/presentation/d/1AtrZYKhPsTkhz3IpW-zg2RIfb7Q5OOUfh0atym_7VgM/edit?usp=sharing</a>
                                                <p>Dictionaries:</p>
                                                <a href="https://docs.google.com/presentation/d/1jQlOErvmfK5sdbgDjK4GQtjMpZVBS-x4FX-1rhDkiIU/edit?usp=sharing">https://docs.google.com/presentation/d/1jQlOErvmfK5sdbgDjK4GQtjMpZVBS-x4FX-1rhDkiIU/edit?usp=sharing</a>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>CSE370: Applied Human Computer Interaction and Design</h4>
                                                <p>Working under Professor Alan Hunt, I lead students in how to apply human centered design principles to software development. I facilitate their learning of various IDE's, the React and React Native languages, Figma, a prototyping tool, and how to properly engage in good development practices, such as using scrum boards along with github. Through various live demonstrations, I go through how to use these tools and how it might be relevant to their project, which involves building an entire social media application.</p>
                                                <p>Project Document:</p>
                                                <a href="https://docs.google.com/document/d/1vuFbcy7al05_ktvuSeFYOk4tVNdBGK6GG8oVrqvA89w/edit?usp=sharing">https://docs.google.com/document/d/1vuFbcy7al05_ktvuSeFYOk4tVNdBGK6GG8oVrqvA89w/edit?usp=sharing</a>
                                                <p>Course Description:</p>
                                                <a href="https://catalog.buffalo.edu/courses/?abbr=CSE&num=370">https://catalog.buffalo.edu/courses/?abbr=CSE&num=370</a>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>CSE220: Systems Programming</h4>
                                                <p>I work for Dr. Ethan Blanton. In this class, we focus on the basics of systems programming, learning about C, pointers, memory management, number representations, and parallelism. I run multiple laboratory sections that teach students how to use tools such as GDB, makefiles, github and other necessary resources for the class. I also provide help on their multiple projects and moderate their lectures.</p>
                                                <p>Course Website:</p>
                                                <a href="https://cse.buffalo.edu/~eblanton/course/cse220/">https://cse.buffalo.edu/~eblanton/course/cse220/</a>
                                                <p>Course Description:</p>
                                                <a href="https://catalog.buffalo.edu/courses/?abbr=CSE&num=220">https://catalog.buffalo.edu/courses/?abbr=CSE&num=220</a>
                                              </GridItem>
                                              <p style={{ color: "white" }}>Space</p>
                                              <GridItem>
                                                <h4>DivTech Mini Lessons: Artificial Intelligence</h4>
                                                <p>In my club, DivTech, we give teach senior level topics to underclassmen, so that they can start to gauge what classes they want to take as upperclassmen. This approach also gives them a crash course in different fields, so that they can be prepared for interview questions and other high level learning experiences. The first session that I taught devled into clustering methods in unsupervised learning and the second session discussed reinforcement learning agent algorithms. Both sessions used live coding demonstrations to explain the real results that are outlined in the presentations.</p>
                                                <p>Session One: Clustering</p>
                                                <a href="https://docs.google.com/presentation/d/1dsU0SrFnysbvWFYQzSSXlwrm1dLDfCm4RfyPB_yi9YE/edit?usp=sharing">https://docs.google.com/presentation/d/1dsU0SrFnysbvWFYQzSSXlwrm1dLDfCm4RfyPB_yi9YE/edit?usp=sharing</a>
                                                <p>Session Two: Reinforcement Learning Algorithms</p>
                                                <a href="hhttps://docs.google.com/presentation/d/1v_MUhMCpUiUvinhcVt6M0gFtTT3UrMqaX9MBKaGYk1o/edit?usp=sharing">hhttps://docs.google.com/presentation/d/1v_MUhMCpUiUvinhcVt6M0gFtTT3UrMqaX9MBKaGYk1o/edit?usp=sharing</a>
                                              </GridItem>
                                            </GridContainer>
                                          )
                                        },
                                        {
                                          tabButton: "Psychology",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>Psychology</h2>
                                              <GridItem>
                                                <h4>Undergraduate Psychology Association</h4>
                                                <p>In this club, we function as a club for anyone interested in psychology regardless of their major. Here, we lead non acadmemic events that sneak in a bit about how psychology enters in our daily lives. For example, when we lead a game night, we included the psychology of games, gamer types, and why we enjoy them. We also leads professional development events in the psychology field. For example, I ran a session on the different facets of psychology at UB and the connection to the fields that are outside of psychology but still relevant to the field, just as how human computer interaction is a relevant overlap for cognitive psychology.</p>
                                                <p>Facets of Psychology</p>
                                                <a href="https://docs.google.com/presentation/d/19M2Rm7Zn0Uy3UT_slenWZYpS5l-Dcal7N9eHL_VrpU4/edit?usp=sharing">https://docs.google.com/presentation/d/19M2Rm7Zn0Uy3UT_slenWZYpS5l-Dcal7N9eHL_VrpU4/edit?usp=sharing</a>
                                                <p>Psychology in Music and Memory</p>
                                                <a href="https://docs.google.com/presentation/d/1TIwJo21vJ3LJclGqmnWFAg1ACrJkPRDAvnYz5CrrfhE/edit?usp=sharing">https://docs.google.com/presentation/d/1TIwJo21vJ3LJclGqmnWFAg1ACrJkPRDAvnYz5CrrfhE/edit?usp=sharing</a>
                                              </GridItem>
                                              <GridItem>
                                                <h4>Cognitive Science Mentoring</h4>
                                                <p>As a freshman int he cognitive science major, most take PSY101. For this reason, as mentors, we teach condensed lessons the material both for students taking the class preparing for exams as well as those students who took PSY101 in high school in advanced placement courses who are in need of review before they take more advanced topics. I have included some of the study materials I constructed for my mentees. Through these sessions students not only learn about the material presented in the course but we go through scenarios that force them to apply what they have learned to their daily lives.</p>
                                                <a href="https://quizlet.com/ccook2017/folders/psychology?x=1xqt&i=1f6pb">https://quizlet.com/ccook2017/folders/psychology?x=1xqt&i=1f6pb</a>
                                              </GridItem>
                                            </GridContainer>
                                          )
                                        },
                                        {
                                          tabButton: "Biotechnology",
                                          tabContent: (
                                            <GridContainer>
                                              <h2><span style={{ color: "white" }}>b</span>Biotechnology</h2>
                                              <GridItem>
                                                <h4>Boston Leadership Institute</h4>
                                                <p>This summer program for high school students attracts people from all around the world. I had students for Malaysia, Somalia, China, Luxembourg, Argentina, and many other counntries coming to participate in my program. As the head TA, I taught units on cell circuits and lead labs on bacterial transformation, CRISPR, Plasmid Extraction, PCR, Ion Exchange, ELISA, and Protein Exchange.</p>
                                                <p>Program Website:</p>
                                                <a href="https://www.bostonleadershipinstitute.com/">https://www.bostonleadershipinstitute.com/</a>
                                                <p>Korean Documentary about American Summer Programs:</p>
                                                <ReactPlayer url="https://www.youtube.com/watch?v=oJewRZaTQtg" />
                                                <p>We were lucky enough to bbe featured as a prime example of an American science summer program. The film directors were here for a week, and they explained their passion for understanding how science progresses in the United States. We were able to show them the advanced laboratories we perform and the beautiful technology to which we have access. Through their video, we understand the impact that we have on the students and that the students have on the world.</p>
                                              </GridItem>
                                            </GridContainer>
                                          )
                                        }
                                      ]}
                                    />
                                  </GridItem>
                                </GridContainer>
                              )
                            }
                          ]}
                        />
                      </GridItem>
                    </GridContainer>
                  </div>
                </div>
              </div>
            </GridContainer>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
