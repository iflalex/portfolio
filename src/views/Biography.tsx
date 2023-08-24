import React from 'react'

export default function Biography(): React.ReactElement {
  return (
    <div className='flex flex-col gap-3 max-w-[900px]'>
      <h1 className='text-xl font-medium'>Alexandre IFFLI</h1>
      <div className='border border-main w-full'/>
      <p className='text-lg text-justify'>
        Bonjour, voici une bref présentation qui pourra vour faire une première idées de mon profil.
        <br />
        Je suis née à Metz en Lorraine, j'ai actuellement 28 ans et je suis à la recherche d'un poste
        de développeur full-stack mobile, plus précisement avec les tchnologies "React React-native NodeJS".
        <br />
        Pationné d'informatique depuis toujours j'ai pu me profesionnaliser en 2021 grâce au cursus bac + 2 developpeur web et web mobile que j'ai obtenu, proposé par l'école Metz Numéric School.
        <br />
        C'est avec la plus grande motivation que je serais prêt à mettre au profit de votre entreprise, toutes les compétences que j'ai acquises au long de cette année d'experience.
      </p>
    </div>
  )
}
