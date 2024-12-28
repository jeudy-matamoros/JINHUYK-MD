//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "509 35965792";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/xvYDAsD.jpeg,https://i.imgur.com/TAGPcMC.jpeg,https://endpoint.web.id/server/file/I8dkDXm1nJDtOI75.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJyV3FwQm1XRGdtanAyTVY4Q1Zick4xK0toU29TdVNMNEhhTC90c1JGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2t1SXRDektmU1U3WERIdS9JQ1liM0tONmN3aVU2ZC9IdTM0a3N2MlZUST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTzg5OTRaZkpFWWpLYUttS2JMRTV1cERuWkgxeEFlTTJIcjdIVlB0MUZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlbG54OXVhSkFWU1FlMFVGZXZyMC9uYUFUK2lKUDVGaG81YWZOaVVzYnkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IRlQ4WWtwU0toUFllN0g3Zm1CRmtHWnNYTkZMdVVSVVNibTg4T2RNRkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN4SzJBMU9kbDFkdkZjenRha3lqdFhrQjhmdWZSN1ptMUxBbnFXMk5YVm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZ3azVmWnkxRmpJencyTDFFYVhvTXNCV1Vuc0RRdTNzWHM2M0pja3ptQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzQ0S1A0MlRCOE42UXFIbFdsZ2p3WWMzL1g2TlRCRWFIYXY3RlNwY0ZTWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhiQ2d1QkJ4NmljMy9IcHN3Sjc5SXQvR2hpdzluWVByZ1JuVkwzSFU3czZXbGNSd29iNmJLdGJYWFM0VWdFRlo5NUZ5dlV6Ynp2Sk1PbkNWb2JubGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJ0MkFtYkc0K2x1WEZ4NGx1RjZXd0JObEFHVi9QeStxS2FpcWFLTG12S2tFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVY0NtZGdVd1NwMlpLcGhwNFdySzhBIiwicGhvbmVJZCI6IjljMjM2MzBhLTNiNzEtNDgxMi1iYjg1LTVlMWQzMTA0OGMwOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1a0hXR2dZZ3BoVGpqR2k3VEpVdjRxck81QzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDlPTVBUOTg2SExiNHJOT3dFN1NRWjNsYkpNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlERVNUWlBIIiwibWUiOnsiaWQiOiI1MDkzNTk2NTc5MjoxMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBc2hsZXkgSmV1ZHkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w3RDVKQUNFSUd6d2JzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImoxZ2gzR2JvcTVIZnE3WVdnQnFlYy9IdHlyQUc4bnZoelkrUFNnanJWWFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlI2cTVNTEd6Sytvd3Ywd2tmeThWUjVOajZ6KzQ0QUZkQjdHSUtGTFhESStTY2c5Rk9XYjg3dXh5Y0lHVkZFMFkyRm1CU3JGRmd5TG1BR3hVbHhFckFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvTnJNY09uZjdGQ3NhTzNIeEdhdVBPTEUyNzVNOFovcEpJWHZvYkl1aWxUbFlEYlZSQWFiK201OXN2U1M1d0FaMC94YzBaNWRWT1BwTThBVUJVbm5qQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTM1OTY1NzkyOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk5WUlkeG02S3VSMzZ1MkZvQWFublB4N2Nxd0J2Sjc0YzJQajBvSTYxVjAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU0MTYyMDd9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊",
  packname: process.env.PACK_NAME || "𝐉𝐈𝐍𝐇𝐘𝐔𝐊-𝐌𝐃",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "𝑃𝒂𝒚𝒆𝒓 𝑈𝒏𝒌𝒏𝒐𝒘𝒏",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
