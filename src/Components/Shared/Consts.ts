import communication from '@/assets/Images/Icons/communication.webp';
import eyecontact from '@/assets/Images/Icons/eyecontact.webp';
import functioning from '@/assets/Images/Icons/functioning.webp';
import interest from '@/assets/Images/Icons/interest.webp';
import routine from '@/assets/Images/Icons/routine.webp';
import sensory from '@/assets/Images/Icons/sensory.webp';
import socializing from '@/assets/Images/Icons/socializing.webp';
import stimming from '@/assets/Images/Icons/stimming.webp';
import seemore from '@/assets/Images/Icons/seemore.webp';

import Banner1 from '@/assets/Images/Banner1.png';
import Banner2 from '@/assets/Images/Banner2.png';

import doc1 from '@/assets/Images/Doctors/doc1.png';
import doc2 from '@/assets/Images/Doctors/doc2.png';
import doc3 from '@/assets/Images/Doctors/doc3.png';
import doc4 from '@/assets/Images/Doctors/doc4.png';

import user1 from '@/assets/Images/users/user1.jpg';
import user2 from '@/assets/Images/users/user2.jpg';
import user3 from '@/assets/Images/users/user3.jpg';

import logo from '@/assets/Images/logo.png';

export const links = ['Home', 'Doctors', 'Characteristics', 'Reviews'];

export const descNums = [
  {
    num: '1000+',
    text: 'Data',
  },
  {
    num: '300+',
    text: 'Happy Client',
  },
  {
    num: '24/7',
    text: 'Emergency Consultant',
  },
  {
    num: '100+',
    text: 'Test Done',
  },
  {
    num: '150+',
    text: 'Feedback',
  },
];

export const CharacteristicsData = [
  {
    img: socializing,
    title: 'Socializing',
    id: 'socializing',
    heading: 'Socializing Characteristics',
    texts: [
      'Social interactions can feel overwhelming',
      'Starting and maintaining conversations is difficult.',
      'Understanding facial expressions and body language is challenging.',
      'Group discussions are hard to follow.',
      'Social anxiety can lead to avoidance.',
      'Making and keeping friends can be difficult.',
      'Online communication is often easier than in-person.',
    ],
  },
  {
    img: eyecontact,
    title: 'Eye Contact',
    id: 'eyecontact',
    heading: 'Eye Contact Characteristics',
    texts: [
      'Eye contact feels uncomfortable or overwhelming.',
      'Some avoid it, while others use it inconsistently.',
      'Maintaining it can be distracting or unnatural.',
      'It’s often mistaken for disinterest or rudeness.',
      'Eye contact may be harder with strangers',
      'Emotional intensity can make eye contact harder to maintain.',
      'Eye contact discomfort varies—some days are harder than others.',
      'Direct eye contact may interfere with processing spoken words.',
      'Some use alternative cues like nodding instead of eye contact.',
    ],
  },
  {
    img:communication,
    title: 'Communication',
    id: 'communication',
    heading: 'Communication Characteristics',
    texts: [
      'Struggles with understanding sarcasm or idioms.',
      'May have delayed speech development.',
      'Some rely on alternative communication methods.',
      'Talks in a monotone or unusual rhythm.',
      'Prefers written over verbal communication.',
      'Struggles with back-and-forth conversation.',
      'Can take longer to process verbal instructions.',
    ],
  },
  {
    img: routine,
    title: 'Routine',
    id: 'routine',
    heading: 'Routine Characteristics',
    texts: [
      'Changes in routine can cause distress.',
      'Plans daily activities carefully.',
      'Finds comfort in repetition and familiarity.',
      'Unexpected events can be overwhelming.',
      'Follows strict personal rules.',
      'May eat the same foods repeatedly.',
      'Routine provides a sense of security.',
    ],
  },
  {
    img: stimming,
    title: 'Stimming',
    id: 'stimming',
    heading: 'Stimming Characteristic',
    texts: [
      'Repeats body movements like hand-flapping or rocking.',
      'Taps fingers, spins objects, or plays with hair.',
      'Uses stimming to self-soothe or manage emotions.',
      'May hum, repeat words, or make noises.',
      'Stimming can increase during stress or excitement.',
      'Suppressing stims can cause discomfort.',
      'Can focus better while stimming.',
    ],
  },
  {
    img: sensory,
    title: 'Sensory',
    id: 'sensory',
    heading: 'Sensory Characteristics',
    texts: [
      'Overly sensitive to sounds, lights, or textures.',
      'May cover ears or avoid loud noises.',
      'Finds certain clothing fabrics uncomfortable.',
      'Dislikes strong smells or bright lights.',
      'Can be hypersensitive to touch or temperature.',
      'Certain food textures or flavors may be intolerable.',
      'Enjoys deep pressure (weighted blankets, hugs).',
    ],
  },
  {
    img: interest,
    title: 'Interests',
    id: 'interests',
    heading: 'Interest Characteristic',
    texts: [
      'Deeply passionate about specific topics.',
      'Spends hours learning or talking about interests.',
      "Finds comfort and joy in special interests.",
      'May memorize facts, lists, or patterns.',
      'Enjoys repetitive activities related to interests.',
      'Often more knowledgeable than peers in their area of interest.',
      'Interests provide relaxation and stimulation.',
    ],
  },
  {
    img: functioning,
    title: 'Functioning',
    id: 'functioning',
    heading: 'Functioning Characteristics',
    texts: [
      'Struggles with organization and time management.',
      'Can hyperfocus on tasks but forget daily activities.',
      'Finds prioritizing multiple tasks difficult.',
      'Needs reminders for basic routines.',
      'Can procrastinate due to feeling overwhelmed.',
      'May lose track of time when engaged in activities.',
      'Task-switching is challenging.',
    ],
  },
  {
    img: seemore,
    title: 'See More',
    id: 'seemore',
    heading: 'Further Characteristics',
    texts: [
      'Experiences intense emotions.',
      'May struggle to express feelings verbally.',
      'Becomes overwhelmed in loud or busy environments.',
      'Social interactions can contribute to overload.',
      'Uses stimming, routine, or solitude to self-regulate.',
      'Finds comfort in calming activities.',
      'Takes longer to process and respond to emotions.',
    ],
  },
];

export const Banner1Data = {
  heading: 'We Are Always Here To Ensure Best Treatment',
  texts: [
    'Easy to make appointment',
    'Top specialist doctors',
    '24/7 service',
    'Multiple treatment session',
    'Enrolment is quick and easy',
  ],
  img: Banner1,
};

export const DoctorsData = {
  heading: 'Meet Our Specialists',
  doctors: [
    {
      img: doc1,
      name: 'Dr. Vaibhav Bhatt',
      job: 'Pediatrician',
    },
    {
      img: doc2,
      name: 'Dr. Shivashree Bhandari',
      job: 'Child Psychiatrist',
    },
    {
      img: doc3,
      name: 'Dr. Mradul Verma',
      job: 'Geneticist',
    },
    {
      img: doc4,
      name: 'Dr. Katherine Pierce',
      job: 'Neurologist',
    },
  ],
  heading2: 'Who Are We?',
  desc: 'We are a passionate team of students dedicated to create a supportive, inclusive, and informative space for autistic individuals, their families, and allies. Our mission is to provide accessible resources, foster understanding, and celebrate neurodiversity through education and community engagement.',
  img: Banner2,
};

export const FeedbackData = {
  heading: 'Patient Feedback',
  feedbacks: [
    {
      img: user1,
      name: 'Dominic Toretto',
      job: 'Student',
      desc: 'My experience with this site has been great. I highly recommend their services to anyone in need of patience healing. They truly prioritize patients care.',
    },
    {
      img: user2,
      name: 'Han Lue',
      job: 'Writer',
      desc: 'The healthcare professionals were top-notch. They were knowledgeable, attentive, and took the time to answer all of my questions and address my concerns time to time.',
    },
    {
      img: user3,
      name: 'Eleanor Pena',
      job: 'Teacher',
      desc: "One thing that stood out to me was the efficiency of the service, i didn't have to wait long for my appointment, and the entire process was hassle-free experience",
    },
  ],
};

export const FooterData = {
  logo: logo,
  addresses: ['263132', 'Bhimtal, GEHU '],
  phone: '+91 111-222-333',
  departments: [
    'Pediatrician',
    'Psychiatrist',
    'Neurologist',
    'Geneticist',
    'Special Edu',
    'More',
  ],
  links: links,
};
