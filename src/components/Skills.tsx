import { Badge } from "./ui/badge";
export default function Skill() {
  return (
    <section id="skills" className="flex flex-col justify-between items-center  max-w-2xl   ">
      <h1 className="text-xl left-0 hover:underline font-semibold">Skills here</h1>
      <div className="my-2 space-x-3 max-w-xl mx-auto ml-">
      {Array.from({ length: 7 }).map((_, index) => (
  
        // <Badge key={index}   variant="outline" className="hover:bg-white hover:text-black mx-auto">Nextjs</Badge>
        <div className="inline-flex flex-wrap gap-2" key={index}>
  <div className="inline-flex flex-nowrap items-center bg-white border border-gray-200 rounded-full p-1.5 pe-3 dark:bg-neutral-900 dark:border-neutral-700">
    <img className="me-1.5 inline-block size-6 rounded-full" src="https://www.freecodecamp.org/news/content/images/2023/11/thumbnail.001.jpeg" alt="Avatar"/>
    <div className="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
      Typescript
    </div>
  </div>

 
</div>
    ))}
      </div>
    </section>
  );
}
