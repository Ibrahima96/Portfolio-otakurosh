import { FaReact, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiLaravel, SiMysql, SiJavascript } from "react-icons/si";

export const Experience = () => {
  return (
    <div className="card card-side bg-base-200 shadow-sm mb-8 px-4 pt-4 md:pb-28 ">
      <h2
        className="mb-8 font-extrabold text-xl sm:text-2xl md:text-3xl hidden md:block tooltip"
        data-tip="Experience & Expertise "
      >
        Parcours Shōnen & Pouvoir Caché ⚔️
      </h2>

      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        <ul className="timeline timeline-vertical md:timeline-horizontal">

          {/* TailwindCSS */}
          <li>
            <div className="timeline-start timeline-box text-sm sm:text-base relative group">
              TailwindCSS
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-sky-500 opacity-0 group-hover:opacity-100 transition">
                ⚡ LEVEL UP!
              </span>
              <div className="w-full bg-gray-300 rounded-full h-2 md:h-4 mt-2 overflow-hidden">
                <div
                  className="bg-sky-500 h-2 md:h-4 rounded-full animate-pulse transition-all duration-500"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="text-xs sm:text-sm text-sky-500 mt-1">Level 70</p>
            </div>
            <div className="timeline-middle">
              <SiTailwindcss className="text-sky-500 h-5 sm:h-6 w-5 sm:w-6 group-hover:scale-125 transition-transform" />
            </div>
            <hr className="bg-primary" />
          </li>

          {/* React */}
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <FaReact className="text-cyan-400 h-5 sm:h-6 w-5 sm:w-6 animate-spin group-hover:scale-125 transition-transform" />
            </div>
            <div className="timeline-end timeline-box text-sm sm:text-base relative group">
              React
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition">
                ⚡ LEVEL UP!
              </span>
              <div className="w-full bg-gray-300 rounded-full h-2 md:h-4 mt-2 overflow-hidden">
                <div
                  className="bg-cyan-400 h-2 md:h-4 rounded-full animate-pulse transition-all duration-500"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <p className="text-xs sm:text-sm text-cyan-400 mt-1">Level 30</p>
            </div>
            <hr className="bg-primary" />
          </li>

          {/* PHP */}
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box text-sm sm:text-base relative group">
              PHP
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition">
                ⚡ LEVEL UP!
              </span>
              <div className="w-full bg-gray-300 rounded-full h-2 md:h-4 mt-2 overflow-hidden">
                <div
                  className="bg-indigo-600 h-2 md:h-4 rounded-full animate-pulse transition-all duration-500"
                  style={{ width: "55%" }}
                ></div>
              </div>
              <p className="text-xs sm:text-sm text-indigo-600 mt-1">Level 55</p>
            </div>
            <div className="timeline-middle">
              <FaPhp className="text-indigo-600 h-5 sm:h-6 w-5 sm:w-6 group-hover:scale-125 transition-transform" />
            </div>
            <hr />
          </li>

          {/* Laravel */}
          <li>
            <hr />
            <div className="timeline-middle">
              <SiLaravel className="text-red-500 h-5 sm:h-6 w-5 sm:w-6 group-hover:scale-125 transition-transform" />
            </div>
            <div className="timeline-end timeline-box text-sm sm:text-base relative group">
              Laravel
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-red-500 opacity-0 group-hover:opacity-100 transition">
                ⚡ LEVEL UP!
              </span>
              <div className="w-full bg-gray-300 rounded-full h-2 md:h-4 mt-2 overflow-hidden">
                <div
                  className="bg-red-500 h-2 md:h-4 rounded-full animate-pulse transition-all duration-500"
                  style={{ width: "15%" }}
                ></div>
              </div>
              <p className="text-xs sm:text-sm text-red-500 mt-1">Level 15</p>
            </div>
            <hr />
          </li>

          {/* MySQL */}
          <li>
            <hr />
            <div className="timeline-start timeline-box text-sm sm:text-base relative group">
              MySQL
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-yellow-500 opacity-0 group-hover:opacity-100 transition">
                ⚡ LEVEL UP!
              </span>
              <div className="w-full bg-gray-300 rounded-full h-2 md:h-4 mt-2 overflow-hidden">
                <div
                  className="bg-yellow-500 h-2 md:h-4 rounded-full animate-pulse transition-all duration-500"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <p className="text-xs sm:text-sm text-yellow-500 mt-1">Level 50</p>
            </div>
            <div className="timeline-middle">
              <SiMysql className="text-yellow-500 h-5 sm:h-6 w-5 sm:w-6 group-hover:scale-125 transition-transform" />
            </div>
            <hr />
          </li>

          {/* JavaScript */}
          <li>
            <hr />
            <div className="timeline-middle">
              <SiJavascript className="text-yellow-400 h-5 sm:h-6 w-5 sm:w-6 group-hover:scale-125 transition-transform" />
            </div>
            <div className="timeline-end timeline-box text-sm sm:text-base relative group">
              JavaScript
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-yellow-400 opacity-0 group-hover:opacity-100 transition">
                ⚡ LEVEL UP!
              </span>
              <div className="w-full bg-gray-300 rounded-full h-2 md:h-4 mt-2 overflow-hidden">
                <div
                  className="bg-yellow-400 h-2 md:h-4 rounded-full animate-pulse transition-all duration-500"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="text-xs sm:text-sm text-yellow-400 mt-1">Level 85</p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};
