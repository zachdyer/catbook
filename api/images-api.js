const fs = require('fs')
const app = require('express')()
module.exports = { handler: app }
app.get('/catpics', async (req, res) => {
  const catPicsDir = 'static/img/cats/';
  let catPics = []
  fs.readdirSync(catPicsDir).forEach(file => {
    console.log(file)
    catPics.push(file)
  });
  res.status(200).json(catPics)
})