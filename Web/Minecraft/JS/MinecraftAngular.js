let app = angular.module("ngc_minecraft", []);
var names = ['KIMYC1223', 'sogogii', 'Namzi_', 'KIMWUPWUP'];

app.controller("ngc_controller", function($scope){
    $scope.disconnect = () => {
        for(var i = 0; i < names.length ; i++) {
            $scope.player_info[names[i]].isConnect = false;
        }
    }

    $scope.connect = (username) => {
        var code = window.prompt(`${username}님의 접속 코드를 입력하세요.`,``);
        console.log(`${code}`)

        jQuery.ajax({
            type:'GET',
            url: `/MinecraftAuthCheck/?username=${username}&code=${code}`,
            headers:{'key':'ngc_minecraft', 'accept' :'application/json'},
            success: function(msg) {
                if(msg == 'good'){
                    for(var i = 0; i < names.length ; i++) {
                        $scope.player_info[names[i]].isConnect = false;
                    }
                    $scope.player_info[username].isConnect = true;

                    $scope.$apply();
                } else {
                    alert(`인증 실패`)
                }
            },
            error: function(msg) {
                alert(`인증 실패`)
            }
        });
    }

    $scope.player_info = {};
    $scope.player_info['KIMYC1223'] = {
        isLoggin : false,
        isConnect : false,
        health : 0,
        hunger : 0,
        lastLogin : 0,
        location_x : 0,
        location_y : 0
    }
    $scope.player_info['sogogii'] = {
        isLoggin : false,
        isConnect : false,
        health : 0,
        hunger : 0,
        lastLogin : 0,
        location_x : 0,
        location_y : 0
    }
    $scope.player_info['Namzi_'] = {
        isLoggin : false,
        isConnect : false,
        lastLogin : 0,
        health : 0,
        hunger : 0,
        lastLogin : 0,
        location_x : 0,
        location_y : 0
    }
    $scope.player_info['KIMWUPWUP'] = {
        isLoggin : false,
        isConnect : false,
        health : 0,
        hunger : 0,
        lastLogin : 0,
        location_x : 0,
        location_y : 0
    }

    let getPlayerStatus = () => {
        var urlString = `http://nerdgamecrew.link:4567/v1/players`;
        jQuery.ajax({
            type:'GET',
            url: urlString,
            headers:{'key':'ngc_minecraft', 'accept' :'application/json'},
            success: function(msg) {			// 성공시
                var player_info_data = msg;

                for(var j = 0; j < names.length; j++){
                    let flag = false;
                    var key = names[j];
                    for(var i = 0 ; i < player_info_data.length; i++) {
                        if(player_info_data[i].displayName == names[j]) {
                            $scope.player_info[key].isLoggin = true;

                            $scope.player_info[key].health = player_info_data[i].health;
                            health_bar = document.getElementsByClassName(`${key}_health_bar`);
                            for(var h = 0; h < health_bar.length; h++) {
                                if((h * 2 + 1) > $scope.player_info[key].health){
                                    health_bar[h].src = `../Minecraft/IMG/health_0.png`;
                                } else if((h * 2 + 1) == $scope.player_info[key].health){
                                    health_bar[h].src = `../Minecraft/IMG/health_1.png`;
                                } else if((h * 2 + 1) < $scope.player_info[key].health){
                                    health_bar[h].src = `../Minecraft/IMG/health_2.png`;
                                }
                            }

                            $scope.player_info[key].hunger = player_info_data[i].hunger;
                            hunger_bar = document.getElementsByClassName(`${key}_hunger_bar`);
                            for(var h = 0; h < hunger_bar.length; h++) {
                                if((h * 2 + 1) > $scope.player_info[key].hunger){
                                    hunger_bar[h].src = `../Minecraft/IMG/hunger_0.png`;
                                } else if((h * 2 + 1) == $scope.player_info[key].hunger){
                                    hunger_bar[h].src = `../Minecraft/IMG/hunger_1.png`;
                                } else if((h * 2 + 1) < $scope.player_info[key].hunger){
                                    hunger_bar[h].src = `../Minecraft/IMG/hunger_2.png`;
                                }
                            }

                            var playtime  = ((new Date()).getTime() - player_info_data[i].lastPlayed)/1000;

                            var Hours = Math.floor(playtime / 3600);
                            playtime = playtime - (Hours * 3600);
                            var Mins = Math.floor(playtime / 60);
                            playtime = playtime - (Mins * 60);
                            var Seconds = Math.floor(playtime);
                        
                            
                            let str =''
                            if(Hours > 0) {
                                str = `${Hours}H `
                            } 
                            if(Mins > 0) {
                                str = `${str}${Mins}M `
                            }
                            if (Seconds > 0) {
                                str = `${str}${Seconds}S `
                            }
                            
                            $scope.player_info[key].lastLogin = str;
                            $scope.player_info[key].location_x = player_info_data[i].location[0];
                            $scope.player_info[key].location_y = player_info_data[i].location[2];
                            flag = true;
                            break;
                        }
                    }
                    
                    if(flag == true) continue;
                    $scope.player_info[key].isLoggin = false;
                            
                    $scope.player_info[key].health = 0;
                    health_bar = document.getElementsByClassName(`${key}_health_bar`);
                    for(var h = 0; h < health_bar.length; h++) {
                        health_bar[h].src = `../Minecraft/IMG/health_0.png`;
                    }

                    $scope.player_info[key].hunger = 0;
                    hunger_bar = document.getElementsByClassName(`${key}_hunger_bar`);
                    for(var h = 0; h < hunger_bar.length; h++) {
                        hunger_bar[h].src = `../Minecraft/IMG/hunger_0.png`;
                    }

                    $scope.player_info[key].location_x = 0;
                    $scope.player_info[key].location_y = 0;
                    $scope.player_info[key].lastLogin = 0;
                    $scope.player_info[key].isConnect = false;
                }
                $scope.$apply();
            },error: function(msg) {			// 실패시
                console.log(msg)
            }
        });
    }

    getPlayerStatus();
})