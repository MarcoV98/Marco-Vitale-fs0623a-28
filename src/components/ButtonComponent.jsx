const ButtonComponent = (props) => {
    const buttonText = props.text;

    return (
        <button>
            {buttonText}
        </button>
    )
}

export default ButtonComponent;