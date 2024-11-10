import React from 'react';
import Image from 'next/image';

function WorkItems({item}) {
  return (
    <div className="work__card" key={item.id}>
        <Image src={item.image} alt="" className="work__img"/>
    </div>
  )
}

export default WorkItems