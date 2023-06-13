import { Fade } from "@successtar/react-reveal";

const Video = () => {
  return (
    <div className="relative mx-auto max-w-2/5 mb-4 -mt-16 sm:mb-34 sm:mt-16 bg-white dark:bg-slatee-900">
      <Fade duration={2000}>
      <iframe
  width="560"
  height="315"
  src="https://youtu.be/8pTfsV9ejEs"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

        <video
          src="https://youtu.be/8pTfsV9ejEs"
          className="w-4/5 md:w-4/6 h-auto m-auto"
          controls
        />
      </Fade>
    </div>
  );
};

export default Video