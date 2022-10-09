const connection = require('../config/connection');
const { Users, Thoughts } = require('../models');
const { getrandomUser, getrandomEmails, getrandomText} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Course.deleteMany({});

  // Drop existing students
  await Users.deleteMany({});
  await Thoughts.deleteMany({});

  // Create empty array to hold the students
  const users = [];
  const thoughts = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const users = getrandomUser();
    const thoughts = getrandomText();

    
    thoughts.push({
      thoughts,
      users,
    });
  }

  // Add students to the collection and await the results
  await Thoughts.collection.insertMany(thoughts);

  // Add courses to the collection and await the results
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const users = getrandomUser();
    const email = getrandomEmails();
    const thought = [i]

    users.push({
      email,
      users,
    });
  }

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
