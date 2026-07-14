

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["962994407651553302", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "d92baed9605a45a39ed7c2a2d960b1c1",
  spotifyClientSecret : "e9b29f6739de4315bc03b6d8a8e93b03",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#e11d2e",
  customEmoji: true,  // true = use custom emoji IDs from emoji.js, false = use default unicode
  emojiTheme: "redwhite", // active custom emoji theme key in emoji.js
  helpBannerUrl: "https://cdn.discordapp.com/attachments/1285343206921338890/1526599851482153050/New_Project.jpg?ex=6a579c67&is=6a564ae7&hm=e2596269defac4cc8e33d9b3c3288dece8fcfb288927c300cdd5af0554d10caf&", // Optional: set a direct image URL to show an inline banner in /help
  activityName: "JUICE GANG ON TOP", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/nszGzeNSZa",
  embedTimeout: 5,
  showProgressBar: false,  // Show progress bar in track embed
  showVisualizer: false,  // Show visualizer on music card (disabled for low-memory optimization)
  generateSongCard: true,  // custom song card image, if false uses thumbnail
  metadataTag: true,  // If true, always show Song Details even when the card image is present
  lowMemoryMode: true,   // Performance optimizations for low-memory environments (512MB RAM)
  errorLog: "", 
  nodes: [
      {
  name: "GlaceYT-2",
  password: "glace",
  host: "de-01.strixnodes.com",
  port: 2028,
  secure: false
    }
  ]
}
