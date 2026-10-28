import { Gauge, Layers, Server, TabletSmartphone } from "lucide-react";
import { GreenDot } from "../shared";

const data = [
  {
    title: "Full-Stack Product Architecture",
    desc: "Building unified apps using Next.js 15, SSR, React Server Actions, and Node microservices.",
    icon: <Layers className="text-primary" size={18} />,
  },
  {
    title: "Backend Development & Database Design",
    desc: "Developing REST APIs, handling server-side logic, and managing application data with Node.js and databases.",
    icon: <Server className="text-secondary" size={18} />,
  },
  {
    title: "Modern UI Development & Responsive Design",
    desc: "Creating clean, intuitive interfaces with reusable components, Tailwind CSS, and mobile-first design principles.",
    icon: <TabletSmartphone className="text-primary" size={18} />,
  },
  {
    title: "Web Performance & Code Quality",
    desc: "Writing maintainable code, improving page load times, debugging applications, and following accessibility best practices.",
    icon: <Gauge className="text-secondary" size={18} />,
  },
];

export function CurrentFocusCard() {
  return (
    <div className="card">
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="uppercase font-mono text-sm font-medium">
          Current Focus areas
        </h2>
        <GreenDot />
      </div>

      <div className="divide-y-2">
        {data.map((item) => (
          <div key={item.title} className="space-y-2 py-4">
            <div className="flex items-center gap-3">
              {item.icon}
              <h3 className="font-medium">{item.title}</h3>
            </div>
            <p className="body-text">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
