import { AnimatePresence } from "framer-motion";
import ImageProvider from "../contexts/imageContext";
import "../public/styles/main.scss";

function MyApp({ Component, pageProps, router }) {
  const handleExitComplete = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <ImageProvider>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={handleExitComplete}
        initial={false}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ImageProvider>
  );
}

export default MyApp;
