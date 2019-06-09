import "./Animation.scss";

const Animation = () => (
  <section className="animation">
    <h2>animation reel</h2>
    <div className="video-responsive">
      <iframe
        width="768"
        height="432"
        src="https://www.youtube.com/embed/nOUstFghago"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </section>
);

export default Animation;
