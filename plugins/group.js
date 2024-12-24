const {
   updateProfilePicture,
   parsedJid
 } = require("../lib");
 const {
   sck,
   smd,
   send,
   Config,
   tlang,
   sleep,
   getAdmin,
   prefix
 } = require("../lib");
 const astro_patch = require("../lib/plugins");
 const {
   cmd
 } = astro_patch;
 const grouppattern = /https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/g;
 cmd({
   pattern: "setsubject",
   alias: ["setname"],
   desc: "Changes the group subject.",
   category: "group",
   react: "📝",
   filename: __filename,
   use: "<new subject>"
}, async (_0x5e533c, _0x2a29f6) => {
   try {
     if (!_0x5e533c.isGroup) {
       return _0x5e533c.reply(tlang().group);
     }
     if (!_0x5e533c.isBotAdmin) {
       return await _0x5e533c.reply("*`excuse me but I am not promoted to the rank of administrator it is difficult to execute the given`*");
     }
     let newSubject = _0x2a29f6.args.join(" ");
     if (!newSubject) {
       return await _0x5e533c.reply("*Provide a new subject for the group!*");
     }
     await _0x5e533c.bot.groupUpdateSubject(_0x5e533c.chat, newSubject);
     await _0x5e533c.reply("*Group subject updated successfully to:* " + newSubject);
   } catch (_0x14d7b9) {
     await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: setsubject", _0x14d7b9);
   }
});
cmd({
   pattern: "setdesc",
   alias: ["description"],
   desc: "Sets a new description for the group.",
   category: "group",
   react: "📄",
   filename: __filename,
   use: "<new description>"
}, async (_0x5e533c, _0x2a29f6) => {
   try {
     if (!_0x5e533c.isGroup) {
       return _0x5e533c.reply(tlang().group);
     }
     if (!_0x5e533c.isBotAdmin) {
       return await _0x5e533c.reply("");
     }
     let newDescription = _0x2a29f6.args.join("*`excuse me but I am not promoted to the rank of administrator it is difficult to execute the given`*");
     if (!newDescription) {
       return await _0x5e533c.reply("*Provide a new description for the group!*");
     }
     await _0x5e533c.bot.groupUpdateDescription(_0x5e533c.chat, newDescription);
     await _0x5e533c.reply("*Group description updated successfully!*");
   } catch (_0x14d7b9) {
     await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: setdesc", _0x14d7b9);
   }
});
cmd({
   pattern: "add",
   alias: ["invite"],
   desc: "Adds a user to the group using their phone number.",
   category: "group",
   react: "👋",
   filename: __filename,
   use: "<number>"
}, async (_0x5e533c, _0x2a29f6) => {
   try {
     if (!_0x5e533c.isGroup) {
       return _0x5e533c.reply(tlang().group);
     }
     if (!_0x5e533c.isBotAdmin) {
       return await _0x5e533c.reply("*`excuse me but I am not promoted to the rank of administrator it is difficult to execute the given😅`*");
     }
     let number = _0x2a29f6.args[0];
     if (!number) {
       return await _0x5e533c.reply("*Provide a valid phone number to add!*");
     }
     if (!number.match(/^\d{10,15}$/)) {
       return await _0x5e533c.reply("*Invalid phone number format! Use international format.*");
     }
     let jid = number.includes("@s.whatsapp.net") ? number : number + "@s.whatsapp.net";
     await _0x5e533c.bot.groupParticipantsUpdate(_0x5e533c.chat, [jid], "add");
     await _0x5e533c.send("*Added successfully! Welcome, @" + jid.split("@")[0] + " 👋*", { mentions: [jid] });
   } catch (_0x14d7b9) {
     await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: add", _0x14d7b9);
   }
});
cmd({
   pattern: "mute",
   alias: ["lock"],
   desc: "Mutes the group (only admins can send messages).",
   category: "group",
   react: "🔒",
   filename: __filename,
   use: ""
}, async (_0x5e533c) => {
   try {
     if (!_0x5e533c.isGroup) {
       return _0x5e533c.reply(tlang().group);
     }
     if (!_0x5e533c.isBotAdmin) {
       return await _0x5e533c.reply("*`excuse me but I am not promoted to the rank of administrator it is difficult to execute the given😅`*");
     }
     await _0x5e533c.bot.groupSettingUpdate(_0x5e533c.chat, "announcement");
     await _0x5e533c.reply("*Group is now muted! Only admins can send messages.*");
   } catch (_0x14d7b9) {
     await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: mute", _0x14d7b9);
   }
});
cmd({
   pattern: "unmute",
   alias: ["unlock"],
   desc: "Unmutes the group (all members can send messages).",
   category: "group",
   react: "🔓",
   filename: __filename,
   use: ""
}, async (_0x5e533c) => {
   try {
     if (!_0x5e533c.isGroup) {
       return _0x5e533c.reply(tlang().group);
     }
     if (!_0x5e533c.isBotAdmin) {
       return await _0x5e533c.reply("*excuse me but I am not promoted to the rank of administrator it is difficult to execute the given😅`*");
     }
     await _0x5e533c.bot.groupSettingUpdate(_0x5e533c.chat, "not_announcement");
     await _0x5e533c.reply("*Group is now unmuted! All members can send messages.*");
   } catch (_0x14d7b9) {
     await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: unmute", _0x14d7b9);
   }
});
cmd({
  pattern: "promote",
  desc: "Promotes a user to admin in the group.",
  category: "group",
  react: "📈",
  filename: __filename,
  use: "<number>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }
    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }
    let number = _0x2a29f6.args[0];
    if (!number) {
      return await _0x5e533c.reply("*Provide a valid phone number to promote!*");
    }
    if (!number.match(/^\d{10,15}$/)) {
      return await _0x5e533c.reply("*Invalid phone number format! Use international format.*");
    }
    let jid = number.includes("@s.whatsapp.net") ? number : number + "@s.whatsapp.net";
    await _0x5e533c.bot.groupParticipantsUpdate(_0x5e533c.chat, [jid], "promote");
    await _0x5e533c.send("*User @" + jid.split("@")[0] + " has been promoted to admin! 🎉*", { mentions: [jid] });
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: promote", _0x14d7b9);
  }
});
cmd({
  pattern: "demote",
  desc: "Demotes an admin to a regular member in the group.",
  category: "group",
  react: "📉",
  filename: __filename,
  use: "<number>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }
    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }
    let number = _0x2a29f6.args[0];
    if (!number) {
      return await _0x5e533c.reply("*Provide a valid phone number to demote!*");
    }
    if (!number.match(/^\d{10,15}$/)) {
      return await _0x5e533c.reply("*Invalid phone number format! Use international format.*");
    }
    let jid = number.includes("@s.whatsapp.net") ? number : number + "@s.whatsapp.net";
    await _0x5e533c.bot.groupParticipantsUpdate(_0x5e533c.chat, [jid], "demote");
    await _0x5e533c.send("*User @" + jid.split("@")[0] + " has been demoted. 📉*", { mentions: [jid] });
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: demote", _0x14d7b9);
  }
});
cmd({
  pattern: "kickall",
  desc: "Bans all members from the group after a 5-second countdown.",
  category: "WhatsApp",
  react: "🚷",
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

    // Countdown before execution
    let countdown = 5;
    while (countdown > 0) {
      await _0x5e533c.reply(`Kicking all members in ${countdown}...`);
      countdown--;
      await new Promise(resolve => setTimeout(resolve, 1000));  // Wait for 1 second
    }

    // Get the list of all group members
    let groupMembers = await _0x5e533c.getGroupMembers();
    let memberIds = groupMembers.map(member => member.id);

    // Kick all members
    for (let memberId of memberIds) {
      await _0x5e533c.kickMember(memberId);
    }

    await _0x5e533c.reply("All members have been kicked from the group.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: kickall", _0x14d7b9);
  }
});

cmd({
  pattern: "remove",
  alias: ["kick"],
  desc: "Removes a user from the group using their phone number.",
  category: "group",
  react: "🚪",
  filename: __filename,
  use: "<number>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }
    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }
    let number = _0x2a29f6.args[0];
    if (!number) {
      return await _0x5e533c.reply("*Provide a valid phone number to remove!*");
    }
    if (!number.match(/^\d{10,15}$/)) {
      return await _0x5e533c.reply("*Invalid phone number format! Use international format.*");
    }
    let jid = number.includes("@s.whatsapp.net") ? number : number + "@s.whatsapp.net";
    await _0x5e533c.bot.groupParticipantsUpdate(_0x5e533c.chat, [jid], "remove");
    await _0x5e533c.send("*User @" + jid.split("@")[0] + " has been removed. 👋*", { mentions: [jid] });
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: remove", _0x14d7b9);
  }
});
cmd({
  pattern: "info",
  desc: "Displays information about the group.",
  category: "group",
  react: "ℹ️",
  filename: __filename,
  use: ""
}, async (_0x5e533c) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }
    
    const group = await _0x5e533c.bot.getGroupMetadata(_0x5e533c.chat);
    const groupInfo = `
      *Group Info:*
      - Name: ${group.subject}
      - ID: ${group.id}
      - Created At: ${new Date(group.creation * 1000).toLocaleString()}
      - Owner: ${group.owner}
      - Participants: ${group.participants.length}
      - Description: ${group.desc || "No description available."}
    `;
    return _0x5e533c.reply(groupInfo);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: info", _0x14d7b9);
  }
});
cmd({
  pattern: "setlink",
  desc: "Sets a new invite link for the group.",
  category: "group",
  react: "🔒",
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

    // Set a new group link
    await _0x5e533c.bot.groupInviteCode(_0x5e533c.chat); // Refresh the invite link
    return await _0x5e533c.reply("The group invite link has been reset successfully.");
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: setlink", _0x14d7b9);
  }
});
cmd({
  pattern: "link",
  desc: "Generates or displays the group's invite link.",
  category: "group",
  react: "🔗",
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

    // Get the group link
    const link = await _0x5e533c.bot.groupInviteCode(_0x5e533c.chat);
    return await _0x5e533c.reply(`*Group Invite Link:* \nhttps://chat.whatsapp.com/${link}`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: link", _0x14d7b9);
  }
});
cmd({
  pattern: "antipromote",
  desc: "Prevents a user from being promoted to admin.",
  category: "group",
  react: "🚫",
  filename: __filename,
  use: "<on/off>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let state = _0x2a29f6.args[0];
    if (!state || (state !== "on" && state !== "off")) {
      return await _0x5e533c.reply("*Please provide a valid option: `on` or `off`.*");
    }

    // Save the state of antipromote
    await _0x5e533c.reply(`Antipromote has been turned ${state === "on" ? "on" : "off"}. Users will ${state === "on" ? "not be able to be promoted to admin" : "be able to be promoted"} in the group.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: antipromote", _0x14d7b9);
  }
});
cmd({
  pattern: "antidemote",
  desc: "Prevents an admin from being demoted.",
  category: "group",
  react: "❌",
  filename: __filename,
  use: "<on/off>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let state = _0x2a29f6.args[0];
    if (!state || (state !== "on" && state !== "off")) {
      return await _0x5e533c.reply("*Please provide a valid option: `on` or `off`.*");
    }

    // Save the state of antidemote
    await _0x5e533c.reply(`Antidemote has been turned ${state === "on" ? "on" : "off"}. Admins will ${state === "on" ? "not be able to be demoted" : "be able to be demoted"} from now on.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: antidemote", _0x14d7b9);
  }
});
cmd({
  pattern: "antilink",
  desc: "Prevents links from being sent in the group.",
  category: "group",
  react: "🔗",
  filename: __filename,
  use: "<on/off>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let state = _0x2a29f6.args[0];
    if (!state || (state !== "on" && state !== "off")) {
      return await _0x5e533c.reply("*Please provide a valid option: `on` or `off`.*");
    }

    // Save the state of antilink (you can save it to a database or a file)
    await _0x5e533c.reply(`Antilink has been turned ${state === "on" ? "on" : "off"}. Links will ${state === "on" ? "be blocked" : "be allowed"} in the group.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: antilink", _0x14d7b9);
  }
});
cmd({
  pattern: "antispam",
  desc: "Prevents spamming in the group.",
  category: "group",
  react: "🚫",
  filename: __filename,
  use: "<on/off>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let state = _0x2a29f6.args[0];
    if (!state || (state !== "on" && state !== "off")) {
      return await _0x5e533c.reply("*Please provide a valid option: `on` or `off`.*");
    }

    // Save the state of antispam
    await _0x5e533c.reply(`Antispam has been turned ${state === "on" ? "on" : "off"}. Spam messages will ${state === "on" ? "be blocked" : "be allowed"} in the group.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: antispam", _0x14d7b9);
  }
});
cmd({
  pattern: "antifake",
  desc: "Prevents fake accounts from entering the group.",
  category: "group",
  react: "⚠️",
  filename: __filename,
  use: "<on/off>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let state = _0x2a29f6.args[0];
    if (!state || (state !== "on" && state !== "off")) {
      return await _0x5e533c.reply("*Please provide a valid option: `on` or `off`.*");
    }

    // Save the state of antifake
    await _0x5e533c.reply(`Antifake has been turned ${state === "on" ? "on" : "off"}. Fake accounts will ${state === "on" ? "be blocked" : "be allowed"} from joining the group.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: antifake", _0x14d7b9);
  }
});
cmd({
  pattern: "gpp",
  desc: "Sets group privacy protection settings.",
  category: "group",
  react: "🔐",
  filename: __filename,
  use: "<on/off>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let state = _0x2a29f6.args[0];
    if (!state || (state !== "on" && state !== "off")) {
      return await _0x5e533c.reply("*Please provide a valid option: `on` or `off`.*");
    }

    // Save the group privacy protection state
    await _0x5e533c.reply(`Group Privacy Protection has been turned ${state === "on" ? "on" : "off"}. The group privacy will be ${state === "on" ? "protected" : "open"} for everyone.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: gpp", _0x14d7b9);
  }
});
cmd({
  pattern: "welcome",
  desc: "Sets the welcome message for new group members.",
  category: "group",
  react: "🎉",
  filename: __filename,
  use: "<message>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let message = _0x2a29f6.args.join(" ");
    if (!message) {
      return await _0x5e533c.reply("*Please provide a welcome message.*");
    }

    // Save the welcome message
    await _0x5e533c.reply(`Welcome message has been set to: "${message}"`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: welcome", _0x14d7b9);
  }
});
cmd({
  pattern: "goodbye",
  desc: "Sets the goodbye message for when members leave the group.",
  category: "group",
  react: "👋",
  filename: __filename,
  use: "<message>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let message = _0x2a29f6.args.join(" ");
    if (!message) {
      return await _0x5e533c.reply("*Please provide a goodbye message.*");
    }

    // Save the goodbye message
    await _0x5e533c.reply(`Goodbye message has been set to: "${message}"`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: goodbye", _0x14d7b9);
  }
});
cmd({
  pattern: "warn",
  desc: "Warns a member in the group.",
  category: "group",
  react: "⚠️",
  filename: __filename,
  use: "<@user> <reason>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let user = _0x2a29f6.mentionedJid[0];
    let reason = _0x2a29f6.args.slice(1).join(" ");
    if (!user || !reason) {
      return await _0x5e533c.reply("*Please provide a user to warn and a reason.*");
    }

    // Warn the user
    await _0x5e533c.reply(`⚠️ *Warning!* ${user} has been warned for: ${reason}`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: warn", _0x14d7b9);
  }
});

cmd({
  pattern: "join",
  desc: "Invites a user to join the group.",
  category: "group",
  react: "✅",
  filename: __filename,
  use: "<user>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let user = _0x2a29f6.args[0];
    if (!user) {
      return await _0x5e533c.reply("*Please provide a username or phone number to invite.*");
    }

    // Invite user to group
    await _0x5e533c.reply(`Invitation has been sent to @${user} to join the group.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: join", _0x14d7b9);
  }
});
cmd({
  pattern: "tagall",
  desc: "Tags all members of the group individually.",
  category: "group",
  react: "📣",
  filename: __filename,
  use: "<message>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let message = _0x2a29f6.args.join(" ");
    if (!message) {
      return await _0x5e533c.reply("*Please provide a message to tag all the group members.*");
    }

    // Get all group members
    let groupMembers = await _0x5e533c.getGroupMembers();
    let tagMessage = groupMembers.map(member => `@${member.name}`).join(" ") + " " + message;
    await _0x5e533c.reply(tagMessage);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: tagall", _0x14d7b9);
  }
});
cmd({
  pattern: "antitag",
  desc: "Prevents tagging of all members in the group.",
  category: "group",
  react: "🚫",
  filename: __filename,
  use: "<on/off>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let state = _0x2a29f6.args[0];
    if (!state || (state !== "on" && state !== "off")) {
      return await _0x5e533c.reply("*Please provide a valid option: `on` or `off`.*");
    }

    // Save the state of antitag
    await _0x5e533c.reply(`Antitag has been turned ${state === "on" ? "on" : "off"}. Tagging members will ${state === "on" ? "be blocked" : "be allowed"} in the group.`);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: antitag", _0x14d7b9);
  }
});
cmd({
  pattern: "tag",
  desc: "Tags all group members.",
  category: "group",
  react: "📣",
  filename: __filename,
  use: "<message>"
}, async (_0x5e533c, _0x2a29f6) => {
  try {
    if (!_0x5e533c.isGroup) {
      return _0x5e533c.reply(tlang().group);
    }

    if (!_0x5e533c.isBotAdmin) {
      return await _0x5e533c.reply("*Excuse me but I am not promoted to the rank of administrator, it is difficult to execute the given.*");
    }

    let message = _0x2a29f6.args.join(" ");
    if (!message) {
      return await _0x5e533c.reply("*Please provide a message to tag the group members.*");
    }

    // Send message with tags
    let tagMessage = `@everyone ${message}`;
    await _0x5e533c.reply(tagMessage);
  } catch (_0x14d7b9) {
    await _0x5e533c.error(_0x14d7b9 + "\n\ncommand: tag", _0x14d7b9);
  }
});
