//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = '[ʙᴏᴛ] ᴍᴀᴋɪᴍᴀ マキマ' //ur bot name
global.ownernumber = '6281244622905' //ur owner number
global.ownername = '© Mephistod' //ur owner name
global.websitex = "https://youtu.be/-Omye-W0pTE"
global.wagc = "https://chat.whatsapp.com/H5gOlLTTYE1I2hNkHUuiSQ"
global.gcwa = "https://whatsapp.com/channel/0029VaVGWDa8V0teNLJGWF0e"
global.themeemoji = '🪀'
global.wm = "[ʙᴏᴛ] ᴍᴀᴋɪᴍᴀ マキマ"
global.botscript = '' //script link
global.packname = "Sticker By"
global.author = "sᴇᴏ-ɴᴀʀɪ 서나리"
global.creator = "6281244622905@s.whatsapp.net"
global.xprefix = '.'
global.prefuck = '#'
global.premium = ["628124462905"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw tidak aktif di grub ini, beritau admin untuk mengaktifkan nsfw',
    done: 'Sukses',
    error: 'Error!',
    success: 'Sukses!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/nahi.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})