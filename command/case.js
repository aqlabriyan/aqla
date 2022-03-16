require("../settings/config.js");
const {
  WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");

//module exports
const axios = require("axios");
const chalk = require("chalk");
const { exec, spawn, execSync } = require("child_process");
const crypto = require("crypto");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const ffmpeg = require("fluent-ffmpeg");
const figlet = require("figlet");
const fs = require("fs");
const gis = require("g-i-s");
const hx = require("hxz-api");
const ms = require("parse-ms");
const moment = require("moment-timezone");
const request = require("request");
const speed = require("performance-now");
const util = require("util");
const yts = require("yt-search");
const ytdl = require("ytdl-core");
const qla = require("api-alphabot");

//library
const { simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require("../lib/functions");
const { fetchJson, kyun, fetchText } = require("../lib/fetcher");
const { color, bgcolor } = require("../lib/color");
const { yta, ytv } = require("../lib/y2mate");
const simple = require("../lib/simple");
const { uploadImages } = require("../lib/uploadimage");

//json
const antilink = JSON.parse(fs.readFileSync("./database/group/antilink.json"));
const _registered = JSON.parse(fs.readFileSync("./database/user/registered.json"));
const _limit = JSON.parse(fs.readFileSync("./database/user/limit.json"));
const premium = JSON.parse(fs.readFileSync("./database/user/premium.json"));
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require("../database/user/register.js");
const tebakgambar = JSON.parse(fs.readFileSync("./database/game/tebakgambar.json"));

/*
# language
# available now [ind]
*/
const { ind } = require(`./help`);
lang = ind;

//times
const time = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");

module.exports = aqla = async (aqla, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType;
    const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z");
    const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z");
    const type = Object.keys(mek.message)[0];
    const cmd =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : "".slice(1).trim().split(/ +/).shift().toLowerCase();
    const prefix = /^[aqrmyAQRMY]/.test(cmd) ? cmd.match(/^[aqrmyAQRMY]/gi) : "-";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : "";
    budy = type === "conversation" ? mek.message.conversation : type === "extendedTextMessage" ? mek.message.extendedTextMessage.text : "";
    var pes =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : "";
    const manti = pes.slice(0).trim().split(/ +/).shift().toLowerCase();
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const isCmd = body.startsWith(prefix);
    const q = args.join(" ");
    const botNumber = aqla.user.jid;
    const botNumberss = aqla.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");
    const sender = mek.key.fromMe ? aqla.user.jid : isGroup ? mek.participant : mek.key.remoteJid;
    const ownerNumber = [`${ownernumber}@s.whatsapp.net`];
    const isOwner = mek.key.fromMe ? aqla.user.jid : ownerNumber.includes(sender);
    const totalchat = await aqla.chats.all();
    const groupMetadata = isGroup ? await aqla.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const conts = mek.key.fromMe ? aqla.user.jid : aqla.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe ? aqla.user.name : conts.notify || conts.vname || conts.name || "-";

    //apaya
    const isAntiLink = isGroup ? antilink.includes(from) : false;


    const isUrl = (url) => {
      return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, "gi"));
    };

    const reply = (teks) => {
      aqla.sendMessage(from, teks, text, { quoted: mek });
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? aqla.sendMessage(from, teks.trim(), extendedText, { contextInfo: { mentionedJid: memberr } })
        : aqla.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: memberr } });
    };
    const sleep = async (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    function bytesToSize(bytes) {
      return new Promise((resolve, reject) => {
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        if (bytes === 0) return "n/a";
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`);
      });
    }

    const checkLimit = (sender) => {
      let found = false;
      for (let lmt of _limit) {
        if (lmt.id === sender) {
          let limitCounts = limitawal - lmt.limit;
          if (limitCounts <= 0) return aqla.sendMessage(from, `Limit kamu sudah habis`, text, { quoted: mek });
          aqla.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted: mek });
          found = true;
        }
      }
      if (found === false) {
        let obj = { id: sender, limit: 1 };
        _limit.push(obj);
        fs.writeFileSync("./database/user/limit.json", JSON.stringify(_limit));
        aqla.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted: mek });
      }
    };
    const isLimit = (sender) => {
      let position = false;
      for (let i of _limit) {
        if (i.id === sender) {
          let limits = i.limit;
          if (limits >= limitawal) {
            position = true;
            aqla.sendMessage(from, lang.limitend(pushname), text, { quoted: mek });
            return true;
          } else {
            _limit;
            position = true;
            return false;
          }
        }
      }
      if (position === false) {
        const obj = { id: sender, limit: 0 };
        _limit.push(obj);
        fs.writeFileSync("./database/user/limit.json", JSON.stringify(_limit));
        return false;
      }
    };

    const limitAdd = (sender) => {
      if (isOwner && isPremium) {
        return false;
      }
      let position = false;
      Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == sender) {
          position = i;
        }
      });
      if (position !== false) {
        _limit[position].limit += 1;
        fs.writeFileSync("./database/user/limit.json", JSON.stringify(_limit));
      }
    };

    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
          let media = fs.readFileSync(asw);
          aqla.sendMessage(to, media, MessageType.sticker, { quoted: mek });
          fs.unlinkSync(filess);
          fs.unlinkSync(asw);
        });
      });
    };

    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        aqla.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text, contextInfo: { mentionedJid: mids } });

        fs.unlinkSync(filename);
      });
    };
    const sendFileFromUrl = async (from, url, caption, mek, men) => {
      let mime = "";
      let res = await axios.head(url);
      mime = res.headers["content-type"];
      if (mime.split("/")[1] === "gif") {
        return aqla.sendMessage(from, await getBuffer(url), video, { caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: "video/mp4", quoted: mek });
      }
      let type = mime.split("/")[0] + "Message";
      if (mime === "application/pdf") {
        return aqla.sendMessage(from, await getBuffer(url), document, { mimetype: "application/pdf", caption: caption, mentions: men ? men : [], quoted: mek });
      }
      if (mime.split("/")[0] === "image") {
        return aqla.sendMessage(from, await getBuffer(url), image, { caption: caption, mentions: men ? men : [], quoted: mek });
      }
      if (mime.split("/")[0] === "video") {
        return aqla.sendMessage(from, await getBuffer(url), video, { caption: caption, mentions: men ? men : [], mimetype: "video/mp4", quoted: mek });
      }
      if (mime.split("/")[0] === "audio") {
        return aqla.sendMessage(from, await getBuffer(url), audio, { caption: caption, mentions: men ? men : [], mimetype: "audio/mpeg", quoted: mek });
      }
    };

    // send message button
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      aqla.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
    };
    const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
      them = gam1;
      mediaxxaa = await aqla.prepareMessage(id, them, MessageType.location, { thumbnail: them });
      locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa;
      const buttonMessages = {
        locationMessage: locmhan.message.locationMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 6,
      };
      aqla.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options);
    };
    const sendButVideo = async (id, text1, desc1, vid1, but = [], options = {}) => {
      them = vid1;
      mediaxxaa = await aqla.prepareMessage(id, them, MessageType.video);
      vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa;
      const buttonMessages = {
        videoMessage: vimhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      aqla.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options);
    };
    const sendButImage = async (id, text1, desc1, vid1, but = [], options = {}) => {
      them = vid1;
      mediaxxaa = await aqla.prepareMessage(id, them, MessageType.image, { thumbnail: Buffer.alloc(0) });
      imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa;
      const buttonMessages = {
        imageMessage: imgmhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      aqla.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options);
    };

    // antilink
    if (manti.includes("://chat.whatsapp.com/")) {
      if (!(isGroup || isAntiLink || isGroupAdmins)) return;
      var kic = `${sender.split("@")[0]}@s.whatsapp.net`;
      await aqla.sendMessage(from, `Hmm maap nih gua kick, dilarang share link di group ini`, text, { quoted: mek });
      aqla.groupRemove(from, [kic]).catch((e) => {
        reply(`Bot Harus Jadi Admin`);
      });
    }

    //game
    if (tebakgambar.hasOwnProperty(sender.split("@")[0]) && !isCmd) {
      jawaban = tebakgambar[sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        sendButMessage(from, "Selamat 😘 Jawaban kamu benar!", `• ${ownername}`, [{ buttonId: `.tebakgambar`, buttonText: { displayText: "Tebak Gambar" }, type: "RESPONSE" }], { quoted: mek });
        delete tebakgambar[sender.split("@")[0]];
        fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar));
      } else {
        reply("Jawaban Salah!");
      }
    }

    colors = ["red", "pink", "white", "black", "blue", "yellow", "green"];
    const isAqla = checkRegisteredUser(sender);
    const isPremium = premium.includes(sender) || isOwner;
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedText = type === "extendedTextMessage" && content.includes("extendedTextMessage");

    //console termux
    if (!isCmd) {
      console.log("|\x1b[1;33m MSG \x1b[1;33m|", time, chalk.yellow(budy), "from", chalk.green(pushname), "args :", chalk.green(args.length), "in", chalk.green(groupName ? groupName : "Private chat"));
    }
    if (!(isCmd || mek.key.fromMe)) {
      console.log("|\x1b[1;32m CMD \x1b[1;37m|", time, chalk.green(command), "from", chalk.green(pushname), "args :", chalk.green(args.length), "in", chalk.green(groupName ? groupName : "Private chat"));
    }

    if (!mek.key.fromMe && global.self === true) return;
    switch (command) {
      case "qla":
      case "la":
      case "ian":
      case "iyan":
      case "as":
      case "an":
        if (!q) return sendButMessage(
          from, lang.noregis(pushname), `Maybe this button will help you`, 
          [
            { buttonId: "assist", buttonText: { displayText: `Chat with Aqla's personal Assistant` }, type: 1 }
          ]
          );
          break
          case "ssist":
            if (!q) return sendButMessage(
              from, lang.on(), `Press the button below`,
              [
                { buttonId: `aempty`, buttonText: { displayText: "Ok, Thank You" }, type: 1 }
              ],
              { quoted: mek }
            );
            break
      default:
        if (budy.startsWith(">")) {
          try {
            if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname));
            return aqla.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, "\t"), text, { quoted: mek });
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
        if (budy.startsWith("$")) {
          if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname));
          qur = budy.slice(2);
          exec(qur, (err, stdout) => {
            if (err) return reply(`aqlaBot :~ ${err}`);
            if (stdout) {
              reply(stdout);
            }
          });
        }
        if (budy.startsWith("=>")) {
          if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname));
          var konsol = budy.slice(3);
          Return = (sul) => {
            var sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return reply(bang);
          };
          try {
            reply(util.format(eval(`;(async () => { ${konsol} })()`)));
            console.log("\x1b[1;31m~\x1b[1;37m>", "[", "\x1b[1;32m EXC \x1b[1;37m", "]", time, chalk.green("=>"), "from", chalk.green(pushname), "args :", chalk.green(args.length));
          } catch (e) {
            reply(String(e));
          }
        }
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("this.isZero") && !e.includes("jid")) {
      console.log("Message : %s", chalk.green(e));
    }
  }
};
