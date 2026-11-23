// Datos del portafolio. Mantenerlos separados de los componentes permite
// reutilizar cada componente pasando la información mediante props.

export const profile = {
  name: 'Daniel Castañeda Tovar',
  email: 'doco93229@gmail.com',
  phone: '+57 302 213 7152',
  greeting: "Hi, I'm Daniel Castañeda Tovar!",
  about:
    'I am a software development technologist from SENA with experience building full stack web applications. I work with HTML5, CSS3, JavaScript and Bootstrap on the front end, and Node.js and PHP on the back end, along with MySQL, PostgreSQL and MariaDB databases.',
}

export const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recommendations', href: '#recommendations' },
]

export const skills = [
  { id: 1, name: 'HTML', years: '2 years experience', icon: 'bi-filetype-html', color: '#e83e8c' },
  { id: 2, name: 'CSS', years: '2 years experience', icon: 'bi-filetype-css', color: '#38bdf8' },
  { id: 3, name: 'JavaScript', years: '1 years experience', icon: 'bi-filetype-js', color: '#c2185b' },
  { id: 4, name: 'React', years: '2 months experience', icon: 'bi-braces', color: '#0284c7' },
  { id: 5, name: 'Java', years: '2 months experience', icon: 'bi-cup-hot-fill', color: '#f472b6' },
  { id: 6, name: 'Node.js', years: '2 months experience', icon: 'bi-hexagon-fill', color: '#0ea5e9' },
  { id: 7, name: 'PHP', years: '5 months experience', icon: 'bi-filetype-php', color: '#be185d' },
  { id: 8, name: 'GitHub', years: '1 years experience', icon: 'bi-github', color: '#56bebe' },
  { id: 9, name: 'c#', years: '1 years experience', icon: 'bi-github', color: '#56bebe' },

]

export const projects = [
  {
    id: 1,
    title: 'Next Tech Mech DOOM',
    description:
      'Developed an eCommerce website for technology products with shopping cart, login and registration, product search and an external search redirect, using HTML, CSS, JavaScript and PHP',
  },
  {
    id: 2,
    title: 'MiMini Minimercado',
    description:
      'Built a minimarket management platform with customer, employee, administrator and delivery panels, order statuses and real-time delivery tracking using Node.js, Express, MySQL, Socket.IO, HTML, CSS and JavaScript',
  },
  {
    id: 3,
    title: 'To Do List',
    description:
      'Created a task organizer that allows adding, completing and deleting tasks, with custom reminder alerts and sound notifications. Developed with HTML, CSS and JavaScript and published on GitHub Pages',
  },
  {
    id: 4,
    title: 'Personal Blog',
    description:
      'Designed a personal blog to share interests, ideas, goals and future plans, including a section about my dream office. Developed with HTML and CSS and published on GitHub Pages',
  },
  { id: 5,
    title: 'Portfolio Website',
    description:
      'Created a responsive portfolio website to showcase my projects and skills, with a modern design and smooth animations. Developed with React, Bootstrap and JavaScript and published on GitHub Pages',
  },
]

export const initialRecommendations = [
  {
    id: 1,
    author: '',
    message:
      'Daniel is a very quick learner and quickly grasps key concepts of Web development. He got a great attitude & he is an excellent team player. He has a curious mind and asks the right question. He takes initiative within a team and has potentials to lead the team.',
  },
  {
    id: 2,
    author: '',
    message:
      'Working with Daniel has been an awesome experience. He is highly knowledgeable and always goes the extra step to make sure everything is right. For any future projects that need his expertise I would definitely want to work with him again.',
  },
  {
    id: 3,
    author: '',
    message:
      'I had worked along with Daniel during the initial phase of our venture which needed Web development. He is a committed resource who has in depth knowledge about the domain. He will be an asset for any organisation!',
  },
]
