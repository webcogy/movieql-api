# graphQL API 만들기

#### skill list

- graphql yoga
- nodemon
- babel-node ( import {} from '' 방식으로 파일을 불러올수 있게 해줌 )
  -babel-cli (커멘드라인에서 바벨을 실행)

---

- graphql yoga란 무엇일까?
  graphql-yoga는 create-react-app 명령어와 비슷하다. GraphQL 프로젝트를 빠르게 시작할 수 있게 도와준다. 공식 리포지토리에는 ‘쉽게 설치하는데 중점을 둔 완전한 기능을 갖춘 GraphQL 서버’ 라고 설명되어있다. 쉬운설치, 바로 우리가 원하는것이다.

- nodemon은 node monitor의 약자로, 노드가 실행하는 파일이 속한 디렉터리를 감시하고 있다가 파일이 수정되면 자동으로 노드 애플리케이션을 재시작하는 확장 모듈이다.

```
yarn global add nodemon
yarn add graphql-yoga
yarn global add babel-cli --ignore-engines
yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
yarn add babel-node --dev
```
