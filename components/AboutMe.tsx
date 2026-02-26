export default function AboutMe() {
    return (
        <section>
          <h2 className="text-3xl md:text-4xl font-black mb-8">About Me</h2>

          <div className="border-2 border-black p-6 md:p-8 bg-white shadow-[5px_5px_0_black]">
            <p className="text-sm md:text-base leading-relaxed mb-4">
              I&apos;m a Software Engineering student based in Ensenada, Baja
              California. I enjoy building things that live on the web — from
              interactive front-ends to robust back-end services. My curiosity
              drives me to explore new technologies and solve problems that matter.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-4">
              When I&apos;m not coding, you&apos;ll find me exploring open-source
              projects, learning about system design, or working on side projects
              that push my skills further.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-70">
              I&apos;m currently looking for opportunities where I can grow as an
              engineer, contribute to meaningful products, and collaborate with
              talented teams.
            </p>
          </div>
        </section>
    )
}