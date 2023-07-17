import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5 ">
            Bienvenue chez Evo Fitness, le meilleur choix pour une vie saine et active ! Rejoignez notre famille et transformez votre corps en une œuvre d'art. Avec des installations de pointe, des entraîneurs professionnels et une ambiance motivante, nous vous offrons tout ce dont vous avez
            besoinpour atteindre vos objectifs de remise en forme.
          </p>
          <p>© EVOGYM All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold ">Links</h4>
          <p className=" my5">"Evo Fitness - Votre chef-d'œuvre !"</p>
          <p className=" my5">"Evo Fitness - Votre corps!"</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold ">Contact US</h4>
          <p className=" my5">"Chaque pas compte, continue à avancer!"</p>
          <p className=" my5">(666)123-678-111</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
