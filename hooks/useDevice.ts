import { useState, useEffect } from "react";

const useDevice = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleDeviceDetection = () => {
      const windowWidth = window.innerWidth;
      setDevice({
        isMobile: windowWidth <= 768,
        isTablet: windowWidth > 768 && windowWidth <= 1024,
        isDesktop: windowWidth > 1024,
      });
    };

    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);

  return device;
};

export default useDevice;
