module.exports = function (app) {
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.get('/', (req,res) => {
      res.render(__dirname+'/Web/Main/HTML/index.html')
    })


    var SatisFactoryKanban = require(__dirname+'/Web/SatisFactory/JS/kanban.js')
    var SatisFactoryMileStone = require(__dirname+'/Web/SatisFactory/JS/MileStone.js')
    var SatisFactoryHDD = require(__dirname+'/Web/SatisFactory/JS/HDD.js')
    app.get('/SatisFactory', (req,res) => {
      res.render(__dirname+'/Web/SatisFactory/HTML/index.ejs',{
        ToDo : SatisFactoryKanban.ToDoList,
        InProgress : SatisFactoryKanban.InProgressList,
        Done : SatisFactoryKanban.DoneList,
        Translation : SatisFactoryKanban.KoreanText,
        MileStone : SatisFactoryMileStone.MileStoneData,
        HDD : SatisFactoryHDD.HDD,
      })
    })

    app.get('/Valheim', (req,res) => {
      res.render(__dirname+'/Web/Valheim/HTML/index.html')
    })
}
