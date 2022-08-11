module.exports = function (app) {
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.get('/', (req,res) => {
      res.render(__dirname+'/Web/index.html')
    })

    app.get('/Valheim', (req,res) => {
      res.render(__dirname+'/Web/Valheim/index.html')
    })
}
