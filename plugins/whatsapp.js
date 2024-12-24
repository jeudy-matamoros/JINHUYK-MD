const moment = require("moment-timezone");
const Config = require("../config");
let { smd, prefix, updateProfilePicture, parsedJid } = require("../lib");
const { cmd } = require("../lib/plugins");
let mtypes = ["imageMessage"];
smd(
  {
    pattern: "pp",
    desc: "Set profile picture",
    category: "whatsapp",
    use: "<reply to image>",
    fromMe: true,
    filename: __filename,
  },
  async (_0x4f9f9f) => {
    try {
      let _0x3d8b6f = mtypes.includes(_0x4f9f9f.mtype)
        ? _0x4f9f9f
        : _0x4f9f9f.reply_message;
      if (!_0x3d8b6f || !mtypes.includes(_0x3d8b6f?.mtype || "need_Media")) {
        return await _0x4f9f9f.reply("*Reply to an image, dear*");
      }
      return await updateProfilePicture(
        _0x4f9f9f,
        _0x4f9f9f.user,
        _0x3d8b6f,
        "pp"
      );
    } catch (_0x18308f) {
      await _0x4f9f9f.error(_0x18308f + "\n\ncommand : pp", _0x18308f);
    }
  }
);
cmd({
  pattern: "clear",
  desc: "Clears all messages in the chat.",
  category: "WhatsApp",
  react: "🧹",
  filename: __filename,
  use: ""
}, async (_0x5e533c) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    // Clear all messages
    await _0x5e533c.clearMessages();
    await _0x5e533c.reply("All messages have been cleared.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: clear", _0x14d7b9);
  }
});
cmd({
  pattern: "dlt",
  desc: "Deletes a specific message in the chat.",
  category: "WhatsApp",
  react: "🗑️",
  filename: __filename,
  use: "<messageId>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    let messageId = _0x2a29f6.args[0];
    if (!messageId) {
      return await _0x5e533c.reply("*Please provide a valid message ID to delete.*");
    }

    // Delete message
    await _0x5e533c.deleteMessage(messageId);
    await _0x5e533c.reply(`Message with ID ${messageId} has been deleted.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: dlt", _0x14d7b9);
  }
});
cmd({
  pattern: "delete",
  desc: "Deletes a specific message in the chat.",
  category: "WhatsApp",
  react: "❌",
  filename: __filename,
  use: "<messageId>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    let messageId = _0x2a29f6.args[0];
    if (!messageId) {
      return await _0x5e533c.reply("*Please provide a valid message ID to delete.*");
    }

    // Delete message
    await _0x5e533c.deleteMessage(messageId);
    await _0x5e533c.reply(`Message with ID ${messageId} has been deleted.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: delete", _0x14d7b9);
  }
});
cmd({
  pattern: "contacts",
  desc: "Shows all contacts in the group.",
  category: "WhatsApp",
  react: "📱",
  filename: __filename,
  use: ""
}, async (_0x5e533c) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    let contacts = await _0x5e533c.getContacts();
    await _0x5e533c.reply(`Contacts in this group: \n${contacts.join("\n")}`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: contacts", _0x14d7b9);
  }
});
cmd({
  pattern: "online",
  desc: "Check if the bot is online.",
  category: "WhatsApp",
  react: "🟢",
  filename: __filename,
  use: ""
}, async (_0x5e533c) => {
  try {
    let status = await _0x5e533c.getBotOnlineStatus();
    await _0x5e533c.reply(`The bot is ${status ? "online" : "offline"}.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: online", _0x14d7b9);
  }
});
cmd({
  pattern: "read",
  desc: "Marks all unread messages as read.",
  category: "WhatsApp",
  react: "✅",
  filename: __filename,
  use: ""
}, async (_0x5e533c) => {
  try {
    // Mark all unread messages as read
    await _0x5e533c.markMessagesAsRead();
    await _0x5e533c.reply("All unread messages have been marked as read.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: read", _0x14d7b9);
  }
});
cmd({
  pattern: "call",
  desc: "Make a call to a contact.",
  category: "WhatsApp",
  react: "📞",
  filename: __filename,
  use: "<contact>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let contact = _0x2a29f6.args[0];
    if (!contact) {
      return await _0x5e533c.reply("*Please provide a contact to call.*");
    }

    // Initiate call
    await _0x5e533c.callContact(contact);
    await _0x5e533c.reply(`Calling ${contact}...`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: call", _0x14d7b9);
  }
});
cmd({
  pattern: "status",
  desc: "Check the bot's status.",
  category: "WhatsApp",
  react: "💬",
  filename: __filename,
  use: ""
}, async (_0x5e533c) => {
  try {
    let status = await _0x5e533c.getBotStatus();
    await _0x5e533c.reply(`The bot status is: ${status}`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: status", _0x14d7b9);
  }
});
cmd({
  pattern: "caption",
  desc: "Set a caption for media.",
  category: "WhatsApp",
  react: "🖼️",
  filename: __filename,
  use: "<caption>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let caption = _0x2a29f6.args.join(" ");
    if (!caption) {
      return await _0x5e533c.reply("*Please provide a caption for the media.*");
    }

    // Set caption for media
    await _0x5e533c.setMediaCaption(caption);
    await _0x5e533c.reply(`Caption has been set to: "${caption}"`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: caption", _0x14d7b9);
  }
});
cmd({
  pattern: "scstatus",
  desc: "Set the status for the group chat.",
  category: "WhatsApp",
  react: "🔒",
  filename: __filename,
  use: "<status>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let status = _0x2a29f6.args.join(" ");
    if (!status) {
      return await _0x5e533c.reply("*Please provide a status message for the group.*");
    }

    // Set the group chat's status
    await _0x5e533c.setGroupStatus(status);
    await _0x5e533c.reply(`Group status has been set to: "${status}"`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: scstatus", _0x14d7b9);
  }
});
cmd({
  pattern: "setstatus",
  desc: "Set the bot's status.",
  category: "WhatsApp",
  react: "📝",
  filename: __filename,
  use: "<status>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let status = _0x2a29f6.args.join(" ");
    if (!status) {
      return await _0x5e533c.reply("*Please provide a status message.*");
    }

    // Set the bot's status
    await _0x5e533c.setBotStatus(status);
    await _0x5e533c.reply(`Bot status has been set to: "${status}"`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: setstatus", _0x14d7b9);
  }
});
cmd({
  pattern: "poll",
  desc: "Create a poll in the group.",
  category: "WhatsApp",
  react: "📊",
  filename: __filename,
  use: "<question> <option1> <option2> ..."
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let question = _0x2a29f6.args[0];
    let options = _0x2a29f6.args.slice(1).join(", ");
    if (!question || !options) {
      return await _0x5e533c.reply("*Please provide a question and options for the poll.*");
    }

    // Create poll
    await _0x5e533c.createPoll(question, options);
    await _0x5e533c.reply(`Poll created: \n*${question}*\nOptions: ${options}`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: poll", _0x14d7b9);
  }
});
cmd({
  pattern: "doc",
  desc: "Send a document to the group.",
  category: "WhatsApp",
  react: "📄",
  filename: __filename,
  use: "<document>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let document = _0x2a29f6.args[0];
    if (!document) {
      return await _0x5e533c.reply("*Please provide the document to send.*");
    }

    // Send document
    await _0x5e533c.sendDocument(document);
    await _0x5e533c.reply("Document sent.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: doc", _0x14d7b9);
  }
});
cmd({
  pattern: "vv",
  desc: "Voice message command.",
  category: "WhatsApp",
  react: "🎙️",
  filename: __filename,
  use: "<message>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    let message = _0x2a29f6.args.join(" ");
    if (!message) {
      return await _0x5e533c.reply("*Please provide a message to send as a voice note.*");
    }

    // Send voice message
    await _0x5e533c.sendVoiceMessage(message);
    await _0x5e533c.reply("Voice message sent.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: vv", _0x14d7b9);
  }
});
cmd(
  {
    pattern: "save",
    desc: "Save whatsapp status",
    category: "whatsapp",
    filename: __filename,
    use: "< status >",
  },
  async (message) => {
    try {
      let mm =
        message.reply_message && message.reply_message.status
          ? message.reply_message
          : false;
      if (mm) {
        message.bot.forwardOrBroadCast(message.user, mm, {
          quoted: { key: mm.key, message: mm.message },
        });
      } else message.send("*reply to whatsapp status*");
    } catch (e) {
      await message.error(`${e}\n\ncommand : #(Status Saver)`, e, false);
    }
  }
);
const regexSend = new RegExp(
  `\\b(?:${["send", "share", "snd", "give", "save", "sendme", "forward"].join(
    "|"
  )})\\b`,
  "i"
);
smd({ on: "quoted" }, async (message, text) => {
  try {
    let mm = message.reply_message.status ? message.reply_message : false;
    if (mm && regexSend.test(text.toLowerCase())) {
      message.bot.forwardOrBroadCast(
        message.fromMe ? message.user : message.from,
        mm,
        { quoted: { key: mm.key, message: mm.message } }
      );
    }
  } catch (e) {
    console.log(e);
  }
});

global.waPresence =
  process.env.WAPRESENCE && process.env.WAPRESENCE === "online"
    ? "available"
    : process.env.WAPRESENCE || "";
global.api_smd = "https://api-smd.onrender.com";

let status = false,
  times = 0;
smd({ on: "main" }, async (message, text, { icmd }) => {
  try {
    if (!status) {
      try {
        status = true;
      } catch (e) {}
    }

    if (message.status) return;
    if (
      `${global.readmessagefrom}`.includes(message.senderNum) ||
      ["yes", "true", "ok", "sure"].includes(global.readmessage) ||
      (icmd && ["yes", "true", "ok", "sure"].includes(global.readcmds))
    )
      message.bot.readMessages([message.key]);
  } catch (e) {
    console.log(e);
  }
});

smd({ on: "text" }, async (message, text, { icmd }) => {
  try {
    if (
      ["unavailable", "available", "composing", "recording", "paused"].includes(
        waPresence
      )
    )
      message.bot.sendPresenceUpdate(waPresence, message.from);
    if (message.isAstro && !message.fromMe && !message.text.startsWith("$"))
      message.react("🤖");
  } catch (e) {
    console.log(e);
  }
});

smd({ on: "status" }, async (message, text) => {
  try {
    if (
      `${global.read_status_from}`
        .split(",")
        .includes(message.key.participant.split("@")[0]) ||
      ["yes", "true", "ok", "sure"].includes(global.read_status) ||
      message.fromMe ||
      message.isAstro
    ) {
      await message.bot.readMessages([{ ...message.key, fromMe: false }]);
    }
    if (
      (`${global.save_status_from}`
        .split(",")
        .includes(message.key.participant.split("@")[0]) ||
        ["yes", "true", "ok", "sure"].includes(global.save_status)) &&
      !message.fromMe
    ) {
      await message.bot.forwardOrBroadCast(message.user, message, {
        quoted: { key: message.key, message: message.message },
      });
    }
  } catch (e) {
    console.log(e);
  }
});
