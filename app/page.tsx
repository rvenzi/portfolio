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
        I am a Full-Stack Developer and Computer Science student at Federal University of Juiz de Fora, Minas Gerais, Brazil, with a focus on building scalable, end-to-end web solutions. My toolkit spans from front-end excellence with Next.js and Tailwind CSS to robust back-end management using PostgreSQL, MySQL, and Prisma.
        Having spent over a year and a half at CODE JR. working with real-market demands, I’ve learned how to turn complex problems into functional software. Whether I’m coding in C++, Python, or PHP, I approach every freelance project with a growth mindset, constantly expanding my perspective to stay at the forefront of technology. 
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
            <h3 className="text-2xl font-bold mb-3">Project 1: Management System - E-commerce / Perfumery</h3>
            <p className="text-gray-400 text-lg mb-3">
              A management system for a perfume e-commerce store, developed with Next.js, Tailwind CSS, Prisma, and PostgreSQL. The system includes features for product management, inventory control, and order processing.
              </p>
            <a 
              href="https://github.com/rvenzi/Next-Desafio-2026.1.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View project on GitHub
            </a>
          </div>
        
          <div className="border-3 border-gray-600 shadow-md p-5 shadow-md hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-bold mb-3">Project 2: Portfolio Website</h3>
            <p className="text-gray-400 text-lg mb-3">
              A personal portfolio website to showcase my projects and skills. Built with Next.js and Tailwind CSS.
            </p>
            <a 
              href="https://github.com/rvenzi/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View project on GitHub
            </a>

          </div>

          <div className="border-3 border-gray-600 shadow-md p-5 shadow-md hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-bold mb-3">Project 3: Management System - Barber Shop</h3>
            <p className="text-gray-400 text-lg mb-3">
              A management system for a barber shop, developed during the training process with partners from CODE JR., using HTML, CSS, JavaScript, PHP, and MySQL. The system includes features for customer scheduling, employee management, and inventory control.
            </p>
            <a 
              href="https://github.com/jvrangel11/FadeClub-Trainee-2025.2.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View project on GitHub
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
          &copy; 2024 Renan Venzi. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
