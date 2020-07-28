const fs = require('fs')
const app = require('express')()
const _ = require('lodash')
module.exports = { handler: app }
app.get('/catpics', async (req, res) => {
  const catPicsDir = 'static/img/cats/';
  let catPics = []
  let randomDir = _.sample(fs.readdirSync(catPicsDir))
  fs.readdirSync(catPicsDir + randomDir).forEach(file => {
    console.log(randomDir + "/" + file)
    catPics.push({name: randomDir, url: randomDir + "/" + file})
  });
  res.status(200).json(catPics)
})