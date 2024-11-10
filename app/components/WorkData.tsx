import Work1  from "../../public/assets/work1.jpg";
import Work2  from "../../public/assets/work2.jpg";
import Work3  from "../../public/assets/work3.jpg";
import Work4  from "../../public/assets/work4.jpg";
import Work5  from "../../public/assets/work5.jpg";
import { StaticImageData } from "next/image"
interface portfolioProjects {
    id : number,
    image : StaticImageData ,
    title : string ,
    category : string 
}

export const projectsData: portfolioProjects[] = [
    {
        id: 1,
        image: Work1,
        title: "Web design",
        category: "web"
    },
    {
        id: 2,
        image: Work2,
        title: "App movil",
        category: "app"
    },
    {
        id: 3,
        image: Work3,
        title: "Brand design",
        category: "design"
    },
    {
        id: 4,
        image: Work4,
        title: "App movil",
        category: "app"
    },
    {
        id: 5,
        image: Work5,
        title: "Web design",
        category: "web"
    }
];
interface projects {
    name:string
}

export const projectsNav: projects[] = [
    {
        name:'all',
    },
    {
        name:'web',
    },
    {
        name:'design',
    }
]