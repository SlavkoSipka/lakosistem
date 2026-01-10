export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#006CAC] to-[#00A65C] z-50 flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20"></div>

      <div className="relative w-full flex flex-col items-center gap-12">
        <div className="relative animate-roll-across">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 animate-paper-spin">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gradient-to-b from-gray-200 to-transparent origin-top"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="https://aislike.rs/lako/logo.png"
                  alt="Lako Sistem Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-3 bg-black/20 rounded-full blur-md animate-shadow-move"></div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up">
          <div className="text-4xl font-bold text-white mb-3">
            <span>LAKO</span>
            <span className="text-white/90"> SISTEM</span>
          </div>
          <div className="text-white/80 text-lg mb-4">Učitavanje...</div>
          <div className="flex gap-1.5 justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce-delay-0"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce-delay-1"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce-delay-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
