export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-[#3D4A41]/15 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-[#E5E2E1]">Lucas Matheus</div>
        <div className="font-['Manrope'] text-sm leading-relaxed text-[#E5E2E1]/50">
          © {new Date().getFullYear()} Lucas Matheus. Todos os direitos reservados.
        </div>
        <div className="flex gap-8">
          <a
            className="text-[#E5E2E1]/40 hover:text-[#5DDDA1] underline-offset-4 hover:underline transition-all duration-300 ease-in-out"
            href="https://github.com/LucasMaPaiva"
          >
            GitHub
          </a>
          <a
            className="text-[#E5E2E1]/40 hover:text-[#5DDDA1] underline-offset-4 hover:underline transition-all duration-300 ease-in-out"
            href="https://www.linkedin.com/in/lucas-paiva-613366209/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
