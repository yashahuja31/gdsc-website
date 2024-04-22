// for web dev and vision control
const resourcesList = [
    {
        name: "Web Development(Frontend)",
        resourceId: "frontend",
        resources: [
            {
                id: "Basic HTML & CSS",
                headings: ["HTML and CSS", "Complete Css (advanced)"],
                links: {
                    "HTML and CSS": "https://www.youtube.com/watch?v=a_iQb1lnAEQ",
                    "Complete Css (advanced)":
                        "https://www.youtube.com/watch?v=Edsxf_NBFrw",
                },
            },
            {
                id: "Styling",
                headings: ["Bootstrap", "Tailwind CSS"],
                links: {
                    Bootstrap: "https://www.youtube.com/watch?v=DUiYVJIVNcA",
                    "Tailwind CSS": "https://www.youtube.com/watch?v=MiR1dyW45Uw",
                },
            },
            {
                id: "Basic JS",
                headings: ["JS with projects", "JQuery", "NodeJS"],
                links: {
                    "JS with projects": "https://www.youtube.com/watch?v=hKB-YGF14SY",
                    JQuery: "https://www.youtube.com/watch?v=wjFfyqEutYE",
                    NodeJS: "https://www.youtube.com/watch?v=WjzLVU-aFXI",
                },
            },
            {
                id: "ReactJS",
                headings: ["Basic to Intermediate", "Clone of Websites"],
                links: {
                    "Basic to Intermediate":
                        "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",
                    "Clone of Websites":
                        "https://www.youtube.com/playlist?list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP",
                },
            },
            {
                id: "TypeScript (TS)",
                headings: ["Basics of TS", "ReactJS with TS"],
                links: {
                    "Basics of TS": "https://www.youtube.com/watch?v=d56mG7DezGs",
                    "ReactJS with TS":
                        "https://www.youtube.com/watch?v=FJDVKeh7RJI&t=10s",
                },
            },
        ],
    },
    {
        name: "Web Development(backend)",
        resourceId: "backend",
        resources: [
            {   
                id: "Pre-Requisites",
                headings: ["RestAPI intro", "API Applications", "Client vs Server", "Django Basics (Python)", "NodeJS Basics", "ExpressJs"], 
                links: {
                    "RestAPI intro": "https://youtu.be/SLwpqD8n3d0",
                    "API Applications": "https://youtu.be/E0Qqpn8ymko",
                    "Client vs Server": "https://youtu.be/zEn93Km_CdM",
                    "Django Basics (Python)": "https://youtu.be/0sMtoedWaf0",
                    "NodeJS Basics": "https://youtu.be/ENrzD9HAZK4",
                    "ExpressJs": "https://youtu.be/SccSCuHhOw0?si=4ZU7XbV8U95UL_g5"
                },
                duration: {
                    "RestAPI intro": "6 minutes",
                    "API Applications": "12 minutes",
                    "Client vs Server": "10 minutes",
                    "Django Basics (Python)": "8 minutes",
                    "NodeJS Basics": "16 minutes",
                    "ExpressJs": "36 minutes"
                }
            },
            {   
                id: "Database Management",
                headings: ["DBMS+SQL", "MySQL", "monmgodb(no SQL)"],
                links: {"DBMS+SQL": "https://www.freecodecamp.org/news/ dbms-and-sql-basics/",
                "MySQL": "https://youtu.be/7S_tz1z_5bA?si=hUv7-ut-5kXnxu4M",
                "Monmgodb": "https://youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&si=_ZBVgxxijHV-5KZb"
                },
                duration: {"DBMS+SQL": "20 minutes read",
                "MySQL": "3 hours and 10 mins",
                "Monmgodb": "25 videos"
                }
            },
            {
                
                id:"Authentication system",
                headings: ["JWT","Oauth 2.0"],
                links: {"JWT":"https://youtu.be/7Q17ubqLfaM?si=egLR-L2618WaRdaO",
                "Oauth 2.0": "https://youtu.be/ZDuRmhLSLOY?si=ZgBhfOnA0u4hrKrF"
                },
                duration:{
                    "JWT":"15 minutes",
                    "Oauth 2.0": "10 mintues"
                }
            }, 
            {
                id:"Getting Started",
                headings: ["Django (with html) playlist","Django + React playlist","Django + React","Django + React","Django + React","Django + React (both separate)","Django for beginners ","Django + React (Best Explanation)","NodeJS + ReactJS (mongodb + MUI)","NodeJS Rest API","NodeJs + ExpressJs","Springboot (Java)","ASP.NET Core Basic (C#)","Laravel (PHP)","Ruby on Rails (Ruby)"],
                links:{
                    "Django (with html) playlist":"https://youtu.be/UmljXZIypDc?list=PLLtIxaRk6P3JRiiW1SAV2BLhuuSSCULRn",
                    "Django + React playlist":"https://www.youtube.com/playlist?list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j",
                    "Django + React":["https://youtu.be/F9o4GSkSo40","https://youtu.be/xWEIwgeASNY"],
                    "Django + React (both separate)":"https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react",
                    "Django for beginners ":"https://youtu.be/OTmQOjsl0eg?si=5vYujEX2KvdWOaSy",
                    "Django + React (Best Explanation)":"https://youtu.be/xWEIwgeASNY",
                    "NodeJS + ReactJS (mongodb + MUI)":"https://youtu.be/K8YELRmUb5o",
                    "NodeJS Rest API":"https://youtu.be/fgTGADljAeg",
                    "NodeJs + ExpressJs":"https://youtu.be/Oe421EPjeBE?si=Xf5Y-sni3Vot5t1D",
                    "Springboot (Java)":"https://youtube.com/playlist?list=PLqq-6Pq4lTTbx8p2oCgcAQGQyqN8XeA1x&si=_cj5xUK6VxpqIf9J",
                    "ASP.NET Core Basic (C#)":"https://youtu.be/1ck9LIBxO14?si=kS40bk9gWNgnU0W2",
                    "Laravel (PHP)":"https://youtu.be/NO6R_NfOB5I?si=OOqLWBAOd0s0HgVH",
                    "Ruby on Rails (Ruby)":"https://youtu.be/fmyvWz5TUWg?si=4wiYF1Y61iKOe45z",
                },
                duration: {
                    "Django (with html) playlist":"14 videos (25-45 minutes each)",
                    "Django + React playlist":"17 videos (20-30 minutes each)",
                    "Django + React":["11 minutes","17 minutes"],
                    "Django + React (both separate)":"5 minute read",
                    "Django for beginners ":"3hrs 9mins",
                    "Django + React (Best Explanation)":"17 minutes",
                    "NodeJS + ReactJS (mongodb + MUI)":"5 hours 30 minutes",
                    "NodeJS Rest API":"28 minutes",
                    "NodeJs + ExpressJs":"8 hrs 16 mins",
                    "Springboot (Java)":"34 videos (Total length: 3 hours 18 minutes)",
                    "ASP.NET Core Basic (C#)":"1 hr 3 mins",
                    "Laravel (PHP)":"2 hrs 34 mins",
                    "Ruby on Rails (Ruby)":"4 hrs 4 mins",
                }
            }
        ],

    }, 
    {
        name:"Version Control",
        resourceID: "versioncontrol",
        resouces: [
            {
                id: "Git and Github",
                headings: ["From Basic to Intermediate ", "Intermediate to Advance"],
                links: {
                    "From Basic to Intermediate": "https://www.youtube.com/watch?v=apGV9Kg7ics",
                    "Intermediate to Advance": "https://www.youtube.com/watch?v=Uszj_k0DGsg"
                },
                duration: {
                    "From Basic to Intermediate": "70 minntues",
                    "Intermediate to Advance": "40 minutes"
                }
            }
        ]
    }
];

export default resourcesList;
