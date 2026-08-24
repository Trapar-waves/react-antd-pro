export function TailwindExampleWeatherPage() {
  return (
    <div
      className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-[#DCDFE4] w-28 h-48 dark:bg-[#22272B] rounded-3xl p-4 hover:w-56 hover:bg-blue-200 hover:dark:bg-[#0C66E4]"
    >
      <h3 className="text-xl text-center">Today</h3>
      <div className="gap-4 relative">
        <svg
          className="w-20 scale-[110%]"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="b"
              x1="16.5"
              x2="21.5"
              y1="19.67"
              y2="28.33"
            >
              <stop offset="0" stop-color="#fbbf24"></stop>
              <stop offset=".45" stop-color="#fbbf24"></stop>
              <stop offset="1" stop-color="#f59e0b"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="c"
              x1="22.56"
              x2="39.2"
              y1="21.96"
              y2="50.8"
            >
              <stop offset="0" stop-color="#f3f7fe"></stop>
              <stop offset=".45" stop-color="#f3f7fe"></stop>
              <stop offset="1" stop-color="#deeafb"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="a"
              x1="22.53"
              x2="25.47"
              y1="42.95"
              y2="48.05"
            >
              <stop offset="0" stop-color="#4286ee"></stop>
              <stop offset=".45" stop-color="#4286ee"></stop>
              <stop offset="1" stop-color="#0950bc"></stop>
            </linearGradient>
            <linearGradient
              id="d"
              x1="29.53"
              x2="32.47"
              xlinkHref="#a"
              y1="42.95"
              y2="48.05"
            >
            </linearGradient>
            <linearGradient
              id="e"
              x1="36.53"
              x2="39.47"
              xlinkHref="#a"
              y1="42.95"
              y2="48.05"
            >
            </linearGradient>
          </defs>
          <circle
            cx="19"
            cy="24"
            fill="url(#b)"
            r="5"
            stroke="#f8af18"
            stroke-miterlimit="10"
            stroke-width=".5"
          >
          </circle>
          <path
            d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
            fill="none"
            stroke="#fbbf24"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          >
            <animateTransform
              attributeName="transform"
              dur="45s"
              repeatCount="indefinite"
              type="rotate"
              values="0 19 24; 360 19 24"
            >
            </animateTransform>
          </path>
          <path
            d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
            fill="url(#c)"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width=".5"
          >
          </path>
          <path
            d="M24.39 43.03l-.78 4.94"
            fill="none"
            stroke="url(#a)"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          >
            <animateTransform
              attributeName="transform"
              dur="0.7s"
              repeatCount="indefinite"
              type="translate"
              values="1 -5; -2 10"
            >
            </animateTransform>
          </path>
          <path
            d="M31.39 43.03l-.78 4.94"
            fill="none"
            stroke="url(#d)"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          >
            <animateTransform
              attributeName="transform"
              begin="-0.4s"
              dur="0.7s"
              repeatCount="indefinite"
              type="translate"
              values="1 -5; -2 10"
            >
            </animateTransform>
          </path>
          <path
            d="M38.39 43.03l-.78 4.94"
            fill="none"
            stroke="url(#e)"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          >
            <animateTransform
              attributeName="transform"
              begin="-0.2s"
              dur="0.7s"
              repeatCount="indefinite"
              type="translate"
              values="1 -5; -2 10"
            >
            </animateTransform>
          </path>
        </svg>
        <h4
          className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-5xl text-center group-hover:translate-x-8 group-hover:-translate-y-16 group-hover:scale-150"
        >
          6°
        </h4>
      </div>
      <div className="absolute duration-300 -left-32 mt-2 group-hover:left-10">
        <p className="text-sm">light rain</p>
        <p className="text-sm">50% humidity</p>
      </div>
    </div>
  );
}
