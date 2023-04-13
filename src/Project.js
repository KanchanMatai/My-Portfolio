import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel className="caro">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/610626138/video/digital-clock-count-12h-full-hd-lcd-display.jpg?s=640x640&k=20&c=AyruYkVFoieovlnhmpd_JOGZDqWMWZzDBGm5kIsJrqA="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Digital clock using HTML, CSS, Bootstrap and Javascript</h3>
          <a className="togit" href ="https://github.com/KanchanMatai/folder">Link to GitHub</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.outsource2india.com/featured-images/outsource-marketing-questionnaire-design-services.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Survey form using HTML, CSS, Bootstrap and Javascript</h3>
          <a className="togit" href ="https://github.com/KanchanMatai/SurveyForm">Link to GitHub</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/0x0.jpg?format=jpg&width=1200"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>To Do List</h3>
          <a className="togit" href ="https://github.com/KanchanMatai/To-Do-List">Link to GitHub</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;