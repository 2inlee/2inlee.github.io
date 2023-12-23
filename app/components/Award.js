import HorizonLine from "../utils/HorizonLine";

const Awarded = () => {
  return (    
    <div id= "award" className="container text-left text-4xl mx-auto max-w-[80%] font-extrabold">
      <br />
      <br />
        <p>Awards</p>
        <HorizonLine text="And"/>
      <br />
      <div className="font-bold">
        <p>Activities</p>
      </div>
      <br />
      <div className="container text-left font-medium text-xl">
        <h3 className="font-bold">2023 컴퓨터소프트웨어공학 챌린지 : 우수상</h3>
        <p>Langchain과 VectorDB를 활용한 맞춤 여행 플랫폼 Travelmate
          <br />
          - Langchain를 이용해 Widipedia, OpenWeather 등 외부 API 연동
          <br />
          - 빠른 응답을 위해 consine similarity을 사용한 Redis Caching 전략 구현
          <br />
          - STT, TTS를 사용한 prompt 입력 및 출력 구현
          <br />
          사용기술 : Langchain, VectorDB, Redis, Flask, Flutter 등
          <br />
          : 코로나 팬데믹 이후 급격히 증가한 OTA 시장에 LLM을 적용해 사용자들의 일정을 계획하고 맞춤 정볼르 제공해주는 서비스제공
        </p>
      </div>
      <br />
      <div className="container text-left font-medium text-xl">
        <h3 className="font-bold">2023 동양미래EXPO 제41회 작품전시회 : 장려상</h3>
        <p>2023 KES 한국저자전 출품
          <br />
          컴퓨터비전 AI를 활용한 자동 쓰레기분리수거장치 AIoT 앱 / 웹
          <br />
          - Yolo V5를 활용한 쓰레기 분류 모델 학습 / 정확도 (mAP50) : 96%
          <br />
          - Spring, Flask를 사용한 K3S based MSA 구축
          <br />
          - 아두이노를 활용한 기어드모터, 스텝모터, DC모터, 서보모터 등을 사용해 자동 압축 및 분류
          <br />
          - 비동기처리 모터 임베디드 및 키오스크 앱 개발
          <br />
          사용기술 : Spring, Flask, Docker, Kubernetes, Yolo V5, Arduino, Next.js, Nginx 등
          <br />
          : KES 전시기간 (4일)동안 약 500명의 방문객 및 VIP 대상 PR
          <br />
          사람이 직접 분리수거 하는 단계에서 혼합배출을 줄여서 자원 재사용률을 증가시키는 기대효과
        </p>
        <br />
      </div>

      <div className="container text-left font-medium text-xl">
        <h3 className="font-bold">2022 유니버셜 디자인 메이커톤 : 장려상</h3>
        <p>모두를 위한 초인종 IoT 앱
          <br />
          - RasPi4 based Edge Computing 구성
          <br />
          - 카메라모듈, 센서 등 RESTFulAPI를 활용한 IoT 앱 개발
          <br />
          사용기술 : Audocad, Python, Arduino 등
          <br />
          : 고독사에 대한 문제를 해결하기 위해 사용자의 출입여부를 초인종에 센서를 부착하여 식별하고 
          수도, 가스, 전기 사용량이 일정치 미만인 경우 위험으로 간주하여 보호자 및 담당 공무원에게 알람이 
          가도록 만들어 고독사에 대한 시니어층의 두려움 극복과 사망률 절감에 기여
        </p>
        <br />
      </div>

      <div className="container text-left font-medium text-xl">
        <h3 className="font-bold">2022 Entrepreneurs League X StartUp : 우수상</h3>
        <p>푸드 세이빙 앱서비스
          <br />
          - 지도API 기반 푸드 세이빙앱
          <br />
          - RESTful API 설계
          <br />
          : 버려지는 음식물 쓰레기에 대한 문제를 가까운 가정과 식당부터 해결하기 위해 식당에서 
          남는 재료를 사용자들이 쉽게 접근할 수 있도록 만들고, 식당에는 AI기반의 식재료 주문 
          피드백을 제공해 지속적인 음식물쓰레기 절감을 기대
        </p>
        <br />
      </div>

      <div className="container text-left font-medium text-xl">
        <h3 className="font-bold">2022 42Seoul_La piscine과정 참여</h3>
        <p>
          - C언어 unistd.h 헤더를 사용해 sort, strjoin, split 함수등을 직접 구현
          <br />
          - 팀프로젝트로 배열과 재귀를 이용해 주도적으로 스카이라인 문제해결
        </p>
      </div>
    </div>
  );
};

export default Awarded;
