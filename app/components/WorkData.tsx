interface portfolioProjects {
  id: number;
  image: string;
  title: string;
  category: string;
  link: string;
}

export const projectsData: portfolioProjects[] = [
  {
    // https://i.ytimg.com/vi/yjZmtEGq_ss/maxresdefault.jpg
    id: 1,
    image: "https://www.biztechcs.com/wp-content/uploads/2020/08/unnamed.png",
    title: "Web amazon",
    category: "web",
    link: "https://amazon-clone-by-rim.vercel.app/",
  },
  {
    // https://www.shutterstock.com/image-vector/government-portal-website-landing-page-260nw-2057172206.jpg
    id: 2,
    image:
      "https://www.symsoftsolutions.com/wp-content/uploads/2021/03/state.gov_-1024x624.png",
    title: "Web governer ",
    category: "web",
    link: "https://route-concept.vercel.app/",
  },
  {
    // https://repository-images.githubusercontent.com/505665460/54729ffb-e04f-42e0-a1bb-f4217f347366
    id: 3,
    image:
      "https://wordcounter.net/images/word-counter.jpg",
    title: "Workcounter web",
    category: "web",
    link: "https://word-counter-with-react.vercel.app/",
  },
  {
    // "https://market-resized.envatousercontent.com/previews/files/264329507/Resume-Template_Image-Preview.jpg?w=590&h=590&cf_fit=crop&crop=top&format=auto&q=85&s=c71997e6a6c83204f2b1c83c0f3866bea40add770aa85d77444488c5b322f474",
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVckxUQ6WxjP7KgbYp0MA26BCH0PKXU8WAow&s",
    title: "Resume design",
    category: "design",
    link: "https://my-resume-delta-rust.vercel.app/",
  },
  {
    // https://s3-alpha.figma.com/hub/file/3902776255/97c15153-77b9-4179-9f4f-045e965fa6b8-cover.png
    id: 5,
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*FuLySzyIpUysqMAtj9sbOA.png",
    title: "Figma design",
    category: "design",
    link: "https://figma-portfolio-azure.vercel.app/",
  },
];
interface project {
  name: string;
}

export const projectsNav: project[] = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "design",
  },
];
