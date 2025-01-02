const Qasim = require('api-qasim');

(async () => {

     // === Google Image ===
    const searchQuery = "cat";  // Example search query
    let googleImageResponse = await Qasim.googleImage(searchQuery);  // Fetch image URLs for the search query
    console.log('Google Image Search Results:', googleImageResponse);  // Log image URLs

    // === GitHub Clone ===
    const gitUrl = "https://github.com/GlobalTechInfo/ULTRA-MD";  // Example GitHub URL
    let gitcloneResponse = await Qasim.gitclone(gitUrl);  // Fetch GitHub clone data
    console.log('GitHub Clone Data:', gitcloneResponse);  // Log GitHub clone response

    // === Facebook Usage ===
    const fbtext = "https://www.facebook.com/share/r/12DxYVDBCJA/";
    let fbResponse = await Qasim.fbdl(fbtext);
    let fbData = fbResponse.data;
    console.log('Facebook Data:', fbData);

    // === Instagram Usage ===
    const instatext = "https://www.instagram.com/reel/DBNx1HCK33C/?igsh=MWs0eDFjcHE5eTM1aA==";
    let igResponse = await Qasim.igdl(instatext);
    let igData = igResponse.data;
    console.log('Instagram Data:', igData);

    // === Mediafire Dl ===
    const mediafireUrl = "https://www.mediafire.com/file/jdu6pvahngo353i/whatsapp+Beta+business+by+(+AsepOfc+)+2.24.22.5.apk/file";
    let mediafireResponse = await Qasim.mediafire(mediafireUrl);
    let mediafireData = mediafireResponse;
    console.log('MediaFire Data:', mediafireData);

  } catch (error) {
    console.error('Error:', error);  // Fixed the syntax error
  }
}

();
