
import img1 from '../assets/img1.png'

const Hero = () => {
  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-[1920px] items-center justify-center px-6 sm:px-12">
      <div className="flex w-full flex-col-reverse items-center justify-between  max-w-[1500px] sm:flex-row sm:gap-6">
        
        {/* Left Side Text */}
        <div className="z-10 flex flex-col items-center text-center text-black sm:items-start sm:text-left">
          <p className="text-2xl font-semibold sm:text-3xl md:text-4xl 2xl:text-5xl">
            Hello
          </p>
          <p className="text-2xl font-semibold sm:text-3xl md:text-4xl 2xl:text-5xl">
            I&apos;m Raveesha Nethsarani
          </p>

          <h1 className="mt-3 text-3xl font-bold uppercase text-black sm:text-4xl md:text-5xl 2xl:text-7xl">
            Full Stack Developer
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-3xl px-8 py-3 text-base font-semibold text-black border transition-all duration-300 hover:scale-105 ">
              Download CV
            </button>
            <button className="cursor-pointer rounded-3xl border border-black px-8 py-3 text-base font-semibold text-black transition ">
              Contactc
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="animate-border-spin relative w-[220px] rounded-full p-[4px] sm:w-[280px] md:w-[330px] lg:w-[380px]">
          <style>
            {`
              @keyframes border-spin {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              .animate-border-spin {
                background-size: 200% 200%;
                animation: border-spin 4s linear infinite;
              }
            `}
          </style>

          <img
            src={img1}
            alt="Profile"
            className="h-full w-full rounded-full bg-white object-cover p-2"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero