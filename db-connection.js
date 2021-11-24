require('dotenv').config();

const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.BASE_ID
);

const table = base(process.env.TAB_NAME);

const getSolutions = async () => {
  try {
    const airtableRecords =  await table.select({ view: 'Grid view' }).firstPage();
  
    const solutions = airtableRecords.map((solution) => ({
      id: solution.id,
      ...solution.fields
    }));
    console.log(JSON.stringify(solutions));
    return JSON.stringify(solutions);

  } catch (err) {
    console.error(err.message);
  }
}

exports.getSolutions = getSolutions;
