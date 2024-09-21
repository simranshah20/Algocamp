// button UI
import getButtinStyling from "./getButtonSryling";
function Button({ text, onClickHandler,styleType="primary",type="button" }) {
    console.log(text) //here text is a props and props is an object
    return (
      <button onClick={onClickHandler}
      type={type}  //{type} is a prop
       //using tailwind css
      className={`px-[16px] py-2 ${getButtinStyling(styleType)} text-white`} //py mean padding on y-axis, px-[16px] here [] is used for custom value
      >
        {text}
      </button>
    );
  }

  export default Button;