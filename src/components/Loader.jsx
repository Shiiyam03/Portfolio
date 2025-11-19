import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  // Get loading progress of 3D models/assets
  const { progress } = useProgress();

  return (
    <Html center className="text-xl font-normal text-center">
      {progress}% Loaded
    </Html>
  );
};

export default Loader;
