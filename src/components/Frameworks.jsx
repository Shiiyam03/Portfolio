import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  // List of skills to display in rotating circles
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* Outer orbit - larger icons */}
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Inner orbit - smaller icons, reversed direction */}
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

// Simple icon component for skill logos
const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
