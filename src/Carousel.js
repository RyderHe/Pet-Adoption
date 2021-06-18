import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0
    };

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    };

    handleIndexClick = (event) => {
        this.setState({
            active: +event.target.dataset.index // str -> number
        });
    }

    render() {
        const { active } = this.state;
        const { images } = this.props; 

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            key={photo}
                            src={photo}
                            className={index===active ? "active" : ""}
                            data-index={index}
                            onClick={this.handleIndexClick}
                            alt="animal thumbnail"
                        ></img>
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;

