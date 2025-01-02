import fetch from 'node-fetch';
import Base from './lib/Base.js';

const creator = 'Qasim Ali ❤️';


export async function NiatAshar(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/NiatAshar.json'));

    if (!response.ok) {
      throw new Error('Failed to fetch Niat Ashar data');
    }

    const data = await response.json();

    res.json({
      result: data,
      creator: 'Qasim Ali ❤️',
      status: true,
      timestamp: new Date().toISOString(),
      message: 'Request processed successfully'
    });

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      status: false,
      creator: 'Qasim Ali ❤️',
      message: 'Failed to process the request',
      error: error.message
    });
  }
}

// Another function (e.g., for Fajr prayer)
export async function NiatMaghrib(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/NiatMaghrib.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}
export async function NiatIsha(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/NiatIsya.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}

export async function NiatDzuhur(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/NiatDzuhur.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}
export async function NiatFajar(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/NiatShubuh.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}
export async function AsmaulHusna(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/islam/AsmaulHusna.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}
export async function StoryProphets(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/dataKisahNabi.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}
export async function NiatSalaht(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/dataNiatShalat.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}
export async function BaccanSalaht(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/dataBacaanShalat.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}

export async function DoaHarian(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/dataDoaHarian.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}
export async function AyatKursi(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/dataAyatKursi.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}
export async function Wirid(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/dataWirid.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}
export async function Tahlil(req, res) {
  try {
    const response = await fetch(encodeURI('https://raw.githubusercontent.com/GlobalTechInfo/Islamic-Database/main/data/dataTahlil.json'));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Niat Fajr data' });
  }
}
// Quran Function
export async function Quran(req, res, next) {
  const surah = req.query.surah;
  const ayat = req.query.ayat;

  if (!surah) return res.json({ status: false, creator: creator, message: "Please provide the 'surah' Number." });
  if (!ayat) return res.json({ status: false, creator: creator, message: "Please provide the 'ayat' Number." });

  try {
    // Corrected template literal (backticks)
    const response = await fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Quran data' });
  }
}

// Hadith Function
export async function Hadith(req, res, next) {
  const kitab = req.query.kitab;
  const nomor = req.query.nomor;

  if (!kitab) return res.json({ status: false, creator: creator, message: "Please provide the 'Book' Name." });
  if (!nomor) return res.json({ status: false, creator: creator, message: "Please provide the 'Hadith' Number." });

  try {
    // Corrected template literal (backticks)
    const response = await fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`));
    const data = await response.json();
    res.json({ result: data });
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    res.status(500).json({ error: 'Failed to fetch Hadith data' });
  }
}

// BaseData function (async)
export async function BaseData(req, res, next) {
  const { type, encode, decode } = req.query;

  // Check if type is provided
  if (!type) {
    return res.json({
      status: false,
      creator,
      code: 404,
      message: 'Please provide the type parameter. Available types: base64, base32'
    });
  }

  try {
    // Base64 encoding/decoding
    if (type === 'base64') {
      if (encode) {
        const result = await Base('b64enc', encode);
        return res.json({
          status: true,
          creator,
          result
        });
      }
      if (decode) {
        const result = await Base('b64dec', decode);
        return res.json({
          status: true,
          creator,
          result
        });
      }
    } 
    // Base32 encoding/decoding
    else if (type === 'base32') {
      if (encode) {
        const result = await Base('b32enc', encode);
        return res.json({
          status: true,
          creator,
          result
        });
      }
      if (decode) {
        const result = await Base('b32dec', decode);
        return res.json({
          status: true,
          creator,
          result
        });
      }
    } else {
      // Invalid type response
      return res.json({
        status: false,
        creator,
        message: "Invalid type. Available types: base64, base32."
      });
    }

    // If neither 'encode' nor 'decode' are provided
    if (!(encode || decode)) {
      return res.json({
        status: false,
        creator,
        message: "Please provide either 'encode' or 'decode' parameter."
      });
    }
  } catch (e) {
    console.log('Error:', color(e, 'red'));
    return res.status(500).json({ error: 'Something went wrong' });
  }
}


// A utility function
export function getGreeting() {
  return "Assalamu Alaikum!"; // A simple utility function
}
