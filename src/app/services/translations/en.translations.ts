import { Translations } from './translations.interface';

export const en: Translations = {
  nav: {
    aboutMe: 'About me',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },

  hero: {
    role: 'Frontend Developer',
    checkWork: 'Check my work',
    contactMe: 'Contact me',
    availableLabel: 'Available for remote work',
    ticker:
      '  Available for remote work  •  Frontend Developer  •  Angular Expert  •  Open to opportunities  •',
  },

  about: {
    label: 'Who I Am',
    title: 'About me',
    description:
      "Hey there, I'm Atahar Hossain. I am a passionate Frontend Developer who loves building clean, performant and accessible web applications. My main focus is Angular and the broader TypeScript ecosystem.",
    bullets: [
      'Where are you currently working or would you like to work in the future? (locally, remotely, or potentially abroad)',
      'Show that you are open-minded. Are you comfortable learning about new technologies or adapting to different frameworks?',
      'A brief description of your problem-solving approach. How do you tackle challenges? Do you see every challenge as an opportunity? How can you include problem-solving examples from your own experience, past projects and collaborations?',
    ],
  },

  skills: {
    label: 'Technologies',
    title: 'Skill Set',
    description:
      'I bring experience across the full frontend stack. Highlight your main technologies, your eagerness to work with them, and your comfort adapting to new technologies. Show how important it is for you to keep up with the rapid changes in web development.',
    additionalTitle: 'You need another skill?',
    additionalDescription:
      'I am always open to learning and expanding on my previous knowledge.',
    learnMore: "Let's talk",
  },

  projects: {
    label: 'Portfolio',
    title: 'Featured Projects',
    subtitle:
      'Explore a selection of my work here – interact with projects to see my skills in action.',
    items: [
      { name: 'Join', tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'] },
      { name: 'El Pollo Loco', tech: ['HTML', 'CSS', 'JavaScript'] },
      { name: 'DA Bubble', tech: ['Angular', 'Firebase', 'TypeScript'] },
    ],
  },

  experience: {
    title: 'What my colleagues say about me',
    items: [
      {
        text: 'Atahar has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
        author: 'H. Janisch',
        role: 'Team Partner',
      },
      {
        text: 'I had the good fortune of working on a project at the Developer Akademie with Atahar. He always stayed calm, made sure our team was set up for success, was knowledgeable, easy to work with and I would work with him again given the chance.',
        author: 'T. Schulz',
        role: 'Frontend Developer',
      },
      {
        text: 'Working with Atahar was a pleasure. He contributed meaningful solutions and always communicated clearly. A true team player and a skilled developer.',
        author: 'M. Weber',
        role: 'Project Lead',
      },
    ],
  },

  contact: {
    label: 'Contact me',
    title: "Let's work\ntogether",
    subtitle: 'Got a problem to solve?',
    description:
      'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.',
    ctaText: 'Need a Frontend developer?',
    ctaLink: "Let's talk!",
    nameLabel: "What's your name?",
    namePlaceholder: 'Your name goes here',
    emailLabel: "What's your email?",
    emailPlaceholder: 'youremail@email.com',
    messageLabel: 'How can I help you?',
    messagePlaceholder: 'Hello Atahar, I am interested in...',
    privacyText: "I've read the ",
    privacyLink: 'privacy policy',
    submitBtn: 'Say Hello :)',
    successMsg: 'Your message was sent successfully. I will get back to you soon!',
    errorMsg: 'Something went wrong. Please try again later.',
  },

  footer: {
    role: 'Web Developer',
    location: 'Germany',
    copyright: '© Atahar Hossain 2025',
    github: 'Github',
    linkedin: 'LinkedIn',
    email: 'Email',
    imprint: 'Imprint',
    privacy: 'Privacy',
  },

  errors: {
    required: 'This field is required.',
    email: 'Please enter a valid email address.',
    minLength: 'This field is too short.',
  },

  imprint: {
    title: 'Imprint',
    sections: [
      {
        heading: 'Information according to § 5 TMG',
        content:
          'Atahar Hossain\nGermany\nEmail: shajib.ruet07@gmail.com',
      },
      {
        heading: 'Responsible for content',
        content: 'Atahar Hossain',
      },
      {
        heading: 'Disclaimer',
        content:
          'The contents of this website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness and topicality of the content.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    intro:
      'The protection of your personal data is very important to us. Below we inform you about how we handle your personal data.',
    sections: [
      {
        heading: '1. Data Controller',
        content:
          'Atahar Hossain\nGermany\nEmail: shajib.ruet07@gmail.com',
      },
      {
        heading: '2. Data collected',
        content:
          'When you use the contact form on this website, the following data is collected: name, email address, and your message. This data is used solely to respond to your enquiry.',
      },
      {
        heading: '3. Legal basis',
        content:
          'Processing is based on Art. 6 (1) (f) GDPR – our legitimate interest in responding to contact requests.',
      },
      {
        heading: '4. Your rights',
        content:
          'You have the right to access, rectify, delete and restrict the processing of your personal data at any time. To exercise these rights, please contact us via email.',
      },
      {
        heading: '5. Cookies',
        content:
          'This website does not use cookies for tracking or advertising purposes.',
      },
    ],
  },
};
