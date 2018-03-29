module.exports = function(robot) {
    robot.hear(/我是谁/, function(res){
        res.send('世界上最帅的一个人');
    });                       
};