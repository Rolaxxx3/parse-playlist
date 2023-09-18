import fs from 'fs'
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer'

const rawdata = fs.readFileSync('./payload.json');
const { json } = JSON.parse(rawdata);

if (!json) {
  throw new Error('invalid payload structure')
}

const csvWriter = createCsvWriter({
  path: './result.csv',
  header: [
    { id: 'name', title: 'title' },
    { id: 'artist_display_name', title: 'artist' },
    { id: 'collection_display_name', title: 'album' },
    { id: 'view_url', title: 'Apple Music URL' },
  ],
});

csvWriter.writeRecords(json).then(() => {
  console.log('CSV file created successfully');
}).catch((err) => {
  console.error('Error writing CSV file:', err);
});
