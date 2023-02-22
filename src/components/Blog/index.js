import { Center, Button, Text,useColorModeValue } from "@chakra-ui/react";
import React from "react";
import "./styles.css";
import {blogPosts} from "./constants/constants";
const Blog = () => {
  return (<>
  <Center id="projects" py={4}>
        <Text
          textTransform={"uppercase"}
          color={"blue.400"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("blue.50", "blue.900")}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}
        >
          My Publications
        </Text>
      </Center>
    <Center id="blog" py={4}>
      
      <section className="reveal container-fluid">
          <div>
            <h6>Korshakova, E., Marsh, J. K., & Kleinberg, S. (2022). Health Information Sourcing and Health Knowledge Quality: Repeated Cross-sectional Survey. JMIR Formative Research, 6(9), e39274. <a href="https://formative.jmir.org/2022/9/e39274/PDF" style={{color:'blue'}}>PDF</a></h6><br></br>
            <h6>Korshakova, E., Bae, S., Yang, Y., Kate, S., Samant, P. (2022) Towards Human-Centric XAI Chatbots in Mental Health for End-User Experience, the Human-Centered Explainable AI (HCXAI)<br></br> workshop, May 12-13, 2022. ACM Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems 
 <a href="https://formative.jmir.org/2022/9/e39274/PDF" style={{color:'blue'}}>PDF</a></h6>
          </div>


      </section>
    </Center></>
  );
};

export default Blog;
