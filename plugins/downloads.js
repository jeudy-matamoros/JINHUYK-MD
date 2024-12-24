const {
   smd,
   fetchJson,
   astroJson,
   fancytext,
   yt,
   getBuffer,
   smdBuffer,
   prefix,
   Config,
 } = require("../lib");
 const {
   search,
   download
 } = require("aptoide-scraper");
 const googleTTS = require("google-tts-api");
 const ytdl = require("@distube/ytdl-core");
 const yts = require("secktor-pack");
 const fs = require("fs-extra");
 const axios = require("axios");
 const fetch = require("node-fetch");
 var videotime = 2000;
 const {
   cmd
 } = require("../lib/plugins");
 cmd({
  pattern: "pinterest",
  desc: "Download an image from Pinterest.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<imageUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let imageUrl = _0x2a29f6.args[0];
    if (!imageUrl) {
      return await _0x5e533c.reply("*Please provide a valid Pinterest image URL.*");
    }

    // Download Pinterest image
    let image = await _0x5e533c.downloadPinterestImage(imageUrl);
    await _0x5e533c.sendImage(image);
    await _0x5e533c.reply("Pinterest image downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: pinterest", _0x14d7b9);
  }
});
cmd({
  pattern: "mediafire",
  desc: "Download a file from Mediafire.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<fileUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let fileUrl = _0x2a29f6.args[0];
    if (!fileUrl) {
      return await _0x5e533c.reply("*Please provide a valid Mediafire file URL.*");
    }

    // Download file from Mediafire
    let file = await _0x5e533c.downloadFromMediafire(fileUrl);
    await _0x5e533c.sendFile(file);
    await _0x5e533c.reply("File downloaded from Mediafire.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: mediafire", _0x14d7b9);
  }
});
cmd({
  pattern: "insta",
  desc: "Download an Instagram photo/video.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<mediaUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let mediaUrl = _0x2a29f6.args[0];
    if (!mediaUrl) {
      return await _0x5e533c.reply("*Please provide a valid Instagram media URL.*");
    }

    // Download Instagram media
    let media = await _0x5e533c.downloadInstagramMedia(mediaUrl);
    await _0x5e533c.sendMedia(media);
    await _0x5e533c.reply("Instagram media downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: insta", _0x14d7b9);
  }
});
cmd({
  pattern: "fb",
  desc: "Download a Facebook video.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<videoUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let videoUrl = _0x2a29f6.args[0];
    if (!videoUrl) {
      return await _0x5e533c.reply("*Please provide a valid Facebook video URL.*");
    }

    // Download Facebook video
    let video = await _0x5e533c.downloadFacebookVideo(videoUrl);
    await _0x5e533c.sendVideo(video);
    await _0x5e533c.reply("Facebook video downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: fb", _0x14d7b9);
  }
});
cmd({
  pattern: "ss",
  desc: "Take a screenshot of a website.",
  category: "Downloads",
  react: "📸",
  filename: __filename,
  use: "<url>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let url = _0x2a29f6.args[0];
    if (!url) {
      return await _0x5e533c.reply("*Please provide a valid URL to take a screenshot of.*");
    }

    // Take screenshot
    let screenshot = await _0x5e533c.takeScreenshot(url);
    await _0x5e533c.sendImage(screenshot);
    await _0x5e533c.reply("Screenshot taken successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: ss", _0x14d7b9);
  }
});
cmd({
  pattern: "spotify",
  desc: "Download a song from Spotify.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<songUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let songUrl = _0x2a29f6.args[0];
    if (!songUrl) {
      return await _0x5e533c.reply("*Please provide a valid Spotify song URL.*");
    }

    // Download song from Spotify
    let song = await _0x5e533c.downloadSpotifySong(songUrl);
    await _0x5e533c.sendAudio(song);
    await _0x5e533c.reply("Spotify song downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: spotify", _0x14d7b9);
  }
});
cmd({
  pattern: "reddit",
  desc: "Download a media from Reddit.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<postUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let postUrl = _0x2a29f6.args[0];
    if (!postUrl) {
      return await _0x5e533c.reply("*Please provide a valid Reddit post URL.*");
    }

    // Download Reddit media
    let media = await _0x5e533c.downloadRedditMedia(postUrl);
    await _0x5e533c.sendMedia(media);
    await _0x5e533c.reply("Reddit media downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: reddit", _0x14d7b9);
  }
});
cmd({
  pattern: "pinterest",
  desc: "Download an image from Pinterest.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<imageUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let imageUrl = _0x2a29f6.args[0];
    if (!imageUrl) {
      return await _0x5e533c.reply("*Please provide a valid Pinterest image URL.*");
    }

    // Download Pinterest image
    let image = await _0x5e533c.downloadPinterestImage(imageUrl);
    await _0x5e533c.sendImage(image);
    await _0x5e533c.reply("Pinterest image downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: pinterest", _0x14d7b9);
  }
});
cmd({
  pattern: "upload",
  desc: "Upload a file to the server.",
  category: "Downloads",
  react: "📤",
  filename: __filename,
  use: "<filePath>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let filePath = _0x2a29f6.args[0];
    if (!filePath) {
      return await _0x5e533c.reply("*Please provide a valid file path to upload.*");
    }

    // Upload file
    let file = await _0x5e533c.uploadFile(filePath);
    await _0x5e533c.reply("File uploaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: upload", _0x14d7b9);
  }
});
cmd({
  pattern: "twitter",
  desc: "Download a media from Twitter.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<tweetUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let tweetUrl = _0x2a29f6.args[0];
    if (!tweetUrl) {
      return await _0x5e533c.reply("*Please provide a valid Twitter tweet URL.*");
    }

    // Download Twitter media
    let media = await _0x5e533c.downloadTwitterMedia(tweetUrl);
    await _0x5e533c.sendMedia(media);
    await _0x5e533c.reply("Twitter media downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: twitter", _0x14d7b9);
  }
});
cmd({
  pattern: "tiktok",
  desc: "Download a TikTok video.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<videoUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let videoUrl = _0x2a29f6.args[0];
    if (!videoUrl) {
      return await _0x5e533c.reply("*Please provide a valid TikTok video URL.*");
    }

    // Download TikTok video
    let video = await _0x5e533c.downloadTikTokVideo(videoUrl);
    await _0x5e533c.sendVideo(video);
    await _0x5e533c.reply("TikTok video downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: tiktok", _0x14d7b9);
  }
});
cmd({
  pattern: "story",
  desc: "Download a story from Instagram/Twitter/other platforms.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<platform> <username>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let platform = _0x2a29f6.args[0];
    let username = _0x2a29f6.args[1];
    if (!platform || !username) {
      return await _0x5e533c.reply("*Please provide a valid platform and username.*");
    }

    // Download story based on platform
    let story = await _0x5e533c.downloadStory(platform, username);
    await _0x5e533c.sendMedia(story);
    await _0x5e533c.reply(`Story from ${platform} downloaded successfully.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: story", _0x14d7b9);
  }
});
cmd({
  pattern: "fullss",
  desc: "Take a full screenshot of a website.",
  category: "Downloads",
  react: "📸",
  filename: __filename,
  use: "<url>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let url = _0x2a29f6.args[0];
    if (!url) {
      return await _0x5e533c.reply("*Please provide a valid URL to take a full screenshot of.*");
    }

    // Take full screenshot
    let fullScreenshot = await _0x5e533c.takeFullScreenshot(url);
    await _0x5e533c.sendImage(fullScreenshot);
    await _0x5e533c.reply("Full screenshot taken successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: fullss", _0x14d7b9);
  }
});
cmd({
  pattern: "video",
  desc: "Download a video from a URL.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<videoUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let videoUrl = _0x2a29f6.args[0];
    if (!videoUrl) {
      return await _0x5e533c.reply("*Please provide a valid video URL.*");
    }

    // Download video
    let video = await _0x5e533c.downloadVideo(videoUrl);
    await _0x5e533c.sendVideo(video);
    await _0x5e533c.reply("Video downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: video", _0x14d7b9);
  }
});
cmd({
  pattern: "song",
  desc: "Download a song from a URL.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<songUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let songUrl = _0x2a29f6.args[0];
    if (!songUrl) {
      return await _0x5e533c.reply("*Please provide a valid song URL.*");
    }

    // Download song
    let song = await _0x5e533c.downloadSong(songUrl);
    await _0x5e533c.sendAudio(song);
    await _0x5e533c.reply("Song downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: song", _0x14d7b9);
  }
});
cmd({
  pattern: "yta",
  desc: "Download audio from a YouTube video.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<videoUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let videoUrl = _0x2a29f6.args[0];
    if (!videoUrl) {
      return await _0x5e533c.reply("*Please provide a valid YouTube video URL.*");
    }

    // Download YouTube audio
    let audio = await _0x5e533c.downloadYouTubeAudio(videoUrl);
    await _0x5e533c.sendAudio(audio);
    await _0x5e533c.reply("YouTube audio downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: yta", _0x14d7b9);
  }
});
cmd({
  pattern: "ytv",
  desc: "Download a YouTube video.",
  category: "Downloads",
  react: "📥",
  filename: __filename,
  use: "<videoUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let videoUrl = _0x2a29f6.args[0];
    if (!videoUrl) {
      return await _0x5e533c.reply("*Please provide a valid YouTube video URL.*");
    }

    // Download YouTube video
    let video = await _0x5e533c.downloadYouTubeVideo(videoUrl);
    await _0x5e533c.sendVideo(video);
    await _0x5e533c.reply("YouTube video downloaded successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: ytv", _0x14d7b9);
  }
});
cmd({
  pattern: "play",
  desc: "Play music from a URL.",
  category: "Downloads",
  react: "🎶",
  filename: __filename,
  use: "<musicUrl>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let musicUrl = _0x2a29f6.args[0];
    if (!musicUrl) {
      return await _0x5e533c.reply("*Please provide a valid music URL.*");
    }

    // Play music
    let audio = await _0x5e533c.playMusic(musicUrl);
    await _0x5e533c.sendAudio(audio);
    await _0x5e533c.reply("Music is now playing.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: play", _0x14d7b9);
  }
});
cmd({
  pattern: "tgs",
  desc: "Search for Telegram stickers based on a keyword.",
  category: "Downloads",
  react: "🔍",
  filename: __filename,
  use: "<keyword>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let keyword = _0x2a29f6.args[0];
    if (!keyword) {
      return await _0x5e533c.reply("*Please provide a keyword to search for stickers.*");
    }

    // Call Telegram API to search stickers
    let stickers = await _0x5e533c.searchStickers(keyword);
    if (stickers.length === 0) {
      return await _0x5e533c.reply("No stickers found for the given keyword.");
    }

    // Send the first sticker found
    await _0x5e533c.sendSticker(stickers[0]);
    await _0x5e533c.reply(`Here is a sticker for the keyword: ${keyword}`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: tgs", _0x14d7b9);
  }
});
cmd({
  pattern: "tgs2",
  desc: "Search for Telegram stickers based on a keyword.",
  category: "Downloads",
  react: "🔍",
  filename: __filename,
  use: "<keyword>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let keyword = _0x2a29f6.args[0];
    if (!keyword) {
      return await _0x5e533c.reply("*Please provide a keyword to search for stickers.*");
    }

    // Hypothetical searchStickers function (replace with actual implementation)
    let stickers = await searchStickers(keyword);
    if (stickers.length === 0) {
      return await _0x5e533c.reply("No stickers found for the given keyword.");
    }

    // Send the first sticker found
    await _0x5e533c.sendSticker(stickers[0]);
    await _0x5e533c.reply(`Here is a sticker for the keyword: ${keyword}`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: tgs", _0x14d7b9);
  }
});

// Example of how searchStickers might be implemented (you can adapt this to your setup)
async function searchStickers(keyword) {
  // Example: Stickers could be stored as an array of objects with a `keywords` property.
  const stickerDatabase = [
    { stickerId: "sticker_1", keywords: ["funny", "cat"] },
    { stickerId: "sticker_2", keywords: ["love", "heart"] },
    // More stickers...
  ];

  // Search through the sticker database for the keyword
  let foundStickers = stickerDatabase.filter(sticker => sticker.keywords.includes(keyword));

  // Return the matching stickers' IDs
  return foundStickers.map(sticker => sticker.stickerId);
}
