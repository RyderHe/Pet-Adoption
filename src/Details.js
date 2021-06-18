import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

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

    state = { loading: true };

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

    render() {

        const { animal, breed, city, state, description, name, images } = this.state;

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
                            <button style={ { backgroundColor: themeHook[0] } }>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>
                    
                    <p>{description}</p>
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