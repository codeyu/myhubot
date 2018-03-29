module.exports = function(robot) {
    robot.hear(/我是谁/, function(res){
        res.send('是世界上最帅的一个人');
    });  
    robot.hear(/谁/, function(res){
        res.send('你你你');
    });   
    robot.router.get('/', function(req, res) {
        res.send('ok');
    });                
};