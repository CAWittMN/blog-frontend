const tech = {
  javaScript: {
    name: "JavaScript",
    icon: "https://example.com/javascript-icon.png",
    description:
      "A high-level, versatile programming language used for building interactive websites.",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  typeScript: {
    name: "TypeScript",
    icon: "https://example.com/typescript-icon.png",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript.",
    documentationUrl: "https://www.typescriptlang.org/docs/",
  },
  reactJS: {
    name: "ReactJS",
    icon: "https://example.com/reactjs-icon.png",
    description:
      "A JavaScript library for building user interfaces or UI components.",
    documentationUrl: "https://reactjs.org/docs/getting-started.html",
  },
  nodeJS: {
    name: "NodeJS",
    icon: "https://example.com/nodejs-icon.png",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    documentationUrl: "https://nodejs.org/en/docs/",
  },
  expressJS: {
    name: "ExpressJS",
    icon: "https://example.com/expressjs-icon.png",
    description:
      "A web application framework for Node.js, designed for building web applications and APIs.",
    documentationUrl: "https://expressjs.com/en/starter/installing.html",
  },
  sequelize: {
    name: "Sequelize",
    icon: "https://example.com/sequelize-icon.png",
    description:
      "A promise-based Node.js ORM for SQL-based databases like PostgreSQL and MySQL.",
    documentationUrl: "https://sequelize.org/master/",
  },
  nextUI: {
    name: "NextUI",
    icon: "https://example.com/nextui-icon.png",
    description:
      "A React-based UI library for building fast and accessible user interfaces.",
    documentationUrl: "https://nextui.org/docs/",
  },
  amplifyUI: {
    name: "AmplifyUI",
    icon: "https://example.com/amplifyui-icon.png",
    description:
      "A set of UI components for building cloud-connected apps with AWS Amplify.",
    documentationUrl: "https://ui.docs.amplify.aws/",
  },
  jquery: {
    name: "jQuery",
    icon: "https://example.com/jquery-icon.png",
    description:
      "A fast, small, and feature-rich JavaScript library for easier HTML document manipulation.",
    documentationUrl: "https://jquery.com/",
  },
  python: {
    name: "Python",
    icon: "https://example.com/python-icon.png",
    description:
      "A high-level, interpreted programming language for general-purpose programming.",
    documentationUrl: "https://docs.python.org/3/",
  },
  flask: {
    name: "Flask",
    icon: "https://example.com/flask-icon.png",
    description: "A lightweight WSGI web application framework for Python.",
    documentationUrl: "https://flask.palletsprojects.com/en/2.0.x/",
  },
  django: {
    name: "Django",
    icon: "https://example.com/django-icon.png",
    description:
      "A high-level Python web framework that encourages rapid development and clean design.",
    documentationUrl: "https://docs.djangoproject.com/en/stable/",
  },
  ruby: {
    name: "Ruby",
    icon: "https://example.com/ruby-icon.png",
    description:
      "A dynamic, open-source programming language with a focus on simplicity and productivity.",
    documentationUrl: "https://www.ruby-lang.org/en/documentation/",
  },
  rails: {
    name: "Rails",
    icon: "https://example.com/rails-icon.png",
    description:
      "A web application framework written in Ruby, following the MVC pattern.",
    documentationUrl: "https://guides.rubyonrails.org/",
  },
  html: {
    name: "HTML",
    icon: "https://example.com/html-icon.png",
    description:
      "The standard markup language for creating web pages and web applications.",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  css: {
    name: "CSS",
    icon: "https://example.com/css-icon.png",
    description:
      "A stylesheet language used for describing the presentation of a document written in HTML.",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: "https://example.com/tailwind-icon.png",
    description:
      "A utility-first CSS framework for building custom designs directly in your markup.",
    documentationUrl: "https://tailwindcss.com/docs",
  },
  postgreSQL: {
    name: "PostgreSQL",
    icon: "https://example.com/postgresql-icon.png",
    description:
      "An open-source relational database system emphasizing extensibility and SQL compliance.",
    documentationUrl: "https://www.postgresql.org/docs/",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "https://example.com/bootstrap-icon.png",
    description:
      "A popular front-end open-source toolkit for developing responsive, mobile-first websites.",
    documentationUrl: "https://getbootstrap.com/docs/",
  },
};

const projects = [
  {
    title: "StoryGen",
    url: "",
    gitHub: "",
    imageUrls: [""],
    description: "",
    stack: [
      tech.javaScript,
      tech.reactJS,
      tech.nodeJS,
      tech.expressJS,
      tech.sequelize,
      tech.html,
      tech.css,
      tech.tailwind,
      tech.nextUI,
      tech.postgreSQL,
    ],
  },
  {
    title: "Portfolio/Blog",
    url: "",
    gitHub: { frontEndUrl: "https://github.com/CAWittMN/blog-frontend" },
    images: [""],
    description: "",
    stack: [
      tech.javaScript,
      tech.reactJS,
      tech.html,
      tech.ruby,
      tech.rails,
      tech.css,
      tech.tailwind,
      tech.nextUI,
    ],
  },
];

export default projects;
