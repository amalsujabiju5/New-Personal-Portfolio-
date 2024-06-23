
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
        desc: "This is my personal portfolio website and in this website you can see my Skills,Experience,Projects,Education and Certifications. Feel Free to Play around with my Website",
    },
    {
        title: "Introduction",
        desc: "Amal is a seasoned computer science and software development professional, bringing college education and experience With a solid academic foundation in computer science and a passion forproblem-solving,Amal is committed to delivering top-tier solutions to intricate challenges. His portfolio showcases a diverse range of projects and accomplishments, highlighting his dedication to excellence in every endeavor",
    },
];

export const education = [
    {
        company_name: "Durham College, Oshawa, ON",
        desc: "Courses undertaken: Computer Programming, Object-Oriented Programming, REST API Development and Integration, Software Design UML, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, Database Systems, Software Engineering.",
    },
    {
        company_name: "GVHSS Pattazhy India",
        desc: "Completed High school education from GVHSS in Bio-Maths stream and scored 81% Overall ",
    },
    {
        company_name: "Google Technical Support",
        desc: "Completed Google Technical support fundementals certificate which helped in understanding of technical support fundementals ",
    },
];

export const technologies = [
    {
        name: "Software developer",
        icon: software,
    },
    {
        name: "Web developer",
        icon: web,
    },
    {
        name: "Frontend Devloper",
        icon: front,
    },
    {
        name: "Flutter Devloper",
        icon: mobile,
    },
];

export const projects = [
    {
        name: "YouTube Clone",
        description:
            "Youtube clone is an application that allows you to watch your favourite videos and contents and search videos and shows.",

        image: youtube,
    },
    {
        name: "Spotify Clone",
        description:
            "Spotify clone is an application that allows you to stream your favourite music and create playlists.",

        image: spotify,
    },
    {
        name: "Netflix Clone",
        description:
            "Netflix clone is an application that is made up of flutter. It has the feature of previewing the movies and when the user clicks the Movies list then it will show the detail that coming from TMDB database.",

        image: netflix,
    },
    {
        name: "Personal portfolio",
        description:
            "Personal Portfolio prject showcasing my experience,skills,Projects and Contact infrormation.This project is made with React",

        image: portfolio,
    },
    {
        name: "Weather App",
        description:
            "Weather app shows has the feature of searching the location and the user can able to see the current weather of the Particular place and you can see the Forecast of the place in the same age als0.",

        image: weather,
    },
    {
        name: "ChatApp",
        description:
            "ChatApp using react is an online chat Platform. where the user can chat to the registered Users.The user has to register first with filling the detaials and selecting a profile picture,It has aunthentication features which Login and logout the users. ",
        image: ChatApp,
    },
];
