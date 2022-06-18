import { useState } from 'react';
import {
  FlashCards,
  Cards,
  Header,
  Main,
  Button,
  RadioButton,
} from '../components';
import { cardsData } from '../data/cardsData';
import FunctionsHelper from '../helpers/Functions.helper';

export default function ReactCards() {
  //States
  const [infoCards, setInfoCards] = useState(cardsData);
  const [isChecked, setIsChecked] = useState(false);

  //Functions
  function handleButtonClick() {
    const shuffledData = FunctionsHelper.shuffleArray(infoCards);
    setInfoCards(shuffledData);
  }

  function handleRadioTitleClick() {
    setIsChecked(true);
  }

  function handleRadioDescriptionClick() {
    setIsChecked(false);
  }
  return (
    <>
      <Header>React-flash-cards</Header>
      <Main>
        <div className="m-2 text-center">
          <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
        </div>
        <div className="flex justify-center m-4 space-x-3">
          <RadioButton
            onInputClick={handleRadioTitleClick}
            id="radioTitle"
            name="radioTitleDescription"
            isChecked={isChecked}
          >
            Mostrar Titulo
          </RadioButton>
          <RadioButton
            onInputClick={handleRadioDescriptionClick}
            id="radioDescription"
            name="radioTitleDescription"
            isChecked={!isChecked}
          >
            Mostrar Conteúdo
          </RadioButton>
        </div>
        <FlashCards>
          {infoCards.map(({ id, title, description }) => {
            return (
              <Cards
                showFlashTitle={isChecked}
                key={id}
                title={title}
                description={description}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
