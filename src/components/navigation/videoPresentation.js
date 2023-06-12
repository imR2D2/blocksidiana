import { Fade } from "@successtar/react-reveal";

const Video = () => {
  return (
    <div className="relative mx-auto max-w-2/5 mb-4 -mt-16 sm:mb-34 sm:mt-16 bg-whitee-900 dark:bg-slatee-900">
      <Fade duration={2000}>
        <video
          src=""
          className="w-4/5 md:w-4/6 h-auto m-auto"
          controls
        />
      </Fade>
    </div>
  );
};

export default Video