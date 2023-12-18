import { Component } from "react";
class ImgComponent extends Component {
    render () {
        const {src, alt} = this.props;
        return (
        <img src={src} alt={alt} />
        )
    }
}

export default ImgComponent;