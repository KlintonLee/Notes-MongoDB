/**
 * Example of creating multiple users and logging on console with inserted id
 * auto-generated by MongoDB and the total count inserted.
 * @param client MongoDB client
 */
 const createMultipleUsers = async (client, newUsers) => {
  const result = await client
    .db("my_database")
    .collection("users")
    .insertMany(newUsers);

  console.log(`examples/create-multiple-users.js - ${result.insertedCount} new users created with following id(s):`);
  console.log('examples/create-multiple-users.js -', result.insertedIds);
}

module.exports = { createMultipleUsers }