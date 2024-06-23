
import software from "../assets/backend.png";
import web from "../assets/web.png"
import mobile from "../assets/mobile.png"
import front from '../assets/front.png'
import youtube from "../assets/youtube.png"
import portfolio from "../assets/portfolio.png"
import netflix from "../assets/Netflix1.png"
import spotify from "../assets/spotify.png"
import weather from "../assets/weather.png"
import ChatApp from "../assets/chatApp.png"

export const assets = {

    software,
    web,
    mobile,
    front,
    youtube,
    portfolio,
    netflix,
    spotify,
};

export const intro = [
    {
        title: "Amal",
        desc: "This is my personal portfolio website. You can see my Skills, Experience, Projects, Education, and Certifications on this website. Feel free to play around with my website.",
    },
    {
        title: "Introduction",
        desc: "Amal is a seasoned computer science and software development professional with a college education and experience. With a solid academic foundation in computer science and a passion for problem-solving, Amal is committed to delivering top-tier solutions to intricate challenges. His portfolio showcases a diverse range of projects and accomplishments, highlighting his dedication to excellence in every endeavor.",
    },
];

export const education = [
    {
        company_name: "Durham College, Oshawa, ON",
        desc: "Courses undertaken: Computer Programming, Object-Oriented Programming, REST API Development and Integration, Software Design UML, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, Database Systems, Software Engineering.",
    },
    {
        company_name: "GVHSS Pattazhy India",
        desc: "Completed high school education from GVHSS in Bio-Maths stream and scored 81% overall.",
    },
    {
        company_name: "Google Technical Support",
        desc: "Completed Google Technical Support Fundamentals certificate, which helped in understanding technical support fundamentals.",
    },
];

export const technologies = [
    {
        name: "Software Developer",
        icon: software,
    },
    {
        name: "Web Developer",
        icon: web,
    },
    {
        name: "Frontend Developer",
        icon: front,
    },
    {
        name: "Flutter Developer",
        icon: mobile,
    },
];

export const projects = [
    {
        name: "YouTube Clone",
        description: "YouTube clone is an application that allows you to watch your favorite videos and contents and search videos and shows.",
        image: youtube,
    },
    {
        name: "Spotify Clone",
        description: "Spotify clone is an application that allows you to stream your favorite music and create playlists.",
        image: spotify,
    },
    {
        name: "Netflix Clone",
        description: "Netflix clone is an application made with Flutter. It features previewing movies and detailed information fetched from the TMDB database.",
        image: netflix,
    },
    {
        name: "Personal Portfolio",
        description: "Personal Portfolio project showcasing my experience, skills, projects, and contact information. This project is made with React.",
        image: portfolio,
    },
    {
        name: "Weather App",
        description: "Weather app has features like location search, current weather display, and forecast.",
        image: weather,
    },
    {
        name: "ChatApp",
        description: "ChatApp using React is an online chat platform where users can chat with registered users. Users need to register first, fill in their details, and select a profile picture. It includes authentication features for user login and logout.",
        image: ChatApp,
    },
];

