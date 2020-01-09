var Redis = require('ioredis');
var redis = new Redis({
    port: 6380,  // Redis slave 접속용 포트
    host: "redis-dev.opsnow.io",
    password: "redispassword"
});
var key = "name";
var value = "hong gil dong";

redis.set(key,value,function(err,result){
    if(err){
        // redis slave 서버에 set 하면 에러 발생함
        console.log(err);
        return;
    }
    
    // key TTL 값을 10초로 설정함, 이 데이터는 10초 후에 삭제됩니다.
    // 데이터에 따라 적절하게 TTL 값을 설정해서 사용 바랍니다.
    // 데이터를 영구적으로 저장하려면 아래 라인을 주석처리 하면 되나 권장하지 않음
    // 영구적으로 저장하는 데이터는 DataBase를 사용하는것이 바람직함.
    // Redis는 휘발성 데이터만 저장하도록 제한 합니다.
    redis.expire(key,10);

    console.log("저장 key : " + key);
    console.log("저장 value : " + value);
    console.log("저장 result : " + result);
});

redis.get(key,function(err,result){
    if(err){
        console.log(err);
        return;
    }
    console.log("조회 key : " + key);
    console.log("조회 value : " + result);
});

// 이 프로그램을 5초 후에 exit 함
setTimeout(() => {
    process.exit();
}, 5000);