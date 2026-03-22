export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizData: Question[] = [
  {
    id: 1,
    question: "What component is used to boost the signal strength during transmission?",
    options: ["Transmitter", "Channel", "Amplifier", "Receiver"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which type of communication is one-way only (e.g., a megaphone)?",
    options: ["Duplex", "Simplex", "Multiplex", "Broadcast"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the foundation of the modern Internet switching method?",
    options: ["Circuit Switching", "Line Switching", "Packet Switching", "Frame Switching"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Which network classification covers a city or a large campus?",
    options: ["LAN", "PAN", "WAN", "MAN"],
    correctAnswer: 3
  },
  {
    id: 5,
    question: "Which topology is considered the most reliable because the failure of one node doesn't affect others?",
    options: ["Bus", "Star", "Ring", "Mesh"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "How many layers are in the ISO/OSI Model?",
    options: ["4", "5", "7", "8"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Who developed the World Wide Web (WWW) in 1989?",
    options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "What does SaaS stand for in cloud computing?",
    options: ["System as a Service", "Software as a Storage", "Software as a Service", "Storage as a Service"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "Which wireless technology is ideal for connecting peripherals like headphones?",
    options: ["Wi-Fi", "Bluetooth", "LTE", "5G"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "What is the role of a Router in a network?",
    options: ["Physical adapter", "Intelligent device for specific data", "Traffic controller", "Central computer"],
    correctAnswer: 2
  }
];
