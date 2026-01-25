import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPenToSquare,
  FaPodcast,
  FaTrophy,
  FaVideo,
  FaXTwitter,
} from 'react-icons/fa6';

import type { Article } from '@/components/ArticleCarousel';
import type { IconType } from 'react-icons';

// ============================================================================
// Type Definitions
// ============================================================================

export interface ExperienceImage {
  src: string;
  alt: string;
  isSquare: boolean;
  url: string;
}

export interface ExternalResource {
  href: string;
  icon: IconType;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

// ============================================================================
// Data
// ============================================================================

export const interests: string[] = [
  'Experimentación científica',
  'Inteligencia Artificial',
  'Startups',
  'Análisis de datos',
  'Ingeniería de software',
  'Blockchain y descentralización',
  'Mentalidad Probabilística',
  'Pensamiento Crítico',
  'Aprendizaje continuo',
  'Educación Orgánica',
  'Lectura y Escritura',
  'Filosofía ecléctica',
  'Cultura humanista',
  'Leyes de la naturaleza',
  'Arte y diseño visual',
  'Música y Mezcla Deejay',
  'Autoconocimiento y expansión',
];

export const experienceImages: ExperienceImage[] = [
  {
    src: '/images/relations/university-of-bristol.png',
    alt: 'University of Bristol',
    isSquare: false,
    url: 'https://www.bristol.ac.uk/science-engineering/',
  },
  {
    src: '/images/relations/toptal.png',
    alt: 'Toptal',
    isSquare: false,
    url: 'https://www.toptal.com/developers/resume/leandro-guardia',
  },
  {
    src: '/images/relations/chevening.png',
    alt: 'Chevening',
    isSquare: true,
    url: 'https://www.chevening.org/',
  },
  {
    src: '/images/relations/ucb.png',
    alt: 'UCB',
    isSquare: true,
    url: 'https://cba.ucb.edu.bo/',
  },
  {
    src: '/images/relations/elgeniox.png',
    alt: 'Elgeniox',
    isSquare: false,
    url: 'https://elgeniox.com/',
  },
  {
    src: '/images/relations/nueva-acropolis.png',
    alt: 'Nueva Acropolis',
    isSquare: false,
    url: 'https://acropolis.org.bo/',
  },
  {
    src: '/images/relations/caff.png',
    alt: 'CAFF',
    isSquare: true,
    url: 'https://froebel.edu.bo/',
  },
  {
    src: '/images/relations/afs.png',
    alt: 'AFS',
    isSquare: true,
    url: 'https://www.afs.de/',
  },
];

export const articles: Article[] = [
  {
    title: 'Todo comienza con tus valores',
    excerpt: 'Si prestas atención, todos exponemos nuestros valores continuamente…',
    image: '/images/articles/valores.jpeg',
  },
  {
    title: 'Leer',
    excerpt:
      'Te encuentras en una isla. La brisa es lenta y cálida, acaricia tu piel y se siente familiar…',
    image: '/images/articles/leer.jpeg',
  },
  {
    title: 'Síndrome del impostor',
    excerpt:
      'Mike, el cofundador de Atlassian y representante de Australia en el evento World Entrepreneur…',
    image: '/images/articles/imposter.jpeg',
  },
  {
    title: 'Tecnología',
    excerpt:
      'El camino de tierra era irregular, estaba marcado por huellas de caballo y ruedas de carrozas arrastradas…',
    image: '/images/articles/tecnologia.jpeg',
  },
];

export const externalResources: ExternalResource[] = [
  {
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7359280843640479744/',
    icon: FaTrophy,
    label: 'Buildathon Ethereum DeFi',
  },
  {
    href: 'https://www.twitch.tv/videos/1559307063',
    icon: FaVideo,
    label: 'Fracasos como ingeniero',
  },
  {
    href: 'https://10minds.org/equipo-efectivo/',
    icon: FaPenToSquare,
    label: 'Equipos súper efectivos',
  },
  {
    href: 'https://open.spotify.com/episode/4e14GM4PlsroTX2CkElvSI?si=b6d029f75bfd4cac',
    icon: FaPodcast,
    label: '¿Cómo ganar una beca?',
  },
];

export const socialLinks: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/leandro-guardia',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/leancontinuo',
    icon: FaXTwitter,
    label: 'X (Twitter)',
  },
  {
    href: 'https://github.com/leanguardia',
    icon: FaGithub,
    label: 'GitHub',
  },
  {
    href: 'https://www.instagram.com/leancontinuo',
    icon: FaInstagram,
    label: 'Instagram',
  },
];

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Calculate grid template rows based on isSquare property of images.
 * Groups images by rows (2 per row) and determines row height.
 */
export function calculateGridTemplateRows(images: RelationImage[]): string {
  return Array.from({ length: images.length / 2 }, (_, rowIndex) => {
    const firstImageInRow = images[rowIndex * 2];
    return firstImageInRow.isSquare ? '1fr' : '0.65fr';
  }).join(' ');
}
