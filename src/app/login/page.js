'use client'

export default function LoginPage() {
  return (
    <main className="bg-[#1a1a1a] min-h-screen flex items-center justify-center py-20">
      <form className="bg-[#232323] p-8 rounded-xl w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-white text-center">Giriş Yap</h1>
        <div>
          <label className="block text-sm text-gray-300 mb-2">E-posta</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white focus:border-[#678FFF] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-2">Şifre</label>
          <input
            type="password"
            className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white focus:border-[#678FFF] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#678FFF] hover:bg-[#4A55A2] text-white py-2 rounded-lg font-semibold transition-colors"
        >
          Giriş Yap
        </button>
      </form>
    </main>
  )
}
