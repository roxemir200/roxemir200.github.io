/**
 * Toutes les données du portfolio sont ici.
 * Pour mettre à jour le site, modifie uniquement ce fichier.
 */

const base = import.meta.env.BASE_URL

export const profile = {
  firstName: 'Amir',
  lastName: 'Djebbi',
  shortName: 'amir',
  roles: ['Développeur Full-Stack', 'Passionné DevOps', 'Compétiteur en algorithmique'],
  title: 'Étudiant Ingénieur Informatique — Full-Stack & DevOps',
  tagline:
    "Je conçois des applications web complètes, de l'interface au cluster Kubernetes : du code propre, testé, conteneurisé et déployé en continu.",
  photo: `${base}profile.png`,
  cvs: [
    { lang: 'FR', label: 'CV en français', file: `${base}Amir_Djebbi_CV.pdf` },
    { lang: 'EN', label: 'Resume in English', file: `${base}Amir_Djebbi_Resume_EN.pdf` },
  ],
  location: 'Manouba, Tunisie',
  email: 'amirdjebbi02@gmail.com',
  phone: '+216 27 073 247',
  availability: 'Disponible pour un stage PFE — 2027',
  socials: {
    github: 'https://github.com/roxemir200',
    linkedin: 'https://www.linkedin.com/in/djebbi-amir-523314188/',
    hackerrank: 'https://www.hackerrank.com/profile/emir_djebbi',
    codeforces: 'https://codeforces.com/profile/PowerPeak',
  },
}

/**
 * Formulaire de contact, sans backend.
 * - Web3Forms (recommandé) : clé gratuite sur https://web3forms.com (saisir son email → la clé arrive par mail).
 *   La clé est publique par conception : elle peut rester dans le code.
 * - Sinon, repli sur FormSubmit (https://formsubmit.co), qui exige une activation par email.
 */
export const contactForm = {
  web3formsKey: '',
  formsubmitEndpoint: `https://formsubmit.co/ajax/${profile.email}`,
  subjectPrefix: '[Portfolio]',
}

export const navLinks = [
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'competitive', label: 'Algorithmique' },
  { id: 'education', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]

export const heroStats = [
  { value: '3', label: 'Stages réalisés' },
  { value: '8+', label: 'Projets livrés' },
  { value: '1400+', label: 'Tests automatisés' },
  { value: '2×', label: 'Participant TCPC' },
]

export const about = {
  headline: 'Du code à la production, sans rupture.',
  paragraphs: [
    "Je suis étudiant en 5e année du cycle ingénieur en informatique à ESPRIT, spécialisé en développement Full-Stack et en culture DevOps. J'aime construire des produits complets : une API Spring Boot ou Node.js solide, une interface React soignée, et toute la chaîne qui les amène en production.",
    "Mes stages m'ont permis de travailler sur des projets réels : une plateforme B2B pour le BTP déployée sur Kubernetes, des tests unitaires C# dans une équipe Agile, et de la maintenance réseau. En parallèle, j'intègre l'intelligence artificielle dans mes projets, comme le moteur de recommandation LightGBM de RentCar.",
    "La programmation compétitive en C++ (TCPC, HackerRank, Codeforces) a renforcé ma rigueur et ma capacité à résoudre des problèmes complexes sous pression. Je recherche aujourd'hui un stage PFE pour contribuer à des projets logiciels ambitieux.",
  ],
  highlights: [
    {
      icon: 'layers',
      title: 'Full-Stack de bout en bout',
      text: 'React, Spring Boot, Node.js, Symfony : de la base de données à l’interface utilisateur.',
    },
    {
      icon: 'rocket',
      title: 'Culture DevOps',
      text: 'CI/CD GitHub Actions, Docker, Kubernetes, SonarQube et monitoring Grafana.',
    },
    {
      icon: 'brain',
      title: 'Résolution de problèmes',
      text: 'Algorithmique avancée en C++ : graphes, programmation dynamique, structures de données.',
    },
    {
      icon: 'sparkles',
      title: 'IA appliquée',
      text: 'Intégration de modèles de Machine Learning (Python, LightGBM) dans des produits réels.',
    },
  ],
}

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  type: 'Stage' | 'Compétition'
  current?: boolean
  points: string[]
  tags: string[]
  link?: { label: string; url: string }
}

export const experiences: Experience[] = [
  {
    role: 'Stagiaire Full-Stack & DevOps',
    company: 'CCA Tunisie',
    location: 'Tunis, Tunisie',
    period: 'Juil. – Août 2026',
    type: 'Stage',
    points: [
      'Développé BMP.tn, plateforme web B2B pour le secteur du BTP (stack MERN), connectant experts, artisans et fabricants autour de la gestion de projets et de devis.',
      'Mis en place les pipelines CI/CD, la conteneurisation Docker et le déploiement sur cluster Kubernetes.',
      'Intégré l’analyse continue de la qualité (SonarQube) et un système de monitoring/alerting pour la détection proactive des incidents.',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'Kubernetes', 'SonarQube', 'CI/CD'],
    link: { label: 'Voir le code', url: 'https://github.com/AhmeDrira/PIDEVxBMP' },
  },
  {
    role: 'Stagiaire Tests & Assurance Qualité .NET',
    company: 'Axe Finance',
    location: 'Lac 1, Tunisie',
    period: 'Juil. – Août 2025',
    type: 'Stage',
    points: [
      'Conçu des tests unitaires C# (xUnit), améliorant la couverture et la fiabilité du code.',
      'Travaillé au sein d’une équipe Agile pratiquant DevOps et la livraison continue.',
    ],
    tags: ['C#', '.NET', 'xUnit', 'Agile', 'DevOps'],
  },
  {
    role: 'Stagiaire Réseaux & Maintenance Informatique',
    company: 'Bona',
    location: 'Mégrine, Tunisie',
    period: 'Juillet 2023',
    type: 'Stage',
    points: [
      'Configuré le parc matériel et assuré le support utilisateur.',
      'Participé à l’administration du réseau local.',
    ],
    tags: ['Réseaux', 'Support', 'Maintenance'],
  },
]

export type ProjectCategory = 'Full-Stack' | 'DevOps' | 'Desktop' | 'Front-end' | 'Jeu'

export type Project = {
  title: string
  subtitle: string
  description: string
  highlights?: string[]
  categories: ProjectCategory[]
  tags: string[]
  featured?: boolean
  period?: string
  team?: string
  /** Image dans /public (ex: "projects/rentcar.png"). Laisser vide pour un visuel généré. */
  image?: string
  links: { code?: string; demo?: string }
}

export const projects: Project[] = [
  {
    title: 'RentCar',
    subtitle: 'Location de voitures Full-Stack avec IA & DevOps',
    description:
      'Plateforme complète de location de voitures avec paiement en ligne, chat temps réel, notifications, interface multilingue FR/EN/AR et tableau de bord administrateur.',
    highlights: [
      'Moteur de recommandation Machine Learning (Python, LightGBM)',
      '4 pipelines CI/CD GitHub Actions et 1400+ tests automatisés',
      'Docker, hébergement Render & Vercel, supervision Grafana Cloud avec alerting',
    ],
    categories: ['Full-Stack', 'DevOps'],
    tags: ['Spring Boot', 'React', 'TypeScript', 'Stripe', 'Python', 'LightGBM', 'GitHub Actions', 'Docker', 'Grafana'],
    featured: true,
    period: '2026',
    links: {
      code: 'https://github.com/roxemir200/rentcar-backend',
      // TODO: le déploiement Vercel est en pause (503). Remettre quand il est réactivé :
      // demo: 'https://rentcar-backend-one.vercel.app',
    },
  },
  {
    title: 'BMP.tn',
    subtitle: 'Marketplace B2B pour le BTP — stage CCA Tunisie',
    description:
      'Plateforme web qui connecte experts, artisans et fabricants du bâtiment autour de la gestion de projets et de devis, déployée sur un cluster Kubernetes.',
    highlights: [
      'Stack MERN complète',
      'CI/CD, conteneurisation Docker et déploiement Kubernetes',
      'Qualité continue SonarQube, monitoring et alerting',
    ],
    categories: ['Full-Stack', 'DevOps'],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'Kubernetes', 'SonarQube'],
    featured: true,
    period: '2026',
    links: { code: 'https://github.com/AhmeDrira/PIDEVxBMP' },
  },
  {
    title: 'E-Learning Microservices',
    subtitle: 'Plateforme d’apprentissage en architecture microservices',
    description:
      'Plateforme d’apprentissage en ligne découpée en microservices, avec authentification et gestion des accès sécurisée via Keycloak.',
    categories: ['Full-Stack'],
    tags: ['Microservices', 'Spring Boot', 'Keycloak', 'Docker'],
    period: 'Projet académique',
    links: { code: 'https://github.com/AhmeDrira/Microservice' },
  },
  {
    title: 'FitConnect',
    subtitle: 'Solution multi-plateforme pour salles de sport',
    description:
      'Application desktop JavaFX et site web Symfony synchronisés sur une base de données commune : gestion des salles, coachs, événements, programmes et équipements.',
    categories: ['Full-Stack', 'Desktop'],
    tags: ['Java', 'JavaFX', 'Symfony', 'PHP', 'MySQL'],
    period: 'Projet académique',
    team: 'Projet d’équipe',
    links: { code: 'https://github.com/ghassensaddem/3A5_FitConnect' },
  },
  {
    title: 'Cabinet Médical',
    subtitle: 'Application desktop de gestion de cabinet médical',
    description:
      'Suivi des patients, planification des séances et génération automatisée de comptes-rendus PDF.',
    categories: ['Desktop'],
    tags: ['C++', 'Qt', 'MySQL'],
    period: 'Projet académique',
    links: {},
  },
  {
    title: 'Fitness Gym Web',
    subtitle: 'Plateforme de gestion de salle de sport',
    description: 'Application web de gestion de salle de sport construite selon une architecture MVC en PHP.',
    categories: ['Full-Stack'],
    tags: ['PHP', 'MVC', 'HTML', 'CSS', 'JavaScript'],
    period: 'Projet académique',
    links: { code: 'https://github.com/forcex10/fitness-gym-web' },
  },
  {
    title: 'Site vitrine responsive',
    subtitle: 'Démonstration front-end',
    description: 'Site vitrine responsive réalisé en HTML, CSS et JavaScript, centré sur la mise en page et l’interactivité.',
    categories: ['Front-end'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: { code: 'https://github.com/roxemir200/Cristiano-Ronaldo-personal-site' },
  },
  {
    title: 'Jeu 2D en C',
    subtitle: 'Jeu vidéo avec SDL 1.2',
    description: 'Jeu 2D développé en C avec SDL 1.2 : logique de jeu, collisions et affichage graphique bas niveau.',
    categories: ['Jeu'],
    tags: ['C', 'SDL'],
    period: 'Projet académique',
    links: { code: 'https://github.com/azizbenammar7/Projet1A' },
  },
]

export const projectFilters: ('Tous' | ProjectCategory)[] = ['Tous', 'Full-Stack', 'DevOps', 'Desktop', 'Front-end', 'Jeu']

export type Skill = { name: string; icon: string }
export type SkillGroup = { title: string; icon: string; skills: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Langages',
    icon: 'code',
    skills: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'python' },
      { name: 'C / C++', icon: 'cplusplus' },
      { name: 'C#', icon: 'csharp' },
      { name: 'PHP', icon: 'php' },
      { name: 'SQL', icon: 'sql' },
      { name: 'HTML / CSS', icon: 'html' },
    ],
  },
  {
    title: 'Frameworks',
    icon: 'layers',
    skills: [
      { name: 'React.js', icon: 'react' },
      { name: 'Node.js', icon: 'node' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Spring Boot', icon: 'spring' },
      { name: 'Symfony', icon: 'symfony' },
      { name: '.NET', icon: 'dotnet' },
      { name: 'JavaFX', icon: 'java' },
      { name: 'Qt', icon: 'qt' },
    ],
  },
  {
    title: 'DevOps & Outils',
    icon: 'rocket',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'SonarQube', icon: 'sonarqube' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'Keycloak', icon: 'keycloak' },
      { name: 'Git', icon: 'git' },
      { name: 'xUnit', icon: 'test' },
    ],
  },
  {
    title: 'Bases de données & Concepts',
    icon: 'database',
    skills: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Machine Learning', icon: 'ml' },
      { name: 'Microservices', icon: 'microservices' },
      { name: 'Agile / Scrum', icon: 'agile' },
      { name: 'POO', icon: 'oop' },
      { name: 'Algorithmique', icon: 'algo' },
    ],
  },
]

export const competitive = {
  intro:
    'La programmation compétitive est ma salle d’entraînement : elle m’apprend à analyser vite, à coder juste et à travailler en équipe sous pression.',
  tcpc: {
    title: 'TCPC — Tunisian Collegiate Programming Contest',
    editions: ['2024', '2025'],
    photo: `${base}tcpc.webp`,
    photoAlt: 'Participants au TCPC devant le panneau des partenaires (ACPC, ICPC)',
    description:
      'Compétition universitaire de programmation de référence en Tunisie, au format ICPC (3 par équipe, un seul ordinateur, 5 heures). J’y ai représenté ESPRIT lors de deux éditions consécutives.',
    points: [
      'Problèmes algorithmiques avancés en C++ : graphes, programmation dynamique, structures de données',
      'Résolution sous forte contrainte de temps et gestion de la pression',
      'Répartition des problèmes et communication au sein de l’équipe',
    ],
  },
  platforms: [
    {
      platform: 'HackerRank',
      handle: '@emir_djebbi',
      value: '5★',
      label: 'Problem Solving',
      description: 'Badges obtenus en résolvant des défis algorithmiques et SQL, plus une certification vérifiée.',
      badges: [
        { name: 'Problem Solving', stars: 5 },
        { name: 'SQL', stars: 3 },
      ],
      url: 'https://www.hackerrank.com/profile/emir_djebbi',
    },
    {
      platform: 'Codeforces',
      handle: '@PowerPeak',
      value: '135',
      label: 'Problèmes résolus',
      description: 'Entraînement régulier sur les problèmes et contests Codeforces pour progresser en algorithmique.',
      badges: [],
      url: 'https://codeforces.com/profile/PowerPeak',
    },
  ],
}

export const education = [
  {
    degree: 'Diplôme d’Ingénieur en Informatique',
    school: 'ESPRIT — École Supérieure Privée d’Ingénierie et de Technologies',
    location: 'Tunis, Tunisie',
    period: 'Sept. 2022 – Sept. 2027',
    detail: 'Cursus de 5 ans — actuellement en 5e année.',
  },
  {
    degree: 'Baccalauréat — Section Mathématiques',
    school: 'Lycée Hamouda Becha',
    location: 'Manouba, Tunisie',
    period: '2022',
    detail: '',
  },
]

export const certifications = [
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: '19 août 2023',
    image: `${base}certificates/hackerrank-problem-solving.png`,
    url: 'https://www.hackerrank.com/certificates/0b8de7e6bf00',
  },
]

export const languages = [
  { name: 'Arabe', level: 'Langue maternelle', value: 100 },
  { name: 'Français', level: 'Avancé', value: 85 },
  { name: 'Anglais', level: 'Intermédiaire', value: 65 },
]

export const engagement = [
  { name: 'IEEE — Chapitre étudiant', detail: 'Hackathons' },
  { name: 'Club ACM', detail: 'Programmation compétitive' },
  { name: 'Club Chess Esprit', detail: 'Échecs' },
]
