function Background() {
  return (
    <div className="background-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/media/Portfolio-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Background;
