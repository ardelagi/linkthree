import fs from "fs";
import path from "path";
import Image from "next/image";
import { ProfileData } from "@/app/types/profile";
import { getIconColor } from "@/app/utils/profile";

export default function Home() {
  // Membaca data profile dari file JSON
  const filePath = path.join(process.cwd(), "app/data/profile.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data: ProfileData = JSON.parse(jsonData);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 py-12 sm:py-16">
        <div className="w-full max-w-md">
          {/* Profile Card */}
          <div className="bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
            {/* Card Header with Gradient */}
            <div className="relative h-32 bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600">
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Profile Content */}
            <div className="relative px-6 pb-8 -mt-16">
              {/* Profile Picture */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-4 border-slate-900 shadow-2xl flex items-center justify-center overflow-hidden">
                    {data.photo ? (
                      <Image
                        src={data.photo}
                        alt={data.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority
                      />
                    ) : (
                      <i className="fas fa-user text-5xl text-slate-500"></i>
                    )}
                  </div>
                  {/* Online Status Badge */}
                  <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-slate-900"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center mb-6">
                {/* Name */}
                <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                  {data.name}
                </h1>

                {/* Role Badge */}
                <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 rounded-full">
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                  <p className="text-sky-400 text-xs sm:text-sm font-medium">
                    {data.field}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed px-4">
                  {data.desc}
                </p>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700/50"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-slate-900/90 px-4 py-1 text-xs text-slate-500 font-medium rounded-full">
                    CONNECT WITH ME
                  </span>
                </div>
              </div>

              {/* Links Section */}
              <div className="space-y-2.5">
                {data.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 py-3 px-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/10 active:scale-[0.98]"
                  >
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 flex items-center justify-center transition-all">
                      <i
                        className={`fab ${link.icon} text-lg ${getIconColor(link.icon)} transition-transform group-hover:scale-110`}
                      ></i>
                    </div>

                    {/* Text */}
                    <span className="flex-1 text-left text-slate-100 text-sm font-medium group-hover:text-white transition-colors">
                      {link.name}
                    </span>

                    {/* Arrow Icon */}
                    <i className="fas fa-arrow-right text-slate-600 group-hover:text-sky-400 text-xs transition-all group-hover:translate-x-1"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-slate-600 text-xs font-medium">
              © {new Date().getFullYear()} {data.name}. All rights reserved.
            </p>
            <p className="text-slate-700 text-xs mt-1">
              Made with <i className="fas fa-heart text-red-500"></i> using Next.js
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
