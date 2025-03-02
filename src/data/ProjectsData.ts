import radareImage1 from "../assets/projects/interface-completa.png";
import aiicpImage1 from "../assets/projects/comparison.png";
import aiicpImage2 from "../assets/projects/aiicp1.png";
// import aiicpImage3 from '../assets/projects/aiicp2.png';
// import aiicpImage4 from '../assets/projects/aiicp3.png';

export interface Project {
  id: number;
  name: string;
  images: string[];
  description: string;
  technologies: string[];
}

export const projectList: Project[] = [
  {
    id: 1,
    name: "RADARE - Reconciliation and Data Analysis in a Responsive Environment",
    images: [radareImage1],
    description:
      "RADARE is an advanced industrial data reconciliation system designed to process and validate large volumes of information in real-time. It supports thousands of reconciliations per minute, ensuring the integrity and consistency of processed data. With robust correction algorithms, the system eliminates 100% of inconsistencies before final consolidation. Its responsive and highly scalable architecture allows integration with multiple data sources, providing optimized performance for critical industrial environments.",
    technologies: [
      "Python",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: 2,
    name: "AIICP - Artificial Intelligence Image Correction and Augmentation Pipeline",
    images: [aiicpImage1, aiicpImage2],
    description:
      "AIICP is an automated artificial intelligence pipeline for processing, correcting, and enhancing images, particularly AI-generated pixel art. It operates through a multi-step process, beginning with image pre-processing and cleaning, followed by advanced color adjustment algorithms, upscaling, and detail reconstruction. Utilizing Deep Learning techniques, convolutional neural networks (CNNs), and enhancement methods with OpenCV, the system delivers high-quality images while preserving fidelity to the original style.",
    technologies: [
      "Python",
      "Flask",
      "TensorFlow",
      "OpenCV",
      "PIL",
      "NumPy",
      "FastAPI",
      "PyTorch",
    ],
  },
  {
    id: 3,
    name: "Lensegmentation Platform",
    images: [], // No images displayed before launch
    description:
      "Lensegmentation Platform is a state-of-the-art AI-driven system designed to analyze facial structures and recommend the most suitable glasses for each individual. Using advanced facial and eye recognition techniques, the platform evaluates facial symmetry, eye positioning, and overall facial geometry to determine the optimal lens and frame type. Leveraging deep learning models trained on vast datasets, it ensures high accuracy in predictions and personalized recommendations for users. The project is currently owned by a private company, and no images will be displayed before its official launch.",
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Deep Learning",
      "Dlib",
      "Flask",
      "FastAPI",
    ],
  },
];
