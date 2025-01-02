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
    const fbtext = "Facebook url";
    let fbResponse = await Qasim.fbdl(fbtext);
    let fbData = fbResponse.data;
    console.log('Facebook Data:', fbData);

    // === Instagram Usage ===
    const instatext = "Instagram Url";
    let igResponse = await Qasim.igdl(instatext);
    let igData = igResponse.data;
    console.log('Instagram Data:', igData);

    // === Mediafire Dl ===
    const mediafireUrl = "Mediafire Url";
    let mediafireResponse = await Qasim.mediafire(mediafireUrl);
    let mediafireData = mediafireResponse;
    console.log('MediaFire Data:', mediafireData);

  } catch (error) {
    console.error('Error:', error);  // Fixed the syntax error
  }
}

();
