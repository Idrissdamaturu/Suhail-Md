const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348142138031";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_31_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY2LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA0NixcbiAgICAgICAgNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzLFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkx3QzZXc0hTbzd2SFlUV1NxZW5DTU5nMDFheWhmSkF3Zi9XSi8wOXZPZHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0MjEzODAzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzExNTMxMkUxQzE5MUREM0ZFMUQ4NzQ2RTZCMTAwNDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3ODUzNDc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0MjEzODAzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODlBQTlDMEJGNDg5NEU1QTQ5RDhBRTM3OEFGOEZENjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3ODUzNDc4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkI0MUJTVk5RVEcyZG9ZeWU3S1JITGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTQzZmI0NDMtYTA4ZC00Y2MyLWIyZDItNjRhZjlhMjVlMmRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDUyLFxuICAgICAgMzcsXG4gICAgICA5NixcbiAgICAgIDI0MSxcbiAgICAgIDE2OSxcbiAgICAgIDY5LFxuICAgICAgODcsXG4gICAgICAyMzgsXG4gICAgICAxMTQsXG4gICAgICAyNyxcbiAgICAgIDE1MSxcbiAgICAgIDE1LFxuICAgICAgMTQ4LFxuICAgICAgMTAxLFxuICAgICAgNzksXG4gICAgICAyMzYsXG4gICAgICA0OCxcbiAgICAgIDksXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDE0OCxcbiAgICAgIDExMSxcbiAgICAgIDY1LFxuICAgICAgNzYsXG4gICAgICAxMzMsXG4gICAgICAxNTMsXG4gICAgICAxNzYsXG4gICAgICA3OSxcbiAgICAgIDE3OCxcbiAgICAgIDk1LFxuICAgICAgNzcsXG4gICAgICAxMzIsXG4gICAgICAyOSxcbiAgICAgIDE1NyxcbiAgICAgIDk1LFxuICAgICAgOCxcbiAgICAgIDIzMSxcbiAgICAgIDExNyxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNTTTQ1NlhHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQyMTM4MDMxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMZWFybmluZ1wiLFxuICAgIFwibGlkXCI6IFwiMTI3MjMwMjE4OTExODAxOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUhJaUxjQkVKNjZrYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaOWoxOFNBNzdyaUFEOWQxdWxaRVhHeWVOd1ZVTTFQNkpwTGwzVjRSdUFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJjRU5DTlBSMldLRVFhbDBWbEVDQjV6QVRqL0QrQzJFUHBvWHpZam9oK21RRTIyc0N3K0ExRFd5STdjYmRrRS9iZW9ZZDFxdzN5b1FtYmlodTMvbkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlsUnhJRzJSYzdjZ2VldkNUc0d6QXl2S3dOSUMyOTRFOUNDOGNscFFUU1V4UGtZVlI3bXNYWW1NT3UwcUZNYk4wVmxDaFFnZU9Ed3lPZmh3SEtjZmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDIxMzgwMzE6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4NTM0NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOcFFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5wUS5qc29uIjogIntcImtleURhdGFcIjpcIkRUei9KdVJvYUhlTjFuRTd5QmVMUU9UdTlKanB2TVFMc2JrTkFMbGF4bDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzgzOTE5MTY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc4NTM0Nzg3NzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
