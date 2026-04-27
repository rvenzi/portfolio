import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="bg-gray-900 border-b-5 border-gray-600 shadow-md p-15 text-center">
        <h1 className="text-5xl font-bold">Renan Venzi</h1>
        <p className="text-gray-600 text-3xl">software developer</p>
      </header>

      <section className="p-15 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-5">Welcome</h2>
        <p className="text-gray-400 text-xl mb-2.5">
          My name is Renan Venzi, I'm from Brazil, and I'm a systems development technician with experience creating web applications from scratch to production.</p>

        <p className="text-gray-400 text-xl mb-2.5">
          Throughout my career, I've learned and deepened my knowledge in various languages ​​such as Html and CSS, Next.js, TailwindCSS, C++, Python, JavaScript, and PHP, Prisma, MySQL, PostgreeSQL developing projects that broadened my software perspective.
        </p>
        
        <p className="text-gray-400 text-xl mb-2.5">
          I was part of a Junior Computer Science company, CODE JR., for over a year and a half, where I had contact with real projects and clients.
        </p>

        <p className="text-gray-400 text-xl mb-2.5">
          Currently, I'm studying Computer Science in UFJF and working as a freelancer seeking opportunities. I believe that the constant pursuit of knowledge is what sets me apart—each project is a new chance to learn something powerful.
        </p>

        <section className="bg-black py-12">
              <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* FRONTEND */}
                  <div className="border-3 border-gray-600 shadow-md  p-6 hover:bg-gray-700 transition-colors duration-200">
                    <h3 className="text-xl font-semibold mb-4">FRONTEND</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>HTML/CSS</li>
                    </ul>
                  </div>

                  {/* BACKEND */}
                  <div className="border-3 border-gray-600 shadow-md  p-6 hover:bg-gray-700 transition-colors duration-200">
                    <h3 className="text-xl font-semibold mb-4">BACKEND</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>PHP</li>
                      <li>Python</li>
                      <li>C++</li>
                    </ul>
                  </div>

                  {/* BANCO DE DADOS */}
                  <div className="border-3 border-gray-600 shadow-md  p-6 hover:bg-gray-700 transition-colors duration-200">
                    <h3 className="text-xl font-semibold mb-4">DATABASE</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>MySQL</li>
                      <li>PostgreSQL</li>
                      <li>Prisma</li>
                    </ul>
                  </div>

                  {/* DEVOPS & TOOLS */}
                  <div className="border-3 border-gray-600 shadow-md  p-6 hover:bg-gray-700 transition-colors duration-200">
                    <h3 className="text-xl font-semibold mb-4">DEVOPS & TOOLS</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>Git</li>
                      <li>VS Code</li>
                      <li>Figma</li>
                      <li>Railway</li>
                    </ul>
                  </div>
                </div>
              </div>
        </section>

        <h2 className="text-3xl font-bold mb-5">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-3 border-gray-600 shadow-md p-5 shadow-md hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-bold mb-3">Projeto 1: Sistema de Gerenciamento - Loja Virtual/Perfumaria</h3>
            <p className="text-gray-400 text-lg mb-3">
              Um sistema de gerenciamento para uma loja virtual de perfumes, desenvolvido com Next.js, TailwindCSS, Prisma, PostgreSQL. O sistema inclui funcionalidades para gerenciamento de produtos, controle de estoque e processamento de pedidos.
            </p>
            <a 
              href="https://github.com/rvenzi/Next-Desafio-2026.1.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Ver projeto no GitHub
            </a>
          </div>
        
          <div className="border-3 border-gray-600 shadow-md p-5 shadow-md hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-bold mb-3">Projeto 2: Site de Portfólio</h3>
            <p className="text-gray-400 text-lg mb-3">
              Um site de portfólio pessoal para mostrar meus projetos e habilidades. Construído com Next.js e Tailwind CSS.
            </p>
            <a 
              href="https://github.com/rvenzi/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Ver projeto no GitHub
            </a>

          </div>

          <div className="border-3 border-gray-600 shadow-md p-5 shadow-md hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-bold mb-3">Projeto 3: Sistema de Gerenciamento - Barbearia</h3>
            <p className="text-gray-400 text-lg mb-3">
              Um sistema de gerenciamento para uma barbearia, desenvolvido no processo de capacitação em conjunto parceiros da Empresa JR., feito usando HTML, CSS, Javascript, PHP e MySQL. O sistema inclui funcionalidades para agendamento de clientes, gerenciamento de funcionários e controle de estoque.
            </p>
            <a 
              href="https://github.com/jvrangel11/FadeClub-Trainee-2025.2.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Ver projeto no GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t-5 border-gray-600 shadow-md p-15 text-center mt-auto">
        <p className="text-gray-600 text-3xl font-bold">Contact me</p>
        <div className="flex flex-row justify-center text-center mt-5">
          <div className="flex flex-col items-center mx-5 mt-4 mb-2">
            <Image
              src="/pngwing.com (4).png"
              alt="Email Icon"
              width={42}
              height={42}
              className="mx-5 mt-4 mb-2"
            />
            <p className="text-gray-600 text-lg ">
              <a href="mailto:renanvenzi@gmail.com" className="text-blue-500 hover:underline">
                G-mail
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center mx-5 mt-4 mb-2">
            <Image
              src="/pngwing.com (3).png"
              alt="LinkedIn Icon"
              width={40}
              height={40}
              className="mx-5 mt-2 mb-1"
            />
            <p className="text-gray-600 text-lg">
              <a href="https://www.linkedin.com/in/renan-venzi-0b67723a6/" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center mx-5 mt-4 mb-2">
            <Image
              src="/pngwing.com.png"
              alt="GitHub Icon"
              width={52}
              height={52}
              className="mx-5"
            />
            <p className="text-gray-600 text-lg">
              <a href="https://github.com/rvenzi" className="text-blue-500 hover:underline">
                GitHub
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center mx-5 mt-4 mb-2">
            <Image
              src="/pngwing.com (2).png"
              alt="Instagram Icon"
              width={40}
              height={40}
              className="mx-5 mt-2 mb-1"
            />
            <p className="text-gray-600 text-lg">
              <a href="https://www.instagram.com/renanvenzi/" className="text-blue-500 hover:underline">
                Instagram
              </a>
            </p>
          </div>
        </div>
        <p className="text-gray-600 mt-5 text-lg">
          &copy; 2024 Renan Venzi. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
