import Image1 from "../../public/assets/testimonial1.png";
import Image2 from "../../public/assets/testimonial2.png";
import Image3 from "../../public/assets/testimonial3.png";
import { StaticImageData } from "next/image";

interface ClientReview {
    id : number,
    image : StaticImageData ,
    title : string ,
    description : string 
}


export  const TestimomialData  : ClientReview[] = [
    {
        id: 1,
        image: Image1,
        title: "Huzaifa",
        description: 
        "A really good job, all aspects of the project were followed step by step and with good results."
    },
    {
        id: 2,
        image: Image2,
        title: "Kulsoom Adnan",
        description:
        "A really good job, all aspects of the project were followed step by step and with good results."
    },
    {
        id: 3,
        image: Image3,
        title: "Nigar",
        description:
        "A really good job, all aspects of the project were followed step by step and with good results."
    }
];