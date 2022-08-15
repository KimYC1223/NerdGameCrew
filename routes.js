module.exports = function (app) {
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.get('/', (req,res) => {
      res.render(__dirname+'/Web/Main/HTML/index.html')
    })

    app.get('/SatisFactory', (req,res) => {
      res.render(__dirname+'/Web/SatisFactory/HTML/index.html')
    })

    app.get('/Valheim', (req,res) => {
      res.render(__dirname+'/Web/Valheim/HTML/index.html')
    })
}
