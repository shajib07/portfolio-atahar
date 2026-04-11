import { Translations } from './translations.interface';

export const de: Translations = {
  nav: {
    aboutMe: 'Über mich',
    skills: 'Fähigkeiten',
    projects: 'Projekte',
    contact: 'Kontakt',
  },

  hero: {
    role: 'Frontend Entwickler',
    checkWork: 'Meine Arbeit',
    contactMe: 'Kontakt',
    availableLabel: 'Verfügbar für Remote-Arbeit',
    ticker:
      'Verfügbar für Remote-Arbeit  •  Frontend Entwickler  •  Angular Experte  •  Offen für neue Möglichkeiten  •  ',
  },

  about: {
    label: 'Wer ich bin',
    title: 'Über mich',
    description:
      'Hallo, ich bin Atahar Hossain. Ich bin ein leidenschaftlicher Frontend-Entwickler, der es liebt, saubere, performante und barrierefreie Webanwendungen zu erstellen. Mein Hauptfokus liegt auf Angular und dem TypeScript-Ökosystem.',
    bullets: [
      'Wo arbeiten Sie derzeit oder wo möchten Sie in Zukunft arbeiten? (lokal, remote oder möglicherweise im Ausland)',
      'Zeigen Sie, dass Sie aufgeschlossen sind. Sind Sie bereit, neue Technologien zu erlernen oder sich an verschiedene Frameworks anzupassen?',
      'Eine kurze Beschreibung Ihres Problemlösungsansatzes. Wie gehen Sie Herausforderungen an? Sehen Sie jede Herausforderung als Chance?',
    ],
  },

  skills: {
    label: 'Technologien',
    title: 'Skill Set',
    description:
      'Ich bringe Erfahrung im gesamten Frontend-Stack mit. Ich freue mich darauf, mit neuen Technologien zu arbeiten und mich schnell an Veränderungen in der Webentwicklung anzupassen.',
    additionalTitle: 'Brauchen Sie eine weitere Fähigkeit?',
    additionalDescription:
      'Ich bin immer offen dafür, zu lernen und mein Wissen zu erweitern.',
    learnMore: 'Sprechen wir',
  },

  projects: {
    label: 'Portfolio',
    title: 'Ausgewählte Projekte',
    subtitle:
      'Erkunden Sie eine Auswahl meiner Arbeit – interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
    detailAboutTitle: 'Worum geht es in diesem Projekt?',
    nextProject: 'Nächstes Projekt',
    githubLabel: 'GitHub',
    liveLabel: 'Live test',
    closeDialog: 'Projektdetails schließen',
    items: [
      {
        name: 'Join',
        tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
        description:
          'Ein Slack-inspiriertes Echtzeit-Team-Messenger mit Angular. Kanäle anlegen, Direktnachrichten austauschen und zusammenarbeiten – mit Authentifizierung über Firebase.',
        image: '/assets/img/projects/join.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://github.com',
      },
      {
        name: 'El Pollo Loco',
        tech: ['JavaScript', 'HTML', 'CSS'],
        description:
          'Jump-’n’-Run- und Wurfspiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
        image: '/assets/img/projects/el-pollo-loco.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://github.com',
      },
      {
        name: 'DA Bubble',
        tech: ['Angular', 'Firebase', 'TypeScript'],
        description:
          'Eine responsive Chat-Anwendung mit Kanälen und Threads – gebaut, um skalierbare Angular-Architektur und Echtzeitdaten mit Firebase zu üben.',
        image: '/assets/img/projects/da-bubble.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://github.com',
      },
    ],
  },

  experience: {
    title: 'Was meine Kollegen über mich sagen',
    items: [
      {
        text: 'Atahar hat sich als zuverlässiger Gruppenpartner erwiesen. Seine technischen Fähigkeiten und sein proaktiver Ansatz waren entscheidend für den Erfolg unseres Projekts.',
        author: 'H. Janisch',
        role: 'Team-Partner',
      },
      {
        text: 'Ich hatte das Glück, bei der Developer Akademie mit Atahar zusammenzuarbeiten. Er blieb immer ruhig, sorgte dafür, dass unser Team erfolgreich war, war kompetent und angenehm in der Zusammenarbeit.',
        author: 'T. Schulz',
        role: 'Frontend Entwickler',
      },
      {
        text: 'Die Zusammenarbeit mit Atahar war eine Freude. Er hat sinnvolle Lösungen eingebracht und immer klar kommuniziert. Ein echter Teamplayer und ein fähiger Entwickler.',
        author: 'M. Weber',
        role: 'Projektleiter',
      },
    ],
  },

  contact: {
    label: 'Kontaktiere mich',
    title: 'Lass uns zusammenarbeiten',
    subtitle: 'Hast du ein Problem zu lösen?',
    description:
      'Ermutige Menschen, dich zu kontaktieren, und beschreibe, welche Rolle dich interessiert. Zeige, dass du ihren Projekten durch deine Arbeit einen Mehrwert hinzufügen wirst.',
    ctaText: 'Brauchst du einen Frontend-Entwickler?',
    ctaLink: 'Lass uns reden!',
    nameLabel: 'Wie heißt du?',
    namePlaceholder: 'Dein Name',
    emailLabel: 'Was ist deine E-Mail?',
    emailPlaceholder: 'deine@email.de',
    messageLabel: 'Wie kann ich dir helfen?',
    messagePlaceholder: 'Hallo Atahar, ich interessiere mich für...',
    privacyText: 'Ich habe die ',
    privacyLink: 'Datenschutzerklärung',
    submitBtn: 'Sag Hallo :)',
    successMsg: 'Deine Nachricht wurde erfolgreich gesendet. Ich melde mich bald!',
    errorMsg: 'Etwas ist schiefgelaufen. Bitte versuche es später noch einmal.',
  },

  footer: {
    role: 'Web-Entwickler',
    location: 'Deutschland',
    copyright: '© Atahar Hossain 2025',
    github: 'Github',
    linkedin: 'LinkedIn',
    email: 'E-Mail',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
  },

  errors: {
    required: 'Dieses Feld ist erforderlich.',
    email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    minLength: 'Dieses Feld ist zu kurz.',
  },

  imprint: {
    title: 'Impressum',
    sections: [
      {
        heading: 'Angaben gemäß § 5 TMG',
        content: 'Atahar Hossain\nDeutschland\nE-Mail: shajib.ruet07@gmail.com',
      },
      {
        heading: 'Verantwortlich für den Inhalt',
        content: 'Atahar Hossain',
      },
      {
        heading: 'Haftungsausschluss',
        content:
          'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Wir übernehmen jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.',
      },
    ],
  },

  privacy: {
    title: 'Datenschutzerklärung',
    intro:
      'Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Im Folgenden informieren wir Sie darüber, wie wir mit Ihren personenbezogenen Daten umgehen.',
    sections: [
      {
        heading: '1. Verantwortlicher',
        content: 'Atahar Hossain\nDeutschland\nE-Mail: shajib.ruet07@gmail.com',
      },
      {
        heading: '2. Erhobene Daten',
        content:
          'Wenn Sie das Kontaktformular auf dieser Website nutzen, werden folgende Daten erhoben: Name, E-Mail-Adresse und Ihre Nachricht. Diese Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet.',
      },
      {
        heading: '3. Rechtsgrundlage',
        content:
          'Die Verarbeitung erfolgt auf der Grundlage von Art. 6 Abs. 1 lit. f DSGVO – unserem berechtigten Interesse an der Beantwortung von Kontaktanfragen.',
      },
      {
        heading: '4. Ihre Rechte',
        content:
          'Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Zur Ausübung dieser Rechte wenden Sie sich bitte per E-Mail an uns.',
      },
      {
        heading: '5. Cookies',
        content:
          'Diese Website verwendet keine Cookies zu Tracking- oder Werbezwecken.',
      },
    ],
  },
};
