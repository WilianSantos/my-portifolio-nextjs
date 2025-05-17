import { Icon } from '@iconify/react'

export function Skills() {
  return (
    <section
      id="skills"
      className="mt-60 pt-10 pb-10 flex flex-col items-center justify-center gap-5"
    >
      <h3 className="font-rubik text-3xl font-extrabold mb-7">Habilidades</h3>
      <div className="w-full">
        <div>
          <ul>
            <li>
              <strong>Back-end:</strong> Python, Django, Django REST Framework
            </li>
            <li>
              <strong>Front-end:</strong> React, Next.js, TailwindCSS,
              Bootstrap, HTML, CSS, JavaScript, TypeScript
            </li>
            <li>
              <strong>DevOps:</strong> Docker
            </li>
            <li>
              <strong>Outros:</strong> Git, MySQL
            </li>
          </ul>
        </div>
        <ul className="flex flex-col items-center flex-wrap md:flex-row lg:flex-row md:items-start lg:items-start justify-between gap-8">
          <li className="text-center w-full p-10">
            <h4 className="text-2xl mb-2">Back-end</h4>
            <ul className="grid grid-cols-2 gap-4 items-center">
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:python" width={60} height={60} />
                </div>
                <span className="text-base mt-1">Python</span>
              </li>
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:django-icon" width={60} height={60} />
                </div>
                <span className="text-base mt-1">Django</span>
              </li>
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:django" width={60} height={60} />
                </div>
                <span className="text-base mt-1">Django REST</span>
              </li>
            </ul>
          </li>

          <li className="text-center w-full p-10">
            <h4 className="text-2xl mb-2">Front-end</h4>
            <ul className="grid grid-cols-2 gap-4 items-center">
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon
                    icon="vscode-icons:file-type-html"
                    width={60}
                    height={60}
                  />
                </div>
                <span className="text-base mt-1">HTML</span>
              </li>
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon
                    icon="vscode-icons:file-type-css"
                    width={60}
                    height={60}
                  />
                </div>
                <span className="text-base mt-1">CSS</span>
              </li>
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:javascript" width={60} height={60} />
                </div>
                <span className="text-base mt-1">JavaScript</span>
              </li>
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:typescript-icon" width={60} height={60} />
                </div>
                <span className="text-base mt-1">TypeScript</span>
              </li>
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:nextjs-icon" width={60} height={60} />
                </div>
                <span className="text-base mt-1">Next.js</span>
              </li>
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:tailwindcss-icon" width={60} height={60} />
                </div>
                <span className="text-base mt-1">TailwindCSS</span>
              </li>
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:bootstrap" width={60} height={60} />
                </div>
                <span className="text-base mt-1">Bootstrap</span>
              </li>
            </ul>
          </li>

          <li className="text-center w-full p-10">
            <h4 className="text-2xl mb-2">DevOps</h4>
            <ul className="grid grid-cols-2 gap-4 items-center">
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:docker-icon" width={60} height={60} />
                </div>
                <span className="text-base mt-1">Docker</span>
              </li>
            </ul>
          </li>

          <li className="text-center w-full p-10">
            <h4 className="text-2xl mb-2">Outros</h4>
            <ul className="grid grid-cols-2 gap-4 items-center">
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:git-icon" width={60} height={60} />
                </div>
                <span className="text-base mt-1">Git</span>
              </li>
              <li>
                <div className="bg-blue-50 p-6 rounded-lg flex justify-center">
                  <Icon icon="logos:mysql" width={60} height={60} />
                </div>
                <span className="text-base mt-1">MySQL</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}
