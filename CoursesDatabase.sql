--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: Ashley
--

CREATE TABLE public.courses (
    id text NOT NULL,
    subject text NOT NULL,
    name text NOT NULL,
    prerequisite text,
    description text NOT NULL
);


ALTER TABLE public.courses OWNER TO "Ashley";

--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: Ashley
--

COPY public.courses (id, subject, name, prerequisite, description) FROM stdin;
CS300	Computer Science	Data Structures and Algorithms: Analysis and Design	MAT230 Discrete Mathematics, CS210 Programming Languages	Students will develop code as well as use non-coding development methodologies in algorithmic design and problem solving. Students will use advanced algorithmic designs to evaluate complex data structures to aid in problem solving.
CS200	Computer Science	Computer Science's Role in Industry	\N	This course introduces the role of computer software in a variety of industries. Principles of hardware, software, computation, and algorithm development are introduced. Students learn the fundamentals of basic programming concepts including data types, variables, control structures, logical expressions, and arrays.
ACC201	Accounting	Financial Accounting	\N	Students will learn the steps of the accounting cycle and how to prepare financial statements in accordance with industry established rules and regulations. Students will develop skills needed to analyze financial accounting information, communicate this information to stakeholders, and understand the accounting procedures that produce this information.
ACC202	Accounting	Managerial Accounting	ACC201 Financial Accounting	Students will explore the financial impact of short-term and long-term business decisions. By learning how accounting and other productivity information can be used to assess and improve performance of an organization, managers will be provided the essential information they need to execute growth strategies and select opportunities that create business value.
BIO120	Biology	General Biology I	\N	General biology course that includes mammalian cell structure and function, cellular reproduction and physiology, and Mendelian genetics. Laboratory exercises (BIO 120L) to follow lecture topics.
BIO120L	Biology	General Biology I Lab	Concurrently enrolled in BIO210 General Biology I	Laboratory course to follow topics presented in BIO120
BUS206	Business	Business Law	\N	Students will examine the background, foundation, and ethical aspects of the United States' legal system as it applies to business organizations. Students will also learn the impact of torts, product liability, criminal law, contracts, sales, business organizations, and agency and cyber law in a business setting.
BUS210	Business	Managing and Leading in Business	\N	Students will explore leadership and management theories and how to incorporate them in one's own personal style for effective contribution and collaboration in diverse team environments, and learn about the skills necessary to lead in various organizational structures and areas of business. Students will also examine how the functional areas of business are interrelated and work together in organizations.
COM126	Communication	Introduction to Mass Communication	\N	This communications survey course covers mass media, culture, and society.  The course focuses on how and why the US media operate as they do, as well as on how media performance might be improved.
COM127	Communication	Introduction to Communication	\N	In this course, students will explore the history and development of the communication profession in the context of current business environments. They will also examine how contemporary communication issues and problems are addressed in various contexts. Additionally, they will learn how theory impacts the daily work of a communication professional in an ever-changing discipline.
CJ112	Criminal Justice	Introduction to Criminal Justice	\N	In this introduction to the criminal justice program students will begin to understand the major components within various professions at the state, local and federal levels and how they are interconnected. Communication skills, career prospects, and an overview of the core components of the United States government will be reviewed to provide students with a holistic view of sworn and civilian roles within the criminal justice system.
CJ120	Criminal Justice	Cultural Awareness in Criminal Justice	CJ112 Introduction to Criminal Justice	Students will gain an understanding of the ways that culture impacts and influences professionalism in sworn and civilian positions within criminal justice. Special attention will be paid to understanding and reflecting on one’s own biases and how bias can influence interpersonal behavior to aid in developing strong community relationships.
CYB101	Cybersecurity	Network Security Controls	\N	Students will be introduced to Network Security Fundamentals, Identification, Authentication, and Authorization, and Administrative, Physical, and Technical Network Security Controls. Students will learn through hands-on practical application by implementing Role-Based Access Control in Windows Admin Center (WAC), Password Policies Using Windows Group Policy, host-based firewall functionality using Windows Firewall, network-based IDS functionality using Snort IDS, Proxy Server Using Squid Proxy, and establishing a VPN Connection using OpenVPN. Enrollment in the Cybersecurity certificate program required.
CYB102	Cybersecurity	Cloud, Network, and Device Security	CYB101 Network Security Controls	Students will be introduced to Virtualization and Cloud Computing, Wireless Network Security, Mobile Device Security, IoT Device Security, and Cryptography and PKI. Students will learn through hands-on practical application by auditing Docker Host Security Using Docker-Bench-Security Tool, implementing AWS Identity and Access Management, Key Management Services, and Enterprise Mobile Security Using Miradore MDM Solution. They'll configure Security on Wireless Router, secure IoT Device Communication Using TLS\\SSL, and calculate One-way Hashes using HashCalc, MD5 Hashes using MD5 Calculator, and MD5 Hashes using HashMyFiles. Lastly, they'll Create and Use Self-signed Certificates. Enrollment in the Cybersecurity certificate program required.
DAT205	Data Analytics	Role of Data Analysis in Organizations	\N	Students will analyze the role of data analysis and data analysts within organizations. Students will also gain an understanding of the various areas of data analysis as well as the industries in which it is used, and explore the types of professional roles that exist in the world of data.
DAT210	Data Analytics	Foundation of Data Analytics	\N	The emergence of new data sources is transforming the role of the data analyst from one who simply reports information to one who is charged with making sense of the available data and distilling from it the salient aspects for the given audience. In this course, students will examine the concepts of data analysis and how it informs the business process. Emphasis will be placed on the development of sound research questions, the identification and verification of data sources, the retrieval, cleaning, and manipulation of data, and the process for identifying the data elements that are relevant for a given audience. An overview of the regulatory organizations that govern the release of data will also be reviewed.
ATH101	Anthropology	The Human Experience: Introduction to Anthropology	\N	Anthropologists seek to answer the questions of what it means to be human and how cultures shape societies. Anthropology is composed of four main fields-physical anthropology, cultural anthropology, linguistics, and archaeological anthropology-from which culture is examined. This course will introduce students to the anthropological study of cultures, including comparing and contrasting social relationships and belief systems in different cultural settings. Concepts learned in this course will then be used to understand contemporary world views.
ATH111	Anthropology	Introduction to Cultural Anthropology	\N	This course is the study of preliterate and changing societies that emphasizes social organization and cultural aspects.
CS230	Computer Science	Operating Platforms	CS210 Programming Languages	Students will develop a deeper understanding of operating platforms and architectures through the analysis and evaluation of the characteristics, advantages, and weaknesses of each. Students will learn the value of utilizing software design templates as well as how to utilize them to solve problems.
CS360	Computer Science	Mobile Architecture and Programming	IT145 Foundation in Application Development	Students will apply mobile development principles and best practices to develop mobile applications using user-centered design principles and industry standards. Upon completion of a fully-functional mobile application, students will conduct security, product assuredness, and compatibility checks before launching the application.
CS330	Computer Science	Computational Graphics and Visualization	CS210 Programming Languages	Students will create realistic, interactive three-dimensional objects through the use of application programming interface (API) libraries and best practices. Students will also develop fully formed graphic applications that meet project requirements.
COM227	Communication	Public Relations	ENG190 Research and Persuasion	This course introduces students to the theory and practice of public relations in the United States. Students study the major figures in this field as well as organizations, their behavior, and the relationships between organizations and their publics.
ENG328	English	Poetry Writing Workshop	ENG120 College Composition	This course is a roundtable forum in which students will write poetry of various lengths using traditional and experimental methods and forms. Members of the class will produce on a weekly basis and take turns presenting their manuscripts to the group for commentary and discussion. May not be used as a literature elective.
ENG401	English	Profession of Writing	ENG190 Research and Persuasion	This course provides students with guidance in their professionalization, including topics such as career paths, resumes, and internships.  The course will utilize Career Center resources and will include networking opportunities, interview practice, internship application experience, and job application guidance.  Students will come out of the class with a sense of how to leverage their strengths as readers and writers on the job market.
IT209	Information Technology	Introduction to Robotics	IT145 Foundation in Application Development	This course covers Introduction to Robotics, Applications of Robots, Return-on-Investment, Abstract Models, Controlling Robot Motion, Complex Motion, Robotic Sensors, Input / Output, External Sensors, Threads, Event Programming, Remote Communication, Remote Sensing, Behavior Programming, and Human/Robot Interfaces. Students will gain hands-on experience with emerging robot technologies, understand industrial applications of robots, and ramifications of human/robot interaction.
IT230	Information Technology	Software Development with C#.NET	IT145 Foundation in Application Development	This course is designed to introduce C#, an event-driven, fully object-oriented, visual programming language.  The course covers the Visual Studio.NET integrated development environment (IDE) while covering the basics of the C# language. Topics include input / output statements, arithmetic and logical operations, control structures, program modules (methods and classes) and arrays.  Students will be involved in writing programs of increasing complexity throughout the course.  This is a programming course.
IT338	Information Technology	Geospatial Programming	IT242 Introduction to Geographic Information Systems	This course will provide the fundamental skills necessary for geospatial programming. Topics will include calling geographic processing tools, batch processing, performing file input/output in an external computing language and building, graphical user interfaces, and displays. To support these tasks, students will learn basic object-oriented programming concepts.
\.


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: Ashley
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

