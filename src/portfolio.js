const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io',
  title: 'About Me',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Edward Carey',
  role: 'Software Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://drive.google.com/drive/folders/1pY1Y8-ozNWf-ASg8x8JocIccgI7_2KiQ?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/edward-carey-835b1a214/',
    github: 'https://github.com/Ed-joe',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Redistricting Data Viewer',
    description:
      `The Redistricting Data Viewer is a dynamic website developed in collaboration with two other developers in order to cleanly view redistricting data metrics and information involving congressional redistricting in 2022. 
       The website includes an interactive map, easy tools for plan to plan comparison, and data for Nevada, Pennsylvania, and Illinois. Lastly, the website includes summary metrics for each state, when using a set of 10000 
       plausible randomly generated plans created using a recombination algorithm on Stony Brook University's high performance computing cluster.`,
    stack: ["Spring Boot", "MySQL", "GCP", "Boostrap", "Python", "High Performance Computing"],
    livePreview: 'https://ed-joe.github.io/redistricting-dataviewer-front-end/',
  },
  {
    name: "Hell's Fury",
    description:
      `Hell's Fury is an action packed top-down dungeon crawler experience developed in collaberation with two other developers, using a custom TypeScript game engine.
      The game includes 8 unique levels, 7 unique boss fight's each with their own state machine AI's, 2 unique enemy AI's, and custom music, art, and sound effects.
      Hell's Fury was the runner up in the Stony Brook University Game Programming Competition, which was judged in front of a panel of industry professionals`,
    stack: ["TypeScript", "HTML/CSS"],
    sourceCode: 'https://github.com/Ed-joe/Hells-Fury',
    livePreview: 'https://hells-fury.firebaseapp.com/',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'Spring Boot',
  'Python',
  'Java',
  'MySql',
  'React',
  'Node.js',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'edwardjoecarey@gmail.com',
}

export { header, about, projects, skills, contact }
