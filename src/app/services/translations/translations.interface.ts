export interface NavTranslations {
  aboutMe: string;
  skills: string;
  projects: string;
  contact: string;
}

export interface HeroTranslations {
  role: string;
  checkWork: string;
  contactMe: string;
  availableLabel: string;
  ticker: string;
}

export interface AboutTranslations {
  label: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface SkillTranslations {
  label: string;
  title: string;
  description: string;
  additionalTitle: string;
  additionalDescription: string;
  learnMore: string;
}

export interface Project {
  name: string;
  tech: string[];
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export interface ProjectTranslations {
  label: string;
  title: string;
  subtitle: string;
  detailAboutTitle: string;
  nextProject: string;
  githubLabel: string;
  liveLabel: string;
  closeDialog: string;
  items: Project[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface ExperienceTranslations {
  title: string;
  items: Testimonial[];
}

export interface ContactTranslations {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  privacyText: string;
  privacyLink: string;
  submitBtn: string;
  successMsg: string;
  errorMsg: string;
}

export interface FooterTranslations {
  role: string;
  location: string;
  copyright: string;
  github: string;
  linkedin: string;
  email: string;
  imprint: string;
  privacy: string;
}

export interface ErrorTranslations {
  required: string;
  email: string;
  minLength: string;
}

export interface ImprintTranslations {
  title: string;
  sections: { heading: string; content: string }[];
}

export interface PrivacyTranslations {
  title: string;
  intro: string;
  sections: { heading: string; content: string }[];
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  skills: SkillTranslations;
  projects: ProjectTranslations;
  experience: ExperienceTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  errors: ErrorTranslations;
  imprint: ImprintTranslations;
  privacy: PrivacyTranslations;
}
