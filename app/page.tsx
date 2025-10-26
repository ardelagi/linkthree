import fs from "fs";
import path from "path";
import Image from "next/image";
import { ProfileData } from "@/app/types/profile";
import { getIconColor } from "@/app/utils/profile";

export default function Home() {
  const filePath = path.join(process.cwd(), "app/data/profile.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data: ProfileData = JSON.parse(jsonData);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background with Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 py-12 sm:py-16">
        <div className="w-full max-w-md">
          {/* Profile Card with Enhanced Glassmorphism */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden hover:shadow-sky-500/10 hover:shadow-3xl transition-all duration-500">
            {/* Enhanced Header with Mesh Gradient */}
            <div className="relative h-32 bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Animated Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
            </div>

            {/* Profile Content */}
            <div className="relative px-6 pb-8 -mt-16">
              {/* Profile Picture with Ring Animation */}
              <div className="flex justify-center mb-4">
                <div className="relative group">
                  {/* Animated Ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-500 animate-pulse"></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-4 border-slate-900 shadow-2xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
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
                  
                  {/* Enhanced Online Status with Pulse */}
                  <div className="absolute bottom-2 right-2 flex items-center justify-center">
                    <div className="absolute w-6 h-6 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-5 h-5 bg-green-500 rounded-full border-4 border-slate-900"></div>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center mb-6">
                {/* Name with Verified Badge */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    {data.name}
                  </h1>
                  {/* Verified Badge */}
                  <div className="relative group/badge">
                    <div className="w-6 h-6 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap">
                      Verified
                    </div>
                  </div>
                </div>

                {/* Role Badge with Improved Design */}
                <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 rounded-full backdrop-blur-sm hover:from-sky-500/30 hover:to-blue-500/30 transition-all duration-300">
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                  <p className="text-sky-400 text-xs sm:text-sm font-medium">
                    {data.field}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed px-4 mb-4">
                  {data.desc}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  {/* Share Button */}
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: data.name,
                          text: data.desc,
                          url: window.location.href
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }
                    }}
                    className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    <i className="fas fa-share-alt text-xs"></i>
                    Share
                  </button>

                  {/* Copy Link Button */}
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      const btn = event?.currentTarget as HTMLButtonElement;
                      const originalText = btn.innerHTML;
                      btn.innerHTML = '<i class="fas fa-check text-xs"></i> Copied!';
                      setTimeout(() => {
                        btn.innerHTML = originalText;
                      }, 2000);
                    }}
                    className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    <i className="fas fa-link text-xs"></i>
                    Copy Link
                  </button>
                </div>
              </div>

              {/* Enhanced Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700/50"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-slate-900/90 px-4 py-1 text-xs text-slate-500 font-medium rounded-full backdrop-blur-sm">
                    CONNECT WITH ME
                  </span>
                </div>
              </div>

              {/* Enhanced Links with Better Interactions */}
              <div className="space-y-2.5">
                {data.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-3.5 py-3 px-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                  >
                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Icon Container with Hover Effect */}
                    <div className="relative flex-shrink-0 w-10 h-10 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6">
                      <i
                        className={`fab ${link.icon} text-lg ${getIconColor(link.icon)} transition-transform`}
                      ></i>
                    </div>

                    {/* Text */}
                    <span className="relative flex-1 text-left text-slate-100 text-sm font-medium group-hover:text-white transition-colors">
                      {link.name}
                    </span>

                    {/* Enhanced Arrow with Animation */}
                    <div className="relative flex items-center justify-center w-6 h-6">
                      <i className="fas fa-arrow-right text-slate-600 group-hover:text-sky-400 text-xs transition-all group-hover:translate-x-1"></i>
                    </div>

                    {/* Click Ripple Container */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <div className="ripple-effect"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-slate-600 text-xs font-medium">
              © {new Date().getFullYear()} {data.name}. All rights reserved.
            </p>
            <p className="text-slate-700 text-xs flex items-center justify-center gap-1">
              Made with <i className="fas fa-heart text-red-500 animate-pulse"></i> using 
              <span className="text-slate-600 font-semibold">Next.js</span>
            </p>
          </div>
        </div>
      </div>

    </main>
  );
}