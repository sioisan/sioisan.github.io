window.alert = function() {
    return false;
}

function a(){
//心悦荣耀战场
amsSubmit(166962,512400);//游戏内消耗疲劳值120点 3
amsSubmit(166962,512398);//游戏内在线时长40分钟 3
amsSubmit(166962,512396);//充值DNF30元点券 3
amsSubmit(166962,512402);//游戏内PK3次 3

amsSubmit(166962,512399);//游戏内消耗疲劳值50点 2
amsSubmit(166962,512395);//充值DNF20元点券 2
amsSubmit(166962,512393);//邮箱无未读邮件 2
amsSubmit(166962,512397);//游戏内在线时长30分钟 2

amsSubmit(166962,512389);//游戏内在线时长15分钟 1
amsSubmit(166962,512388);//充值DNF10元点券 1
amsSubmit(166962,512391);//游戏内PK1次 1
amsSubmit(166962,512390);//游戏内消耗疲劳值10点 1

//心悦礼包
doAction(513573,7);//心悦3周礼包
doAction(513573,6);//心悦2周礼包
doAction(513573,5);//心悦1周礼包
doAction(513581,1);//特邀会员周礼包
doAction(513583,7);//心悦3月礼包
doAction(513583,6);//心悦2月礼包
doAction(513583,5);//心悦1月礼包
doAction(513584,1);//特邀会员月礼包
amsSubmit(166962,513585);//周期礼包

}

a();

setTimeout(a,3000);

window.alert = function() {
    return false;
}

setTimeout(function (){confirm("领取完成")},3000);
