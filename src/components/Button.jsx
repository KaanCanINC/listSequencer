const Button = ({ onClick, label }) => {

  return (
    <button  className='sorter__content-button icon-button sort-button' onClick={onClick}>
      {label}
    </button>

  )
};

export default Button;

