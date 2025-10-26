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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-lg">
        {/* Profile Card */}
        <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
          {/* Profile Header */}
          <div className="flex flex-col items-center text-center mb-8">
            {/* Profile Picture */}
            <div className="mb-6">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-slate-700 border-4 border-sky-500 shadow-2xl flex items-center justify-center overflow-hidden">
                {data.photo ? (
                  <Image
                    src={data.photo}
                    alt={data.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <i className="fas fa-user text-5xl text-slate-500"></i>
                )}
              </div>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
              {data.name}
            </h1>

            {/* Role Badge */}
            <div className="mb-3 px-4 py-1.5 bg-sky-500/10 border border-sky-500/30 rounded-full">
              <p className="text-sky-400 text-xs sm:text-sm font-medium">
                {data.field}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm">
              {data.desc}
            </p>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-slate-800 px-4 text-xs text-slate-500">
                Connect with me
              </span>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-3">
            {data.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-3.5 px-5 rounded-xl bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-sky-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/10"
              >
                {/* Icon */}
                <i
                  className={`fab ${link.icon} text-xl ${getIconColor(link.icon)} transition-transform group-hover:scale-110`}
                ></i>

                {/* Text */}
                <span className="flex-1 text-left text-slate-100 text-sm sm:text-base font-medium">
                  {link.name}
                </span>

                {/* Arrow Icon */}
                <i className="fas fa-arrow-right text-slate-500 group-hover:text-sky-400 text-sm transition-all group-hover:translate-x-1"></i>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}