import { Translations } from './translations.interface';

export const en: Translations = {
  nav: {
    home: 'Home',
    aboutMe: 'About me',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
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
    detailAboutTitle: 'What is this project about?',
    nextProject: 'Next project',
    githubLabel: 'GitHub',
    liveLabel: 'Live test',
    closeDialog: 'Close project details',
    items: [
      {
        name: 'Join',
        tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
        description:
          'A Slack-inspired real-time team messenger built with Angular. Create channels, exchange direct messages, and collaborate with authentication powered by Firebase.',
        image: 'assets/img/projects/join.jpg',
        githubUrl: 'https://github.com/c44n/join',
        liveUrl: 'https://join-3158.developerakademie.net/angular-projects/join/',
      },
      {
        name: 'El Pollo Loco',
        tech: ['JavaScript', 'HTML', 'CSS'],
        description:
          'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        image: 'assets/img/projects/elpolloloco.jpg',
        githubUrl: 'https://github.com/shajib07/elpolloloco-js',
        liveUrl: 'https://mdataharhossain.developerakademie.net/elpolloloco-js/',
      },
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
    privacySuffix: ' and agree to the processing of my data as outlined.',
    submitBtn: 'Say Hello :)',
    sendAnother: 'Send another',
    successMsg: 'Your message was sent successfully. I will get back to you soon!',
    errorMsg: 'Something went wrong. Please try again later.',
  },

  footer: {
    role: 'Web Developer',
    location: 'Germany',
    copyright: '© Atahar Hossain 2026',
    github: 'Github',
    linkedin: 'LinkedIn',
    email: 'Email',
    imprint: 'Imprint',
    privacy: 'Privacy',
    backToTop: 'Back to top',
  },

  errors: {
    required: 'This field is required.',
    email: 'Please enter a valid email address.',
    minLength: 'This field is too short.',
    invalidName: 'Please enter a valid name.',
  },

  imprint: {
    title: 'Legal Notice',
    sections: [
      {
        heading: 'Legal Notice',
        content:
          'Atahar Hossain\nGermany\n\nEmail: shajib.ruet07@gmail.com',
      },
      {
        heading: 'Acceptance of terms',
        content:
          'By accessing and using Portfolio (the “Product”), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.',
      },
      {
        heading: 'Scope and ownership of the product',
        content:
          'Portfolio has been developed as part of a student group project in a web development bootcamp at the Developer Akademie GmbH. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.\n\nThe design of Portfolio is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.',
      },
      {
        heading: 'Proprietary rights',
        content:
          'Aside from the design owned by Developer Akademie GmbH, we, the listed students, retain all proprietary rights in Portfolio, including any associated copyrighted material, trademarks, and other proprietary information.',
      },
      {
        heading: 'Use of the product',
        content:
          'Portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Portfolio for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Portfolio.',
      },
      {
        heading: 'Disclaimer of warranties and limitation of liability',
        content:
          'Portfolio is provided “as is” without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the Developer Akademie, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of Portfolio.',
      },
      {
        heading: 'Indemnity',
        content:
          'You agree to indemnify, defend and hold harmless us, the listed students, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of Portfolio and/or your breach of this Legal Notice.\n\nFor any questions or notices, please contact us at shajib.ruet07@gmail.com.\n\nDate: July 26, 2026',
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
