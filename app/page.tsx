import fs from "fs";
import path from "path";

interface LinkItem {
  icon: string;
  name: string;
  url: string;
}

interface ProfileData {
  name: string;
  field: string;
  desc: string;
  photo: string;
  links: LinkItem[];
}

export default function Home() {
  const filePath = path.join(process.cwd(), "app/data/profile.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data: ProfileData = JSON.parse(jsonData);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white px-6 py-12 sm:px-10 md:px-16 lg:px-24">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl w-full">
        {/* Profile Picture */}
        <div className="flex flex-col items-center text-center md:text-left">
          <img
            src={data.photo}
            alt="Profile"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-sky-500 shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-3xl md:text-4xl font-bold mt-4">{data.name}</h1>
          <p className="text-sky-400 font-medium text-sm sm:text-base">{data.field}</p>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-md">{data.desc}</p>
        </div>

        {/* Links Section */}
        <div className="mt-8 md:mt-0 flex flex-col gap-3 w-full md:w-2/3">
          {data.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center md:justify-start gap-3 py-3 px-5 rounded-lg font-medium text-lg bg-gray-800/60 hover:scale-[1.03] hover:shadow-lg transition-all duration-300`}
            >
              <i
                className={`fab ${link.icon} text-2xl transition-transform duration-500 hover:rotate-[360deg] ${getBrandColor(
                  link.icon
                )}`}
              ></i>
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

function getBrandColor(icon: string): string {
  if (icon.includes("youtube")) return "text-red-500";
  if (icon.includes("instagram")) return "text-pink-500";
  if (icon.includes("tiktok")) return "text-gray-100";
  if (icon.includes("discord")) return "text-indigo-500";
  if (icon.includes("whatsapp")) return "text-green-500";
  if (icon.includes("roblox")) return "text-rose-400";
  if (icon.includes("github")) return "text-gray-300";
  if (icon.includes("globe")) return "text-blue-400";
  if (icon.includes("envelope")) return "text-yellow-400";
  return "text-white";
}
