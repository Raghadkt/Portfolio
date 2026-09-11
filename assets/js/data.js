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
    id: "soil-moisture-indicator",
    title: "Soil Moisture Indicator",
    category: "electronics",
    categoryLabel: "Electronics",
    image: "assets/images/projects/soil-moisture.jpg",
    shortDesc: "A device that measures soil moisture and signals when watering is needed, using a moisture sensor and a microcontroller.",
    tools: ["Arduino", "C/C++", "Sensors", "Circuit Design"],
    details: {
      problem: "Difficulty knowing the right time to water plants, leading to wasted water or dried-out soil.",
      idea: "Design a simple circuit that reads the soil moisture level and displays the result directly (digital readout / light indicator).",
      howItWorks: "The moisture sensor measures the electrical resistance of the soil, then the Arduino converts the reading into an understandable value and displays it, activating an indicator when moisture drops below a certain threshold.",
      components: ["Arduino Uno", "Soil Moisture Sensor", "LEDs", "Resistors", "Breadboard", "Jumper Wires"],
      myRole: "Designed the circuit, wrote the code, tested and calibrated the sensor.",
      results: "A device that works with acceptable accuracy to give a clear alert when the soil dries out, and can be extended later with an automatic irrigation system.",
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
