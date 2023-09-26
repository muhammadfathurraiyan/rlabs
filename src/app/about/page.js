import Reveal from "@/components/global/Reveal";

const About = () => {
  return (
    <div className="flex flex-col gap-20 px-24 max-sm:px-8 py-8">
      <div className="flex flex-col h-screen justify-center items-center">
        <Reveal>
          <h1 className="font-bold text-5xl py-1">assalamualaikum🤙</h1>
        </Reveal>
        <Reveal>
          <p className="text-xl">
            hello world welcome to my little laboratory👨‍🔬.
          </p>
        </Reveal>
        <div className="flex items-end gap-8">
          <h1 className="animate-bounce text-5xl">👇</h1>
          <img
            className="mt-4 w-[400px]"
            src="https://media.tenor.com/cEGeOvkWXiEAAAAd/assalamu-alaikum-ronaldo.gif"
          />
          <h1 className="animate-bounce text-5xl">👇</h1>
        </div>
      </div>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <Reveal>
          <h1 className="font-bold text-5xl py-1">what is this?🙄</h1>
        </Reveal>
        <Reveal>
          <p className="text-xl text-center">
            this is my little laboratory😆
            <br />
            and i will do a lot of experiments here heheheh <br /> stay tuned
            for the next update🚀.
          </p>
        </Reveal>
        <img
          className="mt-4 w-[400px]"
          src="https://media.tenor.com/zh58XZRJuzYAAAAd/cat-hacking.gif"
        />
      </div>
      <div className="flex flex-col justify-center h-screen items-center">
        <Reveal>
          <h1 className="font-bold text-5xl py-1">who am i?🤔 </h1>
        </Reveal>
        <Reveal>
          <p className="text-xl text-center">
            i am{" "}
            <a
              target="_blank"
              href="https://muhammadfathurraiyan.site/"
              className="font-semibold hover:text-cyan-500 duration-300 cursor-pointer"
            >
              Raiyan
            </a>{" "}
            soon to be a junior web developer, i love progamming especially web
            programming😍. i have 2 years experience in web development and
            unfortunately until right now i'm still unemployed sad😭 but that's
            the truth. my main dream is 3M *not million, that's a secret, but my
            other dream is to work in a big tech company like google, meta,
            netflix, etc. ok that's enough🤚.
          </p>
        </Reveal>
      </div>
      <div className="flex flex-col h-screen justify-center items-center">
        <Reveal>
          <h1 className="font-bold text-5xl py-1">uhmmm?🤷‍♂️ </h1>
        </Reveal>
        <Reveal>
          <p className="text-xl text-center">
            what's next? i have no idea what to say hehhehh. thank you for
            visiting👍. hit me up if u have any questions i put my social links
            bellow bye👋.
          </p>
        </Reveal>
        <img
          className="mt-4 w-[400px]"
          src="https://media.tenor.com/9sNYD2orJyMAAAAd/see-you-cat-kiss.gif"
        />
      </div>
    </div>
  );
};

export default About;
