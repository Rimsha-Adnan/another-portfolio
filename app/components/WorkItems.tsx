import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface portfolioProjects {
  id: number;
  image: string;
  title: string;
  category: string;
  link: string;
} 
function WorkItems({ id, image, title, link }: portfolioProjects) {
  return (
    <div className="work__card" key={id}>
        <Image src={image} quality={100} alt="Your image" className="work__img" width={295} height={295}/>
        <h3 className="work__title">{title}</h3>
        <Link href={link} className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </Link>
    </div>
  )
}

export default WorkItems