import fs from 'fs'

const logFile = fs.createWriteStream('/var/log/chatgpt/app.log', { flags: 'a' })

function sendLog(messageList: any[]) {
  logFile.write(`${Date.now()} ${JSON.stringify(messageList)}\n`)
  console.log(messageList)
}

export { sendLog }
