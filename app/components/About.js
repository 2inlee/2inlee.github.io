import HorizonLine from "../utils/HorizonLine";

const About = () => {
  return (
      <div className="container text-left text-4xl mx-auto max-w-[80%] font-extrabold">
      <div className="mt-40" />
        <p>About</p>
        <HorizonLine text="Me"/>
      <br />
      <div className="font-bold">
        <p>Poem</p>
      </div>
      <br />
      <div className="container text-left text-xl font-medium">
        <p>I am a computer software engineering student who loves literature more than anyone else.
          <br />
          <br />
          I like to read books and write.
          <br />
          But I found that developing is not much different from reading books and writing.
          <br />
          <br />
          Some people say that development is hard and mechanical
          I think the process of coding line by line is no different from writing, drawing, and speaking logically.
          <br />
          You think more to write better poems, and you think more to write better codes like you're refining the context over and over again.
          <br />
          <br />
          I think the only difference between art and development is the speed of how quickly it can change the world.
          <br />
          <br />
          I am an artist who wants to change into a better world.</p>
      </div>
      <br />
      </div>
  );
};

export default About;
