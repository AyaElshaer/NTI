const app = require('./src/server')
const PORT = process.env.PORT || 4000

app.listen(PORT)
// app.listen(PORT , (req,res) => {
//     console.log('done')
// })