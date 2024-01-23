function ProjectCart(props) {
  return (
    <div className="main-card">
      <div className="card-overview">
        <img src={props.url} />
        <p
          onClick={() => {
            props.setDisplay(!props.display);
          }}
        >
          Click Me
        </p>
      </div>
      <div></div>
    </div>
  );
}
export default ProjectCart;
