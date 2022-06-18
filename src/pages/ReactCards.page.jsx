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
  const [isChecked, setIsChecked] = useState(true);

  //Functions
  function handleButtonClick() {
    const shuffledData = FunctionsHelper.shuffleArray(infoCards);
    setInfoCards(shuffledData);
  }

  function handleFlashCardClick(id) {
    const updatedCards = [...infoCards];
    const indexCard = updatedCards.findIndex(card => card.id === id);
    updatedCards[indexCard].showTitle = !updatedCards[indexCard].showTitle;
    setInfoCards(updatedCards);
  }

  function handleRadioTitleClick() {
    const array = [...infoCards].map(card => ({ ...card, showTitle: true }));
    setInfoCards(array);
    setIsChecked(true);
  }

  function handleRadioDescriptionClick() {
    const array = [...infoCards].map(card => ({ ...card, showTitle: false }));
    setInfoCards(array);
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
          {infoCards.map(({ id, title, description, showTitle }) => {
            return (
              <Cards
                showFlashTitle={showTitle}
                key={id}
                id={id}
                title={title}
                description={description}
                onToggleFlashCard={handleFlashCardClick}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
