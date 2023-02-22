import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { testimonials } from '../constants/constants';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};
const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const TestimonialMain = () => {
  
  return (
    <Box className="reveal">
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading><Text style={{color:'#33b38d'}}>My Experience</Text></Heading>
          {/* <Text>Some Words of Appreciation</Text> */}
        </Stack>
      <div>
        <h1>1. PhD Research Assistant Advised by Dr. Samantha Kleinberg | Health & AI lab, Stevens Institute of Technology</h1>
        <ul>
          <li>Designed experiments and collected data about people’s decision-making on Prolific</li>
          <li>Interpreted and analyzed results using factor analysis, logistic regression, linear trend analysis, etc.</li>
          <li>Developed public health campaign interventions and published results in the Journal of Medical Internet Research</li>
        </ul>
        <h5>01/2021 – PRESENT</h5>
        <h6>Hoboken, NJ</h6>
      </div>
      <div>
        <h1>2. Graduate Research Assistant Advised by Dr. Irene Lopatovska | Center for Digital Experience, Pratt Institute                                                </h1>
        <ul>
          <li>Prototyped educational mobile app and voice interface for mental health support</li>
          <li>Conducted eye-tracking usability testing and analyzed data using R</li>
          <li>Presented projects’ results at the ACM conference</li>
        </ul>
        <h5>02/2019 – 12/2020</h5>
        <h6>New York, NY</h6>
      </div>
      <div>
        <h1>3. Web designer | Kaspersky Lab                                                                                                                                 </h1>
        <ul>
          <li>Designed websites and branding materials for retail and wellness companies</li>
          <li>Conceptualized visuals based on clients’ requirements</li>
          <li>Developed websites architecture and UX strategies</li>
        </ul>
        <h5>01/2018 – 01/2019</h5>
        <h6>Moscow, Russia</h6>
      </div>
      </Container>
    </Box>
  );
}
export default TestimonialMain;