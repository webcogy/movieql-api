# graphQL API 만들기

참고 :
https://byseop.netlify.app/graphql-api01/
https://www.youtube.com/watch?v=ZzHD04QTwI8

#### skill list

- graphql yoga (graphQL 서버 생성 => react의 CRA와 같은 개념)
- nodemon
- babel-node ( import {} from '' 방식으로 파일을 불러올수 있게 해줌 )
- babel-cli (커멘드라인에서 바벨을 실행)

---

- graphql yoga란 무엇일까?
  graphql-yoga는 create-react-app 명령어와 비슷하다. GraphQL 프로젝트를 빠르게 시작할 수 있게 도와준다. 공식 리포지토리에는 ‘쉽게 설치하는데 중점을 둔 완전한 기능을 갖춘 GraphQL 서버’ 라고 설명되어있다. 쉬운설치, 바로 우리가 원하는것이다.

- nodemon은 node monitor의 약자로, 노드가 실행하는 파일이 속한 디렉터리를 감시하고 있다가 파일이 수정되면 자동으로 노드 애플리케이션을 재시작하는 확장 모듈이다.

schema란 무엇인가?
우리가 위에서 본 에러에서 schema를 볼 수 있었다. 그렇다면 schema는 무엇일까?
schema는 우리가 사용자에게 보내거나 받을 data에 대한 서술이라고 생각하면 된다. 이 schema는 Node.js나 Database를 위한것이 아니라 단지 Graphql을 위한것이고 그저 무엇을 받을지 무엇을 줄지에 대한 설명이다.

---

#### 설치

```
yarn global add nodemon
yarn add graphql-yoga
yarn global add babel-cli --ignore-engines
yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
yarn add babel-node --dev
```

---

## schema

1. schema.graphql 에서 스키마 작성.
2. resolver에 뱉을 값 입력.
3. index에서 resolver를 이용한 server생성

※ Query는 설명, Resolvers는 프로그래밍
※ schema.graphql에 작성된 스키마는 마냥 육안용으로만 작성되는 것이 아니라, 실제 resolver에 영향을 끼친다.

index.js파일에서 저장하면 4000 열림 ( http://localhost:4000 )

playground에서 아래 소스로 schema 확인

```json
query{
  name,
  person{
    age
  }
}
```
