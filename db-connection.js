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

    return solutions;

  } catch (err) {
    return {
      statusCode: 500,
      msg: 'Something went wrong'
    }
  }
}

module.exports.getSolutions = getSolutions;
