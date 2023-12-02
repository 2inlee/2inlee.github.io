import HorizonLine from "../utils/HorizonLine";

const About = () => {
  return (
      <div className="container text-left text-4xl mx-auto max-w-[80%] font-extrabold">
      <div className="mt-40" />
        <p>About</p>
        <HorizonLine text="Me"/>
      <br />
      <div className="font-bold">
        <p>Introduce</p>
      </div>
      <br />
      <div className="container text-left text-xl font-medium">
        <p>빠르게 시도하고 정확하게 배우는 개발자 이인호 입니다.
        <br />
        새로운 기술을 활용해 비즈니스 문제를 해결하고 직접적으로 돈을 버는 것에 관심이 많습니다.
        <br />
        반복되는 업무을 자동화하고 사회적으로 임팩트가 큰 문제들을 해결하는 것에 많은 흥미를 느낍니다.
        <br />
        <br />
        - 각종 ESG 공모전 ,해커톤 수상경력
        <br />
        - 국가기관 납품 교육용 키오스크 개발, 운영 경험
        <br />
        - 프로젝트 기획부터 설계 개발 배포까지 일련의 프로덕션 관리 경험
        <br />
        <br />
        B.E |
        <br />
        - Token, Session, 암호화 기법을 사용한 Guard, Auth, Validation 구현경험
        <br />
        - URL parameter를 활용한 Page/Cursor Based Pagination 구현경험
        <br />
        - JPA, TypeORM 을 활용한 ORM 사용경험
        <br />
        - Docker, Kubernetes, Nginx 를 활용한 MSA 구축경험
        <br />
        - SQL(MySQL, PostgreSQL) , noSQL(Firebase, Redis, VectorDB) 를 활용한 개발경험
        <br />
        <br />

        P.M | 
        <br />
        - Notion, Jira, Git을 사용한 Agile Workflow 경험
        <br />
        - 와이어프레임, 기능명세서, UML, 린보드 작성 경험</p>
      </div>
      <br />
      </div>
  );
};

export default About;
