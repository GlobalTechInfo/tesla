import { NiatAshar, Quran, Hadith, Tahlil } from './muslim.js';
// Mock the request and response objects
const req = {
  query: {
    surah: '1',      // Surah number for Quran
    ayat: '1',       // Ayat number for Quran
    kitab: 'muslim', // Book name for Hadith
    hadith: '792'    // Hadith number for Hadith
  }
};

const res = {
  json: (data) => {
    console.log('Response:', JSON.stringify(data, null, 2));  // Pretty-print the JSON response
  },
  status: (statusCode) => {
    return {
      json: (data) => {
        console.error(`Error Response (status ${statusCode}):`, JSON.stringify(data, null, 2));
      },
    };
  },
};

// Call all the functions to test them
async function testFunctions() {
  console.log('Testing NiatAshar function...');
  await NiatAshar(req, res);  // Call NiatAshar function

  console.log('Testing Quran function...');
  await Quran(req, res);  // Call Quran function

  console.log('Testing Hadith function...');
  await Hadith(req, res);  // Call Hadith function

  console.log('Testing Tahlil function...');
  await Tahlil(req, res);  // Call Tahlil function
}

// Run the tests
testFunctions();
