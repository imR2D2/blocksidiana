import { Fade } from "@successtar/react-reveal";

const Video = () => {
  return (
    <div id="presentation" className="relative mx-auto max-w-4xl -mb-2 -mt-16 sm:mb-20 sm:mt-16 bg-white dark:bg-slatee-900">
      <Fade duration={2000}>
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute top-5 left-5 right-5 bottom-5 sm:top-0 sm:left-0 sm:right-0 sm:bottom-0">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jnwMFhQDgFE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Video;
