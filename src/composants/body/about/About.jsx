

function About() {
  return (
    <>
      <div className=" md:px-14 p-4 max-w-s mx-auto" id="about">
        <h2 className=" md:text-4xl text-center text-3xl font-extrabold pb-3">
          A propos
        </h2>
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-2">
          <div className=" md:w-1/2">
            <img src="../../public/P1.png" alt="ùission" />
          </div>

          <div className=" md:w-4/5">
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              reiciendis beatae obcaecati autem blanditiis, atque alias adipisci
              facere molestiae dicta ex nulla ratione, tempore dolor dolore
              suscipit earum in velit!
            </p>
            <p className=" text-slate-500 text-lg mb-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              reiciendis beatae obcaecati autem blanditiis, atque alias adipisci
              facere molestiae dicta ex nulla ratione, tempore dolor dolore
              suscipit earum in velit!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About