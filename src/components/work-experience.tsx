export default function WorkExperience(){
    return(
        <section id="work" className="flex flex-col justify-between max-w-xl gap-4">
        <h3 className="text-lg mx-auto  font-bold text-gray-800 dark:text-white hover:underline">
          Work Experience
        </h3>

        <div className="flex flex-col bg-white border border-t-4 border-t-gray-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-gray-500 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-5">
            <a
              href="https://www.hyperce.io"
              className="cursor-pointer hover:underline  "
            
            >
              Hyperce Technologies Pvt Ltd
            </a>

            <p className="mt-2 text-gray-500 dark:text-neutral-400">
              In Hyperce, I worked on projects using NestJS, GraphQL, and
              TypeORM for backend technologies and Next.js for frontend.
            </p>
            <div>
              <h1 className="text-xs text-white font-medium">
                May,2024 &#x2192; Sep,2024
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white border border-t-4 border-t-gray-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-gray-500 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-5">
            <a
              href="#"
              className="cursor-pointer hover:underline z-"
              target="_blank"
              rel="noopener noreferrer"
            >
              Technical Lead at Anova Club, CSE-Data-Science Jain University
            </a>

            <p className="mt-2 text-gray-500 dark:text-neutral-400">
              In Hyperce, I worked on projects using NestJS, GraphQL, and
              TypeORM for backend technologies and Next.js for frontend.
            </p>
            <div>
              <h1 className="text-xs text-white font-medium">
                May,2024 &#x2192; Sep,2024
              </h1>
            </div>
          </div>
        </div>
      </section>
    )
}