let app = angular.module("ngc_minecraft", []);
var names = ['KIMYC1223', 'sogogii', 'Namzi_', 'KIMWUPWUP'];

app.controller("ngc_controller", function($scope){
    $scope.waypoints = [
        {
            waypoint_name : '태초 마을',
            waypoint_url : '../Minecraft/IMG/waypoint_0.png',
            location : [867, 90, 600],
            description : '살기좋은 머저리 게임 크루 마을'
        },
        {
            waypoint_name : '몬스터 타워',
            waypoint_url : '../Minecraft/IMG/waypoint_1.png',
            location : [1144, 39, 881],
            description : '주영이가 만든 경험치 수급용 몬스터 타워'
        },
        {
            waypoint_name : '바다 신전',
            waypoint_url : '../Minecraft/IMG/waypoint_2.png',
            location : [168, 69, 772],
            description : '바닷속 고레벨 던전. 아직 탐험하지 않음'
        },
        {
            waypoint_name : '아무도 없는 마을',
            waypoint_url : '../Minecraft/IMG/waypoint_3.png',
            location : [1326, 92, 319],
            description : '춘식이의 고향. 이젠 철골렘만 남았다.'
        },
        {
            waypoint_name : '바닷가 마을',
            waypoint_url : '../Minecraft/IMG/waypoint_4.png',
            location : [1297, 67, 2019],
            description : '바닷가에 위치한 큰 마을. 백수가 많다.'
        },
        {
            waypoint_name : '절벽 위 마을',
            waypoint_url : '../Minecraft/IMG/waypoint_5.png',
            location : [1935, 76, 1689],
            description : '큰 절벽 바로 위에 위치한 마을'
        },
        {
            waypoint_name : '깊은 동굴',
            waypoint_url : '../Minecraft/IMG/waypoint_6.png',
            location : [1972, 97, 603],
            description : '수직으로 깊은 절벽형 동굴 입구. 아직 탐험하지 않음'
        },
        {
            waypoint_name : '모리아 광산',
            waypoint_url : '../Minecraft/IMG/waypoint_7.png',
            location : [1119, -11, 1981],
            description : '다이아 89개를 캤었던 초대형 광산. 아직 탐험이 끝나지 않음'
        },
    ];

    $scope.waypoint_select = null;
    $scope.connect_player = null;

    $scope.listClick = (index) => {
        $scope.waypoint_select = $scope.waypoints[index];
    }

    $scope.disconnect = () => {
        for(var i = 0; i < names.length ; i++) {
            $scope.player_info[names[i]].isConnect = false;
        }
        $scope.connect_player = null;
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
                    $scope.connect_player = username;

                    $scope.$apply();
                } else {
                    alert(`인증 실패`)
                    $scope.connect_player = null;
                }
            },
            error: function(msg) {
                alert(`인증 실패`)
                $scope.connect_player = null;
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
        location_y : 0,
        location_z : 0
    }
    $scope.player_info['sogogii'] = {
        isLoggin : false,
        isConnect : false,
        health : 0,
        hunger : 0,
        lastLogin : 0,
        location_x : 0,
        location_y : 0,
        location_z : 0
    }
    $scope.player_info['Namzi_'] = {
        isLoggin : false,
        isConnect : false,
        lastLogin : 0,
        health : 0,
        hunger : 0,
        lastLogin : 0,
        location_x : 0,
        location_y : 0,
        location_z : 0
    }
    $scope.player_info['KIMWUPWUP'] = {
        isLoggin : false,
        isConnect : false,
        health : 0,
        hunger : 0,
        lastLogin : 0,
        location_x : 0,
        location_y : 0,
        location_z : 0
    }

    let getPlayerStatus = () => {
        var urlString = `http://nerdgamecrew.link:4567/v1/players`;
        return new Promise(function (resolve,reject) {
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
                                $scope.player_info[key].location_y = player_info_data[i].location[1];
                                $scope.player_info[key].location_z = player_info_data[i].location[2];
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
                        $scope.player_info[key].location_z = 0;
                        $scope.player_info[key].lastLogin = 0;
                        $scope.player_info[key].isConnect = false;
                        if($scope.connect_player == key) {
                            $scope.connect_player = null;
                        }
                    }
                    console.log(`good!`)
                    $scope.$apply();
                    resolve();
                },error: function(msg) {			// 실패시
                    console.log(msg)
                    reject();
                }
            });
        })
    }

    getPlayerStatus();

    $scope.teleport = () => {
        var isMove = confirm(`${$scope.waypoint_select.waypoint_name} 웨이포인트로 이동합니다.`)

        if(isMove == false) {return}

        getPlayerStatus().then( () => {
            if($scope.waypoint_select == null) {
                alert(`웨이포인트를 선택해주세요`);
                return;
            }
    
            if($scope.connect_player == null) {
                alert(`Player를 먼저 선택해주세요`);
                return;
            }

            var flag = false;

            for(var i = 0 ; i < $scope.waypoints.length; i++) {
                if ( ($scope.player_info[$scope.connect_player].location_x > ($scope.waypoints[i].location[0] -5)) 
                  && ($scope.player_info[$scope.connect_player].location_x < ($scope.waypoints[i].location[0] +5))
                  && ($scope.player_info[$scope.connect_player].location_y > ($scope.waypoints[i].location[1] -5))
                  && ($scope.player_info[$scope.connect_player].location_y < ($scope.waypoints[i].location[1] +5))
                  && ($scope.player_info[$scope.connect_player].location_z > ($scope.waypoints[i].location[2] -5))
                  && ($scope.player_info[$scope.connect_player].location_z < ($scope.waypoints[i].location[2] +5)) ) {
                    flag = true;
                    break;
                  }
            }


            if(flag == false) {
                alert(`웨이포인트에서 다른 웨이포인트로만 이동 할 수 있습니다.`)
                return;
            }

    
            let query_string1 = `gamerule sendCommandFeedback false`;
            let query_string2 = `tp ${$scope.connect_player} ${$scope.waypoint_select.location[0]} ${$scope.waypoint_select.location[1]} ${$scope.waypoint_select.location[2]}`
            let query_string3 = `title ${$scope.connect_player} title {"text":"${$scope.waypoint_select.waypoint_name}"}`;
            let query_string4 = `title ${$scope.connect_player} subtitle {"text":"${$scope.waypoint_select.description}"}`;
            let query_string5 = `playsound entity.player.levelup master ${$scope.connect_player} ${$scope.waypoint_select.location[0]} ${$scope.waypoint_select.location[1]} ${$scope.waypoint_select.location[2]}`
            console.log(query_string1);
            console.log(query_string2);
            console.log(query_string3);
            console.log(query_string4);
            console.log(query_string5);
    
            var sendPostMessage = (qs) => {
                return new Promise(function (resolve,reject) {
                    jQuery.ajax({
                        type:'POST',
                        url: `http://nerdgamecrew.link:4567/v1/server/exec`,
                        headers:{'key':'ngc_minecraft'},
                        data:{ command : qs},
                        ContentType :'application/x-www-form-urlencoded;',
                        success: function() {
                            resolve(); return;
                        },
                        error: function() {
                            reject(); return;
                        }
                    });
                });
            };
    
            sendPostMessage(query_string1)
            .then(sendPostMessage(query_string2)
            .then(sendPostMessage(query_string3)
            .then(sendPostMessage(query_string4)
            .then(sendPostMessage(query_string5)))))
        })

    }

    $scope.refreshFlag = false;

    $scope.refresh = () => {
        if($scope.refreshFlag) return;
        console.log(`click!`)
        $scope.refreshFlag = true;
        getPlayerStatus()
        .then(()=>{$scope.refreshFlag =false; console.log(`refresh status... resolve`)})
        .catch(()=>{$scope.refreshFlag =false; console.log(`refresh status... reject`)})
    }
})