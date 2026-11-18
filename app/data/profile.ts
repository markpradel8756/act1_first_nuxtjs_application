export const profile = {
  name: 'Mark Gabriel S. Pradel',
  initials: 'MGP',
  tagline: 'BS Information Technology Student',
  avatar: '/images/pfp.png',

  intro:
    'I am a dedicated student pursuing a Bachelor of Science in Information Technology. I have a strong passion for technology and a keen interest in web development. I am constantly seeking opportunities to learn and grow in the field, and I am excited to contribute my skills and knowledge to meaningful projects.',

  welcome:
    'Thanks for stopping by! This site is a small corner of the web where you can get to know me — my studies, my skills, and the things I enjoy doing.',

  personalInfo: [
    { label: 'Full Name', value: 'Mark Gabriel S. Pradel' },
    { label: 'Age', value: '20' },
    { label: 'Location', value: 'Bayugan City, Philippines' },
    { label: 'Nationality', value: 'Filipino' },
    { label: 'Languages', value: 'English, Filipino, and Cebuano' },
    { label: 'Email', value: 'markgabrielpradel@gmail.com' }
  ],

  education: [
    {
      level: 'College',
      school: 'Caraga State University - Main Campus',
      program: 'Bachelor of Science in Information Technology',
      details: '3rd Year · Expected graduation year: 2029',
      current: true
    },
    {
      level: 'Senior High School',
      school: 'Agusan Del Sur College, Inc.',
      program: 'Technical-Vocational-Livelihood Strand (TVL) · Information and Communication Technology (ICT)',
      details: '2022 – 2024',
      current: false
    }
  ],

  // Technical skills
  technicalSkills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Git'],

  interests: ['Web Development', 'Programming', 'UI/UX Design', 'Emerging Technology'],

  expertise: [
    { title: 'Web Development', description: 'Building responsive websites with HTML, CSS, JavaScript, Vue.js, and Nuxt.js.' },
    { title: 'Front-End Development', description: 'Creating accessible interfaces and modern layouts with Tailwind CSS.' }
  ],

  // Hobbies
  hobbies: [
    { icon: 'game', title: 'Gaming', description: 'I enjoy playing games and exploring new challenges, stories, and strategies.' },
    { icon: 'hiking', title: 'Hiking', description: 'I enjoy hiking and spending time outdoors while exploring scenic trails.' },
    { icon: 'mic', title: 'Singing', description: 'I enjoy singing and expressing myself through music.' },
    { icon: 'cycling', title: 'Cycling', description: 'I enjoy cycling and staying active while exploring different places.' }
  ]
}
