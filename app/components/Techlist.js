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
      <div className="container text-left font-medium">
        <p>Spring, Nest.js, Flask, Python, C</p>
      </div>
      <br />
      <div className="font-bold">
        <p>Knowledgeable</p>
      </div>
      <br />
      <div className="container text-left font-medium">
        <p>ML(ComputerVision, RNN, CNN),Prompt Engineering, Typescript, Arduino, C#, Cpp, FastAPI, Vue.js, React.js, Tensorflow, Next.js, Flutter</p>
      </div> 
      <br />
      <div className="font-bold">
        <p>ETC</p>
      </div>
      <br />
      <div className="container text-left font-medium">
        <p>Git, Docker, Kubernetes, Nginx, Figma, Edrawmax, AWS EC2/S3, Notion, Linux</p>
      </div>
    </div>
  );
};

export default Techlist;
