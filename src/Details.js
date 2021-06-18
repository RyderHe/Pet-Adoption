import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

// const Details = () => {
//     return (
//         <h2>
//            hi lololol omg 
//         </h2>
//     )
// }

class Details extends Component {
    // constructor() {
    //     super();
    //     this.state = { loading: true, name: "", animal: "", breed: "", };
    // }

    state = { loading: true, showModal: false };

    async componentDidMount() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );

        const json = await res.json();

        this.setState(
            Object.assign(
                {
                    loading: false,
                },
                json.pets[0]
            )
        );
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal })

    adopt = () => (window.location = "http://bit.ly/pet-adopt");

    render() {

        const { animal, breed, city, state, description, name, images, showModal } = this.state;

        if (this.state.loading) { // You can put some animation here while loading -- loader
            return <h2> loading ... </h2>;
        }

        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>

                    {/* The folowing is kind of messy and less convenient... Use useContext instead like in SearchParams.js */}
                    <ThemeContext.Consumer>
                        {(themeHook) => (
                            <button 
                                onClick={this.toggleModal} 
                                style={ { backgroundColor: themeHook[0] } }
                            >
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>
                    
                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h1>Would you want to adopt {name} ?</h1>
                                    <div className="buttons">
                                        <button onClick={this.adopt}>Yes</button>
                                        <button onClick={this.toggleModal}>No, Im a monster</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}

const DetailsWithRouter = withRouter(Details);

// export default withRouter(Details);
export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailsWithRouter />
        </ErrorBoundary>
    );
};