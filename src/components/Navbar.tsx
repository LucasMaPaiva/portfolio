export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-md border-none bg-[#1C1B1B]/40 flex justify-between items-center px-8 py-6 max-w-full mx-auto">
      <div className="text-xl font-black tracking-tighter text-[#E5E2E1]">Architect.Noir</div>
      <div className="hidden md:flex items-center gap-8">
        <a
          className="font-['Inter'] font-bold tracking-tighter text-[1rem] uppercase text-[#5DDDA1] border-b-2 border-[#5DDDA1] pb-1"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="font-['Inter'] font-bold tracking-tighter text-[1rem] uppercase text-[#E5E2E1] opacity-60 hover:opacity-100 transition-opacity hover:text-[#5DDDA1] active:scale-95"
          href="#stack"
        >
          Stack
        </a>
        <a
          className="font-['Inter'] font-bold tracking-tighter text-[1rem] uppercase text-[#E5E2E1] opacity-60 hover:opacity-100 transition-opacity hover:text-[#5DDDA1] active:scale-95"
          href="#about"
        >
          About
        </a>
        <a
          className="font-['Inter'] font-bold tracking-tighter text-[1rem] uppercase text-[#E5E2E1] opacity-60 hover:opacity-100 transition-opacity hover:text-[#5DDDA1] active:scale-95"
          href="#contact"
        >
          Contact
        </a>
      </div>
      <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:bg-primary-container transition-colors active:scale-95">
        Resume
      </button>
    </nav>
  );
}
