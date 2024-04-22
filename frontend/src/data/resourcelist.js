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
    {
        name: "Cyber Security",
        resourceId: "cyber-security",
        resources: [
          {
            id: " Virtual Machine Installation",
            headings: ["Kali Linux", "Ubuntu"],
            links: {
              "Kali Linux": "https://www.youtube.com/watch?v=N50InUHBoEM",
              Ubuntu: "https://www.youtube.com/watch?v=v1JVqd8M3Yc",
            },
          },
          {
            id: "Getting Started",
            headings: [
              "Basic of Linux",
              "Network Fundamentals",
              "Programming Basics",
              "Penetration Testing",
              "OSINT",
              "Digital Forensics",
              "Malware Analysis",
            ],
            links: {
              "Basic of Linux": "https://www.youtube.com/watch?v=Wgi-OfbP2Gw",
              "Network Fundamentals": "https://www.youtube.com/watch?v=9uebakqWlB0",
              "Programming Basics":
                "https://www.youtube.com/watch?v=7utwZYKweho&list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47&index=6",
              "Penetration Testing": "https://www.youtube.com/watch?v=X4eRbHgRawI",
              OSINT:
                "https://www.youtube.com/watch?v=qwA6MmbeGNo&list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47&index=2",
              "Digital Forensics": "https://www.youtube.com/watch?v=SEzeyvqgHzc",
              "Malware Analysis": "https://www.youtube.com/watch?v=qA0YcYMRWyI",
            },
          },
          {
            id: "Additional / Bonus",
            headings: ["Ethical Hacking Part - 1", "Ethical Hacking Part - 2"],
            links: {
              "Ethical Hacking Part - 1":
                "https://www.youtube.com/watch?v=3FNYvj2U0HM&list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47&index=7",
              "Ethical Hacking Part - 2":
                "https://www.youtube.com/watch?v=sH4JCwjybGs&list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47&index=8",
            },
          },
          {
            id: "Projects",
            headings: [
              "Keylogger",
              "System for Image Steganography",
              "Web Scraper",
            ],
            links: {
              Keylogger: "https://www.youtube.com/watch?v=TbMKwl11itQ",
              "System for Image Steganography":
                "https://www.youtube.com/watch?v=JeV-WKK1A9Y",
              "Web Scraper": "https://www.youtube.com/watch?v=RKsLLG-bzEY",
            },
          },
          {
            id: "Platform for Practice",
            headings: ["TryHackMe", "HackTheBox", "VulnHub", "Hacker101"],
            links: {
              TryHackMe: "https://tryhackme.com/",
              HackTheBox: "https://www.hackthebox.com/",
              VulnHub: "https://www.vulnhub.com/",
              Hacker101: "https://www.hacker101.com/",
            },
          },
        ],
      },
      {
        "name": "Android Development",
        "resourceId": "app-development",
        "resources": [
            {
                "id": "Flutter installation",
                "headings": ["Android studio", "VsCode"],
                "links": {
                    "Android studio": "https://www.youtube.com/watch?v=fDnqXmLSqtg",
                    "VsCode": "https://www.youtube.com/watch?v=0SRvmcsRu2w"
                }
            },
            {
                "id": "Getting started",
                "headings": ["Dart Basics", "Flutter Basics", "Animation Intro"],
                "links": {
                    "Dart Basics": "https://www.youtube.com/playlist?list=PLlxmoA0rQ-LyHW9voBdNo4gEEIh0SjG-q",
                    "Flutter Basics": "https://www.youtube.com/watch?v=1ukSR1GRtMU&list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
                    "Animation Intro": "https://www.youtube.com/watch?v=GXIJJkq_H8g&list=PLjxrf2q8roU2v6UqYlt_KPaXlnjbYySua"
                }
            },
            {
                "id": "State management",
                "headings": ["Provider", "Bloc", "RiverPod", "GetX"],
                "links": {
                    "Provider": "https://www.youtube.com/watch?v=kN9Yfd4fu04",
                    "Bloc": "https://www.youtube.com/watch?v=oxeYeMHVLII&list=PLB6lc7nQ1n4jCBkrirvVGr5b8rC95VAQ5",
                    "RiverPod": "https://www.youtube.com/watch?v=grcgR9tUGiU",
                    "GetX": "https://www.youtube.com/watch?v=bccMj5yRvzI&list=PLyvMrTRoa-A5BBd1qOufZLniBIooWB_Y7"
                }
            },
            {
                "id": "Projects",
                "headings": ["Weather App", "Full stack Chat application using Firebase", "Full stack E-commerce App"],
                "links": {
                    "Weather App": "https://www.youtube.com/watch?v=A9EWCl67hKw",
                    "Full stack Chat application using Firebase": "https://www.youtube.com/watch?v=Qwk5oIAkgnY",
                    "Full stack E-commerce App": "https://www.youtube.com/watch?v=j-LOab_PzzU"
                }
            },
            {
                "id": "Videos",
                "headings": ["FULL Flutter Masterclass: Beginner to Pro", "The Complete Dart & Flutter Developer Course", "Master Flutter in 8 Hours 2.0 Hindi"],
                "links": {
                    "FULL Flutter Masterclass: Beginner to Pro": "https://www.youtube.com/watch?v=TclK5gNM_PM",
                    "The Complete Dart & Flutter Developer Course": "https://www.youtube.com/watch?v=CzRQ9mnmh44&t=62346s",
                    "Master Flutter in 8 Hours 2.0 Hindi": "https://www.youtube.com/watch?v=jYoALeP3eH8"
                }
            },
            {
                "id": "Entire Roadmap in PDF",
                "headings": ["Entire Roadmap in PDF"],
                "links": {
                    "Entire Roadmap in PDF": "https://drive.google.com/drive/folders/1HDHHB7fwfOez0Kx4w2L9lTNV6n_xPlV5?usp=sharing"
                }
            }
        ]
    },
    {
        "name": "Data Structures and Algorithms (DSA)",
        "resourceId": "data-structures",
        "resources": [
            {
                "id": "Introduction",
                "headings": ["Learn the language", "Strong hold on loops", "Basic Mathematics", "Understanding time and space complexity", "Knowing standard template library(STL) or Collections in Java/Python"],
                "links": {
                    "Learn the language": {"C++": "https://www.youtube.com/watch?v=e7sAf4SbS_g", "Java": "", "Python": ""},
                    "Strong hold on loops": {"Pattern based Questions": ""},
                    "Basic Mathematics": {"Basic Maths [Kunal]": "", "Basic Maths [Striver]": ""},
                    "Understanding time and space complexity": {"Time & Space complexity [Striver]": "", "Time & Space Complexity [Love babbar]": "", "Time & Complexity [Kunal] Recommended": ""},
                    "Knowing standard template library(STL) or Collections in Java/Python": {"Collections framework (Java)": "", "STL": "", "Collections (Python)": ""}
                }
            },
            {
                "id": "Arrays",
                "headings": ["Learn about classes related to arrays in language's library", "Basic implementation Questions"],
                "links": {
                    "Learn about classes related to arrays in language's library": {"Vector class in C++": "", "List interface and respective classes (Java)": ""},
                    "Basic implementation Questions": {"Section 3 [Easy, Medium]": ""}
                }
            },
            {
                "id": "Searching Algorithms",
                "headings": ["Linear Search", "Binary Search [Very Important]", "Questions on binary search", "Ternary Search"],
                "links": {
                    "Linear Search": "",
                    "Binary Search [Very Important]": {"Striver Playlist": ""},
                    "Questions on binary search": {"Section 4": ""},
                    "Ternary Search": ""
                }
            },
            {
                "id": "Sorting Algorithms",
                "headings": ["Bubble sort, Selection sort, Insertion sort", "Inbuilt sorting function in STL and Collections", "Questions"],
                "links": {
                    "Bubble sort, Selection sort, Insertion sort": "",
                    "Inbuilt sorting function in STL and Collections": "",
                    "Questions": {"bucket sort, counting sort": "", "Master searching & sorting Questions": "CSES problem set"}
                }
            },
            {
                "id": "Prefix Sum Technique",
                "headings": ["Questions"],
                "links": {"Questions": ""}
            },
            {
                "id": "Using Map and Set",
                "headings": ["Hashing Theory", "Implement map and set without using inbuilt function", "Knowing map and set (sorted, unordered) and their time complexities", "Questions"],
                "links": {
                    "Hashing Theory": "",
                    "Implement map and set without using inbuilt function": "",
                    "Knowing map and set (sorted, unordered) and their time complexities": "",
                    "Questions": ""
                }
            },
            {
                "id": "Sliding window and two pointer approach",
                "headings": ["Questions"],
                "links": {"Questions": ""}
            },
            {
                "id": "Strings",
                "headings": ["Know the string class and their functions in Collections/STL", "Question - Easy to Medium level"],
                "links": {
                    "Know the string class and their functions in Collections/STL": {"String class in STL": "", "String class in Collections Java": ""},
                    "Question - Easy to Medium level": {"Section 5 [Easy & Medium]": ""}
                }
            },
            {
                "id": "Recursion and Backtracking",
                "headings": ["Introduction and strong foundation"],
                "links": {"Introduction and strong foundation": {"Kunal [Recommended]": "", "Aditya Verma Recursion": "", "Aditya Verma Backtracking": ""}}
            },
            {
                "id": "Bit Manipulation",
                "headings": ["Bit Manipulation"],
                "links": {"Bit Manipulation": {"Striver [Recommended]": "", "Kunal": ""}}
            },
            {
                "id": "Linked List",
                "headings": ["Linked List"],
                "links": {"Linked List": {"Striver [Recommended]": "", "Love Babbar": "", "Kunal": ""}}
            },
            {
                "id": "Stacks & Queues",
                "headings": ["Introduction and Strong foundation", "Concepts"],
                "links": {
                    "Introduction and Strong foundation": {"Aditya Verma": ""},
                    "Concepts": {"Love Babbar": "", "Striver": ""}
                }
            },
            {
                "id": "Binary Tree and Binary Search Tree",
                "headings": ["Concept"],
                "links": {"Concept": {"Striver [Recommended]": "", "Love babbar": "", "Kunal": ""}}
            },
            {
                "id": "Heap",
                "headings": ["Concept"],
                "links": {"Concept": {"Aditya Verma [Recommended]": "", "Love Babbar": "", "Kunal": ""}}
            },
            {
                "id": "Number Theory and Adv. Mathematics",
                "headings": [],
                "links": {"For CP": ""}
            },
            {
                "id": "Dynamic Programming",
                "headings": ["Understanding the concept of DP", "DP Techniques (Top-Down DP) (Bottom-Up DP)", "DP on Arrays/Lists", "DP on Grids", "DP on Trees", "DP on Graphs", "Bit Masking DP", "Space Optimization", "Practice"],
                "links": {
                    "Understanding the concept of DP": {"Aditya Verma (Easy to understand, Covers most of the topics)": "", "Striver (Also teaches space optimization techniques)": ""},
                    "DP Techniques (Top-Down DP) (Bottom-Up DP)": "",
                    "DP on Arrays/Lists": {"0/1 Knapsack Problem": "", "Unbounded Knapsack Problem": "", "Longest Common Subsequence (LCS)": "", "Longest Increasing Subsequence (LIS)": "", "Kadane's Algorithm (Maximum Subarray Sum)": ""},
                    "DP on Grids": "",
                    "DP on Trees": {"Kartik Arora": ""},
                    "DP on Graphs": "",
                    "Bit Masking DP": {"Kartik Arora": ""},
                    "Space Optimization": "",
                    "Practice": {"CSES problemset DP section": "", "Leetcode topic-wise dp problems": ""}
                }
            },
            {
                "id": "Tries",
                "headings": [],
                "links": {}
            },
            {
                "id": "Advanced String algorithms",
                "headings": [],
                "links": {}
            },
            {
                "id": "Fenwick and Segment Tree",
                "headings": [],
                "links": {}
            }
        ]
    }
];

export default resourcesList;
