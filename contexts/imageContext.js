import { createContext, useState } from "react";

export const ImageContext = createContext({
  imageProps: {},
  hasChanged: false,
  setChanged: () => {},
  setImageProps: () => {},
});

const ImageProvider = ({ children }) => {
  const [imageProps, setImageProps] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const [hasChanged, setChanged] = useState(false);

  return (
    <ImageContext.Provider
      value={{ imageProps, setImageProps, hasChanged, setChanged }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
