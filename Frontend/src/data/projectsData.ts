import playlistImage from '../assets/Images/Visualisasi data playlist musik.jpg';
import bikeSharingImage from '../assets/Images/Visualisasi data berbagi sepeda.jpg';
import streamingImage from '../assets/Images/Simulasi Streaming Video HLS.jpg';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Analisis-Spotify-Playlist-personal',
    category: 'Data Analysis',
    image: playlistImage,
    description:
      'An in-depth analysis of a personal Spotify playlist using Python, Pandas, and Matplotlib to uncover musical patterns and preferences.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
  },
  {
    id: 2,
    title: 'Bike Sharing Data Analytics Dashboard',
    category: 'Data Analysis',
    image: bikeSharingImage,
    description:
      'This project focuses on the data wrangling process (gathering, assessing, and cleaning data), Exploratory Data Analysis (EDA), and data visualization, as well as the creation of an interactive dashboard using Streamlit to analyze bike rental trends based on time, weather, and user type.',
    tech: ['Python', 'Pandas', 'Plotly'],
  },
  {
    id: 3,
    title: ' HLS Video Streaming Simulation (Proof of Concept)',
    category: 'Web App',
    image: streamingImage,
    description:
      'Proyek ini adalah simulasi sistem live streaming berbasis web yang dibangun menggunakan Node.js, Express, FFmpeg, dan Hls.js. Proyek ini dibuat untuk mempelajari arsitektur pengiriman media (media delivery pipeline), pemrosesan format siaran HLS (HTTP Live Streaming), serta bagaimana transmisi video berjalan di balik platform streaming modern.',
    tech: ['Express.js', 'Node.js', 'FFmpeg', 'HTML5'],
  },
];