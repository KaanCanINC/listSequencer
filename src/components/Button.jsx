const Button = ({ buttons }) => {

  return (
    buttons.map((button, index) => (
      <button className='sorter__content-button icon-button sort-button' key={index} onClick={button.action}>
        {button.label}
      </button>
    ))

  )
};

export default Button;

