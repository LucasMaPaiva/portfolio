export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 border-t border-[#3D4A41]/15 bg-[#0E0E0E] flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-lg font-bold text-[#E5E2E1]">Architect.Noir</div>
      <div className="font-['Manrope'] text-sm leading-relaxed text-[#E5E2E1]/50">
        © 2024 The Digital Architect. All rights reserved.
      </div>
      <div className="flex gap-8">
        <a
          className="text-[#E5E2E1]/40 hover:text-[#5DDDA1] underline-offset-4 hover:underline transition-all duration-300 ease-in-out"
          href="#"
        >
          GitHub
        </a>
        <a
          className="text-[#E5E2E1]/40 hover:text-[#5DDDA1] underline-offset-4 hover:underline transition-all duration-300 ease-in-out"
          href="#"
        >
          LinkedIn
        </a>
        <a
          className="text-[#E5E2E1]/40 hover:text-[#5DDDA1] underline-offset-4 hover:underline transition-all duration-300 ease-in-out"
          href="#"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
