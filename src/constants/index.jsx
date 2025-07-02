const navLinks = [
     {
          name: "Work",
          link: "#work",
     },
     {
          name: "Experience",
          link: "#experience",
     },
     {
          name: "Skills",
          link: "#skills",
     },
     // {
     //      name: "Testimonials",
     //      link: "#testimonials",
     // },
];

const words = [
     { text: "Ideas", imgPath: "/images/ideas.svg" },
     { text: "Concepts", imgPath: "/images/concepts.svg" },
     { text: "Designs", imgPath: "/images/designs.svg" },
     { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
     { value: 15, suffix: "+", label: "Years of Experience" },
     { value: 200, suffix: "+", label: "Satisfied Clients" },
     { value: 108, suffix: "+", label: "Completed Projects" },
     { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
     {
          imgPath: "/images/logos/company-logo-1.png",
     },
     {
          imgPath: "/images/logos/company-logo-2.png",
     },
     {
          imgPath: "/images/logos/company-logo-3.png",
     },
     {
          imgPath: "/images/logos/company-logo-4.svg",
     },
     {
          imgPath: "/images/logos/company-logo-5.png",
     },
     {
          imgPath: "/images/logos/company-logo-1.png",
     },
     {
          imgPath: "/images/logos/company-logo-2.png",
     },
     {
          imgPath: "/images/logos/company-logo-3.png",
     },
     {
          imgPath: "/images/logos/company-logo-4.svg",
     },
     {
          imgPath: "/images/logos/company-logo-5.png",
     },
];

const abilities = [
     {
          imgPath: "/images/seo.png",
          title: "Quality Focus",
          desc: "Delivering high-quality results while maintaining attention to every detail.",
     },
     {
          imgPath: "/images/chat.png",
          title: "Reliable Communication",
          desc: "Keeping you updated at every step to ensure transparency and clarity.",
     },
     {
          imgPath: "/images/time.png",
          title: "On-Time Delivery",
          desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
     },
];

const techStackImgs = [
     {
          name: "React Developer",
          imgPath: "/images/logos/react.png",
     },
     {
          name: "Database Manager",
          imgPath: "/images/logos/mongodb.svg",
     },
     {
          name: "Backend Developer",
          imgPath: "/images/logos/node.png",
     },
     {
          name: "Interactive Developer",
          imgPath: "/images/logos/three.png",
     },
     {
          name: "Project Manager",
          imgPath: "/images/logos/git.svg",
     },
];

const techStackIcons = [
     {
          name: "React Developer",
          modelPath: "/models/react_logo-transformed.glb",
          scale: 1,
          rotation: [0, 0, 0],
     },
     {
          name: "Database Manager",
          modelPath: "/models/python-transformed.glb",
          scale: 0.8,
          rotation: [0, 0, 0],
     },
     {
          name: "Backend Developer",
          modelPath: "/models/node-transformed.glb",
          scale: 5,
          rotation: [0, -Math.PI / 2, 0],
     },
     {
          name: "Interactive Developer",
          modelPath: "/models/three.js-transformed.glb",
          scale: 0.05,
          rotation: [0, 0, 0],
     },
     {
          name: "Project Manager",
          modelPath: "/models/git-svg-transformed.glb",
          scale: 0.05,
          rotation: [0, -Math.PI / 4, 0],
     },
];

const expCards = [
     {
          review: "Demonstrates strong technical aptitude and leadership potential with excellent professionalism. Communication skills need development, but shows great promise as a reliable, accountable team player with industry readiness.",
          imgPath: "/images/exp1.png",
          logoPath: "/images/logo1.png",
          title: "Intern Software Engineer",
          date: "Feb 2024 - Aug 2024",
          responsibilities: [
               "Developed a PDF data extraction API using Node.js and libraries like pdf-parse and pdf-lib to efficiently parse and retrieve structured content from uploaded PDF documents.",
               "Built cross-platform mobile applications using Flutter and Firebase, implementing real-time database, authentication, and cloud functions for scalable and responsive user experiences.",
               "Actively reviewed senior developers’ code to understand industry best practices, improve code quality awareness, and enhance personal development in scalable and maintainable software design.",
               "Developed responsive and dynamic user interfaces using React.js and Tailwind CSS, ensuring seamless performance across devices and optimized user experiences.",
          ],
     },
     {
          review: "Demonstrated strong technical skills in web development, effectively translating designs into responsive websites. Shows excellent adaptability, clean coding practices, and valuable collaboration in our fast-paced development environment.",
          imgPath: "/images/exp2.png",
          logoPath: "/images/logo2.png",
          title: "Junior Web Developer",
          date: "Feb 2025 - Present",
          responsibilities: [
               "Supported the maintenance and enhancement of existing websites, including fixing bugs and updating site features.",
               "Collaborated with senior developers and designers to learn and contribute to real-world projects in a fast-paced environment.",
               "Developed demo websites for clients using HTML, CSS, JavaScript and threejs",
               "Translated UI designs from Adobe XD, Photoshop, and Illustrator into fully responsive, cross-browser-compatible websites.",
               "Applied clean, maintainable code practices using HTML, CSS, JavaScript, and PHP within the WordPress environment.",
          ],
     },
];

const expLogos = [
     {
          name: "logo1",
          imgPath: "/images/logo1.png",
     },
     {
          name: "logo2",
          imgPath: "/images/logo2.png",
     },
     {
          name: "logo3",
          imgPath: "/images/logo3.png",
     },
];

const testimonials = [
     {
          name: "Esther Howard",
          mentions: "@estherhoward",
          review:
               "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
          imgPath: "/images/client1.png",
     },
     {
          name: "Wade Warren",
          mentions: "@wadewarren",
          review:
               "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
          imgPath: "/images/client3.png",
     },
     {
          name: "Guy Hawkins",
          mentions: "@guyhawkins",
          review:
               "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
          imgPath: "/images/client2.png",
     },
     {
          name: "Marvin McKinney",
          mentions: "@marvinmckinney",
          review:
               "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
          imgPath: "/images/client5.png",
     },
     {
          name: "Floyd Miles",
          mentions: "@floydmiles",
          review:
               "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
          imgPath: "/images/client4.png",
     },
     {
          name: "Albert Flores",
          mentions: "@albertflores",
          review:
               "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
          imgPath: "/images/client6.png",
     },
];

const socialImgs = [
     {
          name: "insta",
          imgPath: "/images/insta.png",
          url: "https://www.instagram.com/nilanga_gayashan?igsh=MW02bGM0YTU5cjRmZA==",
     },
     {
          name: "fb",
          imgPath: "/images/fb.png",
          url: "https://www.facebook.com/share/1Bwcia4CMX/?mibextid=qi2Omg",
     },
     {
          name: "linkedin",
          imgPath: "/images/linkedin.png",
          url: "https://www.linkedin.com/in/nilangagayashan",
     },
];

export {
     words,
     abilities,
     logoIconsList,
     counterItems,
     expCards,
     expLogos,
     testimonials,
     socialImgs,
     techStackIcons,
     techStackImgs,
     navLinks,
};