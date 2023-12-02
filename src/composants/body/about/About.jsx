

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
              Bienvenue chez SNL Rapide Paie, l'adresse incontournable pour
              simplifier vos paiements en ligne. Notre plateforme offre une
              expérience utilisateur sans faille, mettant l'accent sur la
              simplicité et la sécurité. Que vous régliez vos factures
              mensuelles, fassiez des achats en ligne ou gériez vos abonnements,
              nous sommes là pour rendre chaque transaction transparente et
              efficace.
            </p>
            <p className=" text-slate-500 text-lg mb-3 text-justify">
              Chez SNL Rapide Paie, nous comprenons l'importance de la confiance
              dans les transactions en ligne. C'est pourquoi notre équipe
              dévouée travaille sans relâche pour garantir la sécurité de vos
              informations financières. Explorez une nouvelle ère de paiements
              en ligne avec nous, où la praticité rencontre la tranquillité
              d'esprit. Avec notre engagement envers l'innovation et la
              fiabilité, nous sommes prêts à façonner ensemble le futur de vos
              transactions financières.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About