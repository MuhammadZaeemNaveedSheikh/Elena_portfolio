import React from "react";
// import { useDispatch } from "react-redux";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  SimpleGrid,
  Text,
  Container,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { projects } from "../constants/constants";
import logo1 from '../../4.png'
import logo2 from '../../5.png'
import logo3 from '../../6.png'
import logo4 from '../../7.png'
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

const Projects = ({ post, _id }) => {
  const TagList = styled.ul`
    display: flex;
    padding-left: 10px;
  `;
  const Tag = styled.li`
    padding-left: 12px;
    letter-spacing: 0.1rem;
    list-style: none;
    font-size: 0.7rem;
  `;
  const TitleContent = styled.div`
    text-align: center;
    padding: 0.7rem 10px 0 0.7rem;
    margin: 0 15px 0 15px;
    padding-right: 50%;
    width: 100%;
  `;
  const Hr = styled.hr`
    width: 75px;
    height: 4px;
    margin: 20px auto;
    border: 0;
    background: #ff0080;
  `;
  // const dispatch = useDispatch();
  return (
    <>
      <Divider />

      <Center id="projects" py={4}>
        {/* <Text
          textTransform={"uppercase"}
          color={"blue.400"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("blue.50", "blue.900")}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}
        >
        
        </Text> */}
      </Center>
      {/* <Center py={2}>
        <Heading style={{ paddingLeft: 30 }}>
          <Text style={{color:"#33b38d"}}> Education</Text>
        </Heading>
      </Center> */}
      {/* <Hr /> */}
      {/* <Center py={2}>
        <Text
          Text
          color={useColorModeValue("black", "white")}
          fontSize={20}
          style={{ textAlign: "center", padding: " 0 0.5em 0 0.5em " }}
        >
          <i>
          PhD in Computer Science, Estimated 2024
Stevens Institute of Technology

          </i>
        </Text>
        <Text
          Text
          color={useColorModeValue("black", "white")}
          fontSize={20}
          style={{ textAlign: "center", padding: " 0 0.5em 0 0.5em " }}
        >
          <i>
          MS in Information Experience Design, 2020
Pratt Institute


          </i>
        </Text>
        <Text
          Text
          color={useColorModeValue("black", "white")}
          fontSize={20}
          style={{ textAlign: "center", padding: " 0 0.5em 0 0.5em " }}
        >
          <i>
          BS in Business Informatics, 2018
Financial University


          </i>
        </Text>
      </Center> */}
      {/* <Center>
        <i style={{ textAlign: "center" }}>
        PhD in Computer Science, Estimated 2024
Stevens Institute of Technology


        </i>
      </Center>
      <Center>
        <i style={{ textAlign: "center" }}>
        MS in Information Experience Design, 2020
Pratt Institute


        </i>
      </Center>
      <Center>
        <i style={{ textAlign: "center" }}>
        BS in Business Informatics, 2018
Financial University

        </i>
      </Center> */}
      <Hr />
      <Center py={2}>
        <Heading style={{ paddingLeft: 30 }}>
          <Text style={{color:"#33b38d"}}> UI / UX PROJECTS</Text>
        </Heading>
      </Center>
      {/* <Container id="about" > */}
        {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}> */}
        {/* <Center py={6}> */}
          <section className=" main" id="about">
              <div style={{display:'flex',flexDirection:'row',borderRadius:'2%'}}>
                <div style={{textAlign:'center',margin:'auto'}}>
                  <h1 style={{fontSize:'22px',fontWeight:'bolder'}}>Pacify</h1>
                  <h2>Alexa Skill Development</h2>
                  <p style={{fontSize:'15px',marginRight:'13px'}}>Stress management voice interface development and usability testing </p>
                  <a href="https://my.readymag.com/u1228848457/1912950/">Learn More</a>
                  <p style={{color:'gray',fontSize:'13px'}}>#User Research #Prototyping #Voice App</p>
                </div>
                <img src={logo1} alt="" />
              </div>
              <br></br><br></br>
              <div style={{display:'flex',flexDirection:'row',borderRadius:'2%'}}>
              <img src={logo2} alt="" />
                <div style={{textAlign:'center',margin:'auto'}}>
                  <h1 style={{fontSize:'22px',fontWeight:'bolder'}}>Pratt Institute Libraries</h1>
                  <h2>Eye-tracking Research</h2>
                  <p style={{fontSize:'15px',marginLeft:'13px'}}>Enhancing filtering and advanced search navigation for the library website</p>
                  <a href="https://readymag.com/u1228848457/1673859/">Learn More</a>
                  <p style={{color:'gray',fontSize:'13px'}}>#User Testing #Eye Tracking #Usability</p>
                </div>
               
              </div>
              <br></br><br></br>
              <div style={{display:'flex',flexDirection:'row',borderRadius:'2%'}}>
                <div style={{textAlign:'center',margin:'auto'}}>
                  <h1 style={{fontSize:'22px',fontWeight:'bolder'}}>Art21.org</h1>
                  <h2>Digital Analytics Study </h2>
                  <p style={{fontSize:'15px',marginRight:'13px'}}>Optimizing video performance and increasing users’ engagement through digital analytics </p>
                  <a href="https://readymag.com/u1228848457/1671680/">Learn More</a>
                  <p style={{color:'gray',fontSize:'13px'}}>#SEO #Digital Analytics #Data Analysis</p>
                </div>
                <img src={logo3} alt="" />
              </div>
              <br></br><br></br>
              <div style={{display:'flex',flexDirection:'row',borderRadius:'2%'}}>
              <img src={logo4} alt="" />
                <div style={{textAlign:'center',margin:'auto'}}>
                  <h1 style={{fontSize:'22px',fontWeight:'bolder'}}>Alexander Street Press </h1>
                  <h2>Mobile Navigation Project</h2>
                  <p style={{fontSize:'15px',marginLeft:'13px'}}>Creating mobile navigation for educational videocontent platform</p>
                  <a href="https://readymag.com/u1228848457/1582873/">Learn More</a>
                  <p style={{color:'gray',fontSize:'13px'}}>#User Research #Mobile App #Prototyping</p>
                </div>
               
              </div>

          </section>
        {/* </Center> */}
      {/* </Container> */}
    </>
  );
};

export default Projects;
