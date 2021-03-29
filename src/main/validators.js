const SPOTIFY_PLAYLIST_URL_REGEX = /open\.spotify\.com\/(user\/.+\/)?playlist\/.+/;
const APPLE_MUSIC_PLAYLIST_URL_REGEX = /(embed.)?music\.apple\.com\/.+\/playlist\/.+/;
const SUPPORTED_PLATFORMS_PLAYLIST_URL_REGEX = /open\.spotify\.com\/(user\/.+\/)?playlist\/.+|(embed.)?music\.apple\.com\/.+\/playlist\/.+/;


module.exports = {

     isValidURL : (url) =>{
        const regexp = /^(?:(?:https?):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        return regexp.test(url);
    },
    
    //how to validate that?? 
     isShortURL : (url) =>{
    
    },
    
     isSupportedPlatform : (url) =>{
        if(!SUPPORTED_PLATFORMS_PLAYLIST_URL_REGEX.test(url)){
            return false
        }
        return true
         
    },

    getDestinationPlatform : (url) =>{
        if (SPOTIFY_PLAYLIST_URL_REGEX.test(url)) {
            return "apple-music";
          } else if (APPLE_MUSIC_PLAYLIST_URL_REGEX.test(url)) {
            return "spotify";
          } else {
            throw new Error("Platform not yet supported.");
          }

    }
    
    
}
