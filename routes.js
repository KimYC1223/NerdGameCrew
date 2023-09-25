var request = require('request')
var bodyParser = require('body-parser')

module.exports = function (app) {
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    //===================================================================================================================================
    //
    //    플레이 로그
    //
    //===================================================================================================================================
    //    홈 화면
    //===================================================================================================================================
    app.get('/', (req,res) => { res.render(__dirname+'/Web/Main/HTML/NotFound.ejs') })
    //===================================================================================================================================




  

    //===================================================================================================================================
    //
    //    플레이 로그
    //
    //===================================================================================================================================
    //    크루원 소개
    //===================================================================================================================================
    app.get('/Crew', (req,res) => { res.render(__dirname+'/Web/Main/HTML/NotFound.ejs') })
    //===================================================================================================================================
    //    유튜브 채널
    //===================================================================================================================================
    app.get('/Youtube', (req,res) => { res.render(__dirname+'/Web/Main/HTML/NotFound.ejs') })
    //===================================================================================================================================






    //===================================================================================================================================
    //
    //    플레이 로그
    //
    //===================================================================================================================================
    //    발헤임
    //===================================================================================================================================
    app.get('/Valheim', (req,res) => {
      res.render(__dirname+'/Web/Valheim/HTML/index.ejs')
    })
    //===================================================================================================================================
    //    마인크래프트 인증 관련
    //===================================================================================================================================
    let minecraftAuthCode = {'KIMYC1223':'8504', 'KIMWUPWUP':'1640', 'sogogii':'6881', 'Namzi_':'5440'}
    app.get('/MinecraftAuthCheck', (req,res) => { 
      var user_id = req.param('username');
      var code = req.param('code');

      if(minecraftAuthCode[user_id] == undefined || minecraftAuthCode[user_id] == null){
        res.send(`bad`);
        return;
      }

      if(minecraftAuthCode[user_id] == code) {
        res.send(`good`) 
      } else {
        res.send(`bad`) 
      }
    })

    //===================================================================================================================================
    //    마인크래프트
    //===================================================================================================================================
    app.get('/Minecraft', (req,res) => { 
      const baseUri = `http://nerdgamecrew.link:4567/v1`

      let server_status = null;
      let uptime = '';
      let max_memory = '';
      let free_memory = '';

      let calcMemoryFunc = (input) => {
        input /= 1024;
        input /= 1024;
        input /= 1024;
        return input.toFixed(2);
      }

      let calcTimeFunc = (input) => {
          var val = parseInt(input); // The value sent by OH is a string so we parse into an integer
          var days = 0; // Initialise variables
          var hours = 0;
          var minutes = 0;
          if (val >= 86400) { // 86400 seconds in a days
              days = Math.floor(val / 86400); // Number of days
              val = val - (days * 86400); // Remove days from val
          }
          if (val >= 3600) { // 3600 seconds in a hour
              hours = Math.floor(val / 3600); // Number of hours
              val = val - (hours * 3600); // Remove hours from val
          }
          if (val >= 60) { // 60 seconds in an minutes
              minutes = Math.floor(val /60); // Number of minutes
          }
      
          var stringDays = ''; // Initialse string variables
          var stringHours = '';
          var stringMinutes = '';
          if (days >= 1) {
              stringDays = days + 'D ';
          } // If days = 0 then stringDays remains ''
      
          if (hours >= 1) {
              stringHours = hours + 'H ';
          } // If hours = 0 then stringHours remains ''
      
          if (minutes >= 1) {
              stringMinutes = minutes + 'M';
          } // If minutes = 0 then stringMinutes remains ''
      
          var returnString =  stringDays + stringHours + stringMinutes
          return returnString.trim(); // Removes the extraneous space at the end
      }

      let getServerStatus = (callback) => {
        const option = {
          uri : `${baseUri}/server`,
          headers : {
            'key' : 'ngc_minecraft'
          }
        }
        return new Promise(function (resolve,reject) {
          request.get(option, function(error, response,body){
            if(error) { reject(); return;}
            server_status = JSON.parse(body);
            uptime = calcTimeFunc(server_status.health.uptime)
            max_memory = calcMemoryFunc(server_status.health.maxMemory);
            free_memory = calcMemoryFunc(server_status.health.freeMemory);
            total_memory = calcMemoryFunc(server_status.health.totalMemory);
            resolve();
          })
        })
      }
      
      getServerStatus().then( () => {
        res.render(__dirname+'/Web/Minecraft/HTML/index.ejs', {
          server_status: server_status,
          uptime : uptime,
          max_memory : `${max_memory} GB`,
          free_memory : `${free_memory} GB`,
          total_players : ['KIMWUPWUP', 'sogogii', 'Namzi_', 'KIMYC1223']
        }) 
      }).catch(() => {
        res.render(__dirname+'/Web/Minecraft/HTML/index.ejs', {
          server_status: null,
          uptime : '',
          max_memory : '',
          free_memory : '',
          total_players : ['KIMWUPWUP', 'sogogii', 'Namzi_', 'KIMYC1223']
        }) 
      })
    })
    //===================================================================================================================================
    //    레프트 4 데드 2
    //===================================================================================================================================
    app.get('/L4D2', (req,res) => { res.render(__dirname+'/Web/Main/HTML/NotFound.ejs') })
    //===================================================================================================================================
    //    헬 다이버즈
    //===================================================================================================================================
    app.get('/HellDivers', (req,res) => { res.render(__dirname+'/Web/Main/HTML/NotFound.ejs') })
    //===================================================================================================================================






    //===================================================================================================================================
    //
    //    게임 일지
    //
    //===================================================================================================================================
    //    새티스 팩토리
    //===================================================================================================================================
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
    //===================================================================================================================================
    //    팩토리오
    //===================================================================================================================================
    app.get('/Factorio', (req,res) => { res.render(__dirname+'/Web/Main/HTML/NotFound.ejs') })
    //===================================================================================================================================
    //    다이슨 스피어 프로젝트
    //===================================================================================================================================
    app.get('/DSP', (req,res) => { res.render(__dirname+'/Web/Main/HTML/NotFound.ejs') })
    //===================================================================================================================================
    //    롤러코스터 타이쿤 2
    //===================================================================================================================================
    app.get('/RCT', (req,res) => { res.render(__dirname+'/Web/Main/HTML/NotFound.ejs') })
    //===================================================================================================================================
    //    보드게임
    //===================================================================================================================================
    app.get('/BoardGame', (req,res) => { res.render(__dirname+'/Web/Main/HTML/NotFound.ejs') })
    //===================================================================================================================================
}
