import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Button } from "antd";
import { motion } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/example-dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const [open, toggleOpen] = useState(true);
  return (
    <div className="bg-blue-300 h-screen w-screen">
      <motion.div animate={{ top: open ? "0" : "-100%" }} className="h-[128px] w-full absolute bg-gray-600"></motion.div>
      <Button className="absolute top-64 left-64" onClick={() => router.history.back()}>back</Button>
      <Button className="absolute top-64 left-72" onClick={() => toggleOpen(!open)}>toggle</Button>
      <motion.div animate={{ left: open ? "0" : "-100%" }} className="w-[256px] h-[952px] top-[128px] absolute bg-red-600"></motion.div>
      <motion.div animate={{ right: open ? "0" : "-100%" }} className="w-[512px] h-[952px] top-[128px] right-0 absolute bg-pink-600"></motion.div>
    </div>
  );
}
