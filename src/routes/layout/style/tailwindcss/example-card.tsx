import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/layout/style/tailwindcss/example-card")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div
        className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-64 h-64 bg-neutral-800 rounded-xl"
      >
        <div
          className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"
        >
        </div>
        <div
          className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"
        >
        </div>
        <div
          className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"
        >
        </div>
        <div
          className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"
        >
        </div>
        <div
          className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"
        >
        </div>
        <div
          className="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"
        >
        </div>
        <div
          className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"
        >
        </div>
        <div
          className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col gap-2 flex justify-center"
        >
          <span className="text-neutral-50 font-bold text-xl italic">Explore More</span>
          <p className="text-neutral-300">
            Dive into curated collections, traverse user-friendly interfaces, and let
            curiosity guide your exploration.
          </p>
        </div>
      </div>

    </div>
  );
}
