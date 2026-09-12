/* =========================================================
   DATA FILE
   Edit only this file to add a new project/certificate/achievement.
   You don't need to touch any other file.
   ========================================================= */

/* ---------------------------------------------------------
   PROJECTS
   id: no spaces, used in the detail page URL (project.html?id=...)
   category: soil | matlab | electronics | arduino | future
   image: path to the image inside assets/images/projects/
   details: shown on the project detail page
--------------------------------------------------------- */
const PROJECTS = [
{
  id: "fiber-optic-vibration-sensor",
  title: "Fiber Optic Vibration Sensor — Senior Design Project",
  category: "arduino",
  categoryLabel: "Arduino",
  image: "assets/images/projects/vibration-sensor-3d-design.png",
  shortDesc: "My graduation project (EE 495) a non-contact vibration measurement system using optical fibers, currently in progress.",
  tools: ["Arduino", "MATLAB", "Optical Sensing", "Signal Processing"],
  details: {
    problem: "Traditional vibration sensors rely on physical contact and are affected by electrical interference, making them unreliable in many industrial and structural monitoring settings.",
    idea: "Build a non-contact vibration sensor using optical fibers and light intensity changes instead of electrical contact, offering a low-cost alternative for structural health monitoring.",
    howItWorks: "A laser diode sends light through an optical fiber toward a small mirror mounted on a vibrating surface. As the surface vibrates, the reflected light intensity changes, which a photodiode detects and converts into a signal. An Arduino reads this signal and sends it to MATLAB, where it is analyzed to extract the vibration's frequency and amplitude in real time.",
    components: ["650nm Laser Diode", "PMMA Optical Fibers", "OPT101 Photodiode", "Arduino Nano ESP32", "MATLAB (FFT Analysis)"],
    myRole: "This is my senior design (graduation) project for the Electrical Engineering program at King Faisal University, expected to be completed by January 2027. Working as part of a 3-member team on the design, mathematical modeling, and report writing, under the supervision of Dr. Mohammed Alshakhs.",
    results: "Currently in the implementation and testing phase; full results will be added once the project is complete.",
    photos: []
  }
},
  {
    id: "matlab-sample-project",
    title: "MATLAB Signal Analysis",
    category: "matlab",
    categoryLabel: "MATLAB",
    image: "assets/images/projects/matlab-project.jpg",
    shortDesc: "A signal analysis project using MATLAB to study the behavior of an electrical circuit.",
    tools: ["MATLAB", "Power Systems"],
    details: {
      problem: "Brief description of the problem this project addresses.",
      idea: "The core idea behind the solution.",
      howItWorks: "Step-by-step explanation of how the project works.",
      components: ["MATLAB Simulink", "Signal Data"],
      myRole: "My role in this project.",
      results: "The results you achieved.",
      photos: []
    }
  }
];

/* ---------------------------------------------------------
   CERTIFICATES
   file: path to the certificate file (PDF or image) inside assets/images/certificates/
--------------------------------------------------------- */
const CERTIFICATES = [
  {
    title: "Creative Engineering With Arduino",
    issuer: "IEEE KFU Student Branch",
    year: "2025",
    file: "assets/images/certificates/arduino-creative-engineering.pdf"
  }
];

/* ---------------------------------------------------------
   EXPERIENCE / TRAINING
--------------------------------------------------------- */
const EXPERIENCE = [
  {
    date: "2027",
    title: "Cooperative Training",
    org: "Aspiring to join a company in electronics / renewable energy",
    description: "Looking forward to completing my cooperative training after graduating in January 2027, and applying my academic knowledge in a real work environment."
  }
];

/* ---------------------------------------------------------
   ACHIEVEMENTS
   category: Competitions | University Projects | Academic Achievements | Workshops | Events
--------------------------------------------------------- */
const ACHIEVEMENTS = [
  {
    category: "Competitions",
    title: "Achievement Title",
    description: "Brief description of the achievement or competition."
  },
  {
    category: "Workshops",
    title: "Workshop",
    description: "Brief description of the workshop and skills gained."
  }
];
