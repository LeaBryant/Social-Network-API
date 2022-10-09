const users = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const email = [
  '1233@gmail.com',
  '1233@gmail.com',
  '1233@gmail.com',
  '1233@gmail.com',
  '1233@gmail.com',
  '1233@gmail.com',
  '1233@gmail.com',
  '1233@gmail.com',
  '1233@gmail.com',
  '1233@gmail.com',
];

const thoughtText = [
  'Howdy',
  'Whats going on',
  'How are you!'
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getrandomUser = () =>
  `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;

// Function to generate random assignments that we can add to student object.
const getrandomEmails = (int) => {
  return getRandomArrItem(email);
};

const getrandomText = () => {
  return getRandomArrItem(thoughtText);
}

// Export the functions for use in seed.js
module.exports = { getrandomUser, getrandomEmails, getrandomText };
