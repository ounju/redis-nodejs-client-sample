# Redis Node.js Client Sample
## 사전 준비
* node.js가 설치되어 있어야 합니다. https://nodejs.org/ko/download/ 사이트에서 OS에 맞도록 설치하세요.
* 예제를 실행하는 폴더에서 아래 명령어를 이용하여 ioredis 모듈을 설치해야 합니다. 명령어 실행하면 node_modules 폴더가 생성됩니다.
```sh
$ npm install ioredis
```
* ioredis 관련 문서 참고 : https://github.com/luin/ioredis
## 파일 설명
### redis-client-master.js
redis master 서버에 접속하여 set, get 실행하는 node.js로 작성된 파일입니다.  
실행 하고 5초 후에 프로그램이 종료되도록 되어 있습니다.  
"node redis-client-master.js" 명령어로 실행하면 됩니다.  
### redis-client-slave.js
redis slave 서버에 접속하여 set, get 실행합니다.  
slave 서버는 read 전용이므로 set 실행하면 에러가 발생하도록 되어 있습니다. 즉, 에러가 발생해야 정상입니다.  
get 은 실행이 되고 null 값이 조회 되어야 정상입니다.  
만약, redis-client-master.js 가 실행되고 있다면 이 프로그램에서 set 한 value 인 "hong gil dong" 이 조회 됩니다.
## 실행 방법
### Redis master client sample 실행
```sh
$ node redis-client-master.js
```
실행 결과
```sh
저장 key : name
저장 value : hong gil dong
저장 result : OK
조회 key : name
조회 value : hong gil dong
```
### Redis slave client sample 실행
```sh
$ node redis-client-slave.js
```
실행 결과
```
ReplyError: READONLY You can't write against a read only replica.
    at parseError (/Users/ounju-kim/redis-nodejs-client-sample/node_modules/redis-parser/lib/parser.js:179:12)
    at parseType (/Users/ounju-kim/redis-nodejs-client-sample/node_modules/redis-parser/lib/parser.js:302:14) {
  command: { name: 'set', args: [ 'name', 'hong gil dong' ] }
}
조회 key : name
조회 value : null
```
* read 전용 서버이기 때문에 set 실행하면 에러가 발생하는게 정상입니다. 
* set 한 값이 없기 때문에 "null" 이 조회되는게 정상입니다.  
