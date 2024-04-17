// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Byron",
  middleName: "",
  lastName: "Chan",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/byroncjy",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/byronchanjy/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/byron2.jpg"),
  imageSize: 375,
  message:
    "Hi! I'm Byron, a senior at New York University (2024) studying Computer Science and Business. I'm an aspiring software engineer interested in working in backend / systems engineering. \n I also love spending my free time on fashion and sports/fitness (going to the gym, long runs, basketball and more!).",
  resume: "https://onedrive.live.com/?cid=8C72C735ADC0484F&id=8C72C735ADC0484F%2141536&parId=8C72C735ADC0484F%212971&o=OneUp",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "byroncjy", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["qr-connect", "home", "wiw-project"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Technical Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Java", value: 80 },
    { name: "C/C++", value: 80 },
    { name: "JavaScript", value: 70 },
    { name: "SQL", value: 70 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "Golang", value: 30 },
  ],
  softSkills: [
    { name: "Django", value: 90 },
    { name: "React", value: 80 },
    { name: "Express", value: 80 },
    { name: "Node", value: 80 },
    { name: "Git", value: 90 },
    { name: "GitHub", value: 90 },
    { name: "Docker", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "I'm currently looking for full-time Software Engineering or Data Engineering opportunities! Please contact me at",
  email: "byroncjy@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Research Data Analyst',// Here Add Company Name
      companylogo: require('../assets/img/nber4.gif'),
      date: 'Mar 2021 – Aug 2022',
    },
    // {
    //   role: 'Administrative Intern',
    //   companylogo: require('../assets/img/uobkh.jpg'),
    //   date: 'Jan – Apr 2020',
    // },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
