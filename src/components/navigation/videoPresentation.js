import { Fade } from "@successtar/react-reveal";

const Video = () => {
    return( 
                <div className="mx-auto mb-20 -mt-16 sm:mb-64 sm:mt-16 h-40 bg-whitee-700 dark:bg-slate-90" style={{ width: '94%' }}>
					<Fade duration={2000}>
						<iframe
							width="100%"
							height="450"
							src="https://www.youtube.com/embed/bOptMhjGhpo"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</Fade>
				</div>
    )
}

export default Video