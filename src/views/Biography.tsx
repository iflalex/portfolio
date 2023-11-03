import React from 'react'

export default function Biography(): React.ReactElement {
  return (
    <div className='flex flex-col gap-3 max-w-[900px]'>
      <h1 className='text-xl font-medium'>Alexandre IFFLI</h1>
      <div className='border border-main w-full'/>
      <p className='text-lg'>
        Bonjour, voici une brève présentation qui pourra vous faire une première idée de mon profil. Je suis né à Metz en Lorraine, j'ai actuellement 28 ans et je suis à la recherche d'un poste de développeur react avec l'ambition dévoluer vers le back-end le plus rapidement possible. Passionné d'informatique depuis toujours j'ai pu me professionnaliser grâce au cursus bac + 2 developpeur web et web mobile obtenu en 2022, ainsi que le bac + 3 développeur full stack également obtenu en septembre 2023. C'est avec la plus grande motivation que je serais prêt à mettre au profit de votre entreprise, toutes les compétences que j'ai acquises au long de mon parcours.
      </p>
    </div>
  )
}
