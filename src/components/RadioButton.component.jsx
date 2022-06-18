import CardsService from '../services/CardsService.service';

function RadioButton({
  name = 'nameInputRadio',
  id = CardsService.getNewId(),
  children: description = 'Descrição do radio button',
  isChecked = false,
  onInputClick = null,
}) {
  function handleInputChange() {
    if (onInputClick) {
      onInputClick();
    }
  }

  return (
    <div className="form-check space-x-2">
      <input
        className="cursor-pointer"
        type="radio"
        name={name}
        id={id}
        checked={isChecked}
        onChange={handleInputChange}
      />
      <label
        className="form-check-label inline-block text-gray-800 opacity-50"
        htmlFor={id}
      >
        {description}
      </label>
    </div>
  );
}

export { RadioButton };
