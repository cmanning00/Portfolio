import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Porfolio - Colton Manning', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Data science porfolio for Colton Manning', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Colton',
  subtitle: "Welcome to my portfolio page", //"and I'm a data scientist",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'CM_profile_cropped',
  paragraphOne: 'I’m a Master of Computer Science student at the University of Illinois Urbana-Champaign.  Currently, I’m in my third semester or a little more than halfway through my program.',
  paragraphTwo: 'As an aspiring data scientist, I love to work with data.  I think it is incredible how you can take data that at first provides little insight, but with some cleaning and analysis, tells an incredibly compelling story.',
  paragraphThree: 'When I’m not studying data science, some of the things I like include biology, playing the piano, practicing my Spanish and much more!',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Age_Gender_Classify_Pic',
    title: "Age and Gender Prediction - (In progress)", //(2150 B.C. - 2021)",
    info: 'In this project I attempt to predict the age and gender of an individual given a face photo.  I have designed and trained a CNN to classify gender with around 92% accuracy so far.',
    info2: 'I am currently working on buidling another CNN classifier for age prediction.  I also plan to create a program that allows you to try out the classifiers on your own face photo using a web camera.',
    url: 'https://github.com/cmanning00/Age-and-Gender-Prediction/blob/c2ed81e69fb212857c587efd4c6e2a4fe6531884/AgeGenderClass_Project.ipynb',
    repo: 'https://github.com/cmanning00/Age-and-Gender-Prediction', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Earthquake_Dashboard',
    title: "Deadliest Earthquakes - Summer 2021", //(2150 B.C. - 2021)",
    info: 'I started this project as part of my Data Visualization class and have expanded upon it since then.  We were assigned to create a dashboard using any publicly available dataset.',
    info2: 'I decided to build my dashboard on major earthquakes.  I became super interested in seismology after living through the Puerto Rico earthquake swarm during the winter of 2019 – 2020.  You can use this dashboard to explore some of the characteristics of major earthquakes dating all the way back to 2150 B.C.',
    url: 'https://public.tableau.com/app/profile/colton.manning/viz/DashboardMajorEarthquakesFinal/MajorEarthquakes#2',
    repo: '', // if no repo, the button will not show up
  },
  /*{
    id: nanoid(),
    img: 'Linear Regression Proj',
    title: 'Linear Regression Analysis - Summer 2021',
    info: 'This was a group project as part of my statistics class. The goal was to build the best linear model we could using various methods for any publicly available dataset.',
    info2: 'We analyzed a dataset looking at weather conditions in Australia and modeled rainfall amounts.',
    url: 'https://cmanning00.github.io/Linear-Regression-Project/',
    repo: 'https://github.com/cmanning00/Linear-Regression-Project', // if no repo, the button will not show up
  },*/
  {
    id: nanoid(),
    img: 'BTC',
    title: 'Bitcoin Tweet Sentiment Analysis',
    info: 'In this project I attempt to predict the next-day price movement of bitcoin by performing sentiment analysis on bitcoin-related tweets',
    info2: 'I walk through my entire process from cleaning the data to building an actual model.',
    url: 'https://cmanning00.github.io/BTC-Twitter-Sentiment/',
    repo: 'https://github.com/cmanning00/BTC-Twitter-Sentiment', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'More to come!',
    info: 'Currently in the process of adding more projects',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to get in touch?',
  btn: '',
  email: 'cmanning00@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /*
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    */

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/coltonmanning/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cmanning00',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
