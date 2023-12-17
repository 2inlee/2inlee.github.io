import HorizonLine from "../utils/HorizonLine";

const Techlist = () => {
  return (
    <div id= "tech" className="container text-left text-4xl mx-auto max-w-[80%] font-extrabold">
        <p>Tech</p>
        <HorizonLine text="List"/>
      <br />
      <div className="font-bold">
        <p>Strong</p>
      </div>
      <br />
      <div className="container text-left font-medium text-2xl">
        <p>BE | Spring[JPA], Nest.js[TypeORM], Flask, RDBMS[MySQL, PostgreSQL]</p>
        <br/>
        <p>FE | Next.js, React.js</p>
      </div>
      <br />
      <div className="font-bold">
        <p>Knowledgeable</p>
      </div>
      <br />
      <div className="container text-left font-medium text-2xl">
      <p>BE | Node.js, Django, FastAPI, NoSQL[Redis, Firebase] </p>
      <br/>
      <p>FE | Android Jetpack Compose, Flutter, Vue.js</p>
      <br/>
      <p>Utils | ChatGPT API, Prompt Engineering, Langchain, Arduino, C, C#, C++, Tensorflow</p>
      </div> 
      <br />
      <div className="font-bold">
        <p>ETC</p>
      </div>
      <br />
      <div className="container text-left font-medium text-2xl">
        <p>Dev | Git, Docker, Kubernetes, Nginx, Linux, CloudFlare, AWS EC2/S3 </p>
        <br/>
        <p>PM | Figma, Edrawmax, Notion, Jira</p>
      </div>
    </div>
  );
};

export default Techlist;
