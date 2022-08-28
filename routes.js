module.exports = function (app) {
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.get('/', (req,res) => {
      res.render(__dirname+'/Web/Main/HTML/index.html')
    })


    var SatisFactoryKanban = require(__dirname+'/Web/SatisFactory/JS/kanban.js')
    var SatisFactoryMileStone = require(__dirname+'/Web/SatisFactory/JS/MileStone.js')
    var SatisFactoryHDD = require(__dirname+'/Web/SatisFactory/JS/HDD.js')
    var SatisFactoryNote = require(__dirname+'/Web/SatisFactory/JS/Note.js')
    var SatisFactoryScreenShot = require(__dirname+'/Web/SatisFactory/JS/ScreenShot.js')
    app.get('/SatisFactory', (req,res) => {
      res.render(__dirname+'/Web/SatisFactory/HTML/index.ejs',{
        ToDo : SatisFactoryKanban.ToDoList,
        InProgress : SatisFactoryKanban.InProgressList,
        Done : SatisFactoryKanban.DoneList,
        Translation : SatisFactoryKanban.KoreanText,
        MileStone : SatisFactoryMileStone.MileStoneData,
        HDD : SatisFactoryHDD.HDD,
        Note : SatisFactoryNote.notes,
        Screenshots : SatisFactoryScreenShot.screenshots,
      })
    })

    app.get('/SatisFactory/ScreenShot', (req,res) => {
      try {
        var PageNum = parseInt(req.query.page)
        var LocationNum = parseInt(req.query.location)

        if(isNaN(PageNum) || isNaN(LocationNum) ||
           SatisFactoryScreenShot.screenshots.length <= PageNum ||
           SatisFactoryScreenShot.screenshots[PageNum].pictures.length <= LocationNum ) {
            res.render(__dirname+'/Web/SatisFactory/HTML/NotFound.ejs')
        } else {
          res.render(__dirname+'/Web/SatisFactory/HTML/ScreenShot.ejs',{
            Screenshots : SatisFactoryScreenShot.screenshots,
            Page : PageNum,
            Location : LocationNum,
          })
        }
      } catch (err) { res.render(__dirname+'/Web/SatisFactory/HTML/NotFound.ejs') }
    })

    app.get('/Valheim', (req,res) => {
      res.render(__dirname+'/Web/Valheim/HTML/index.html')
    })
}
