import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//prettier-ignore
import { FlashCards, Cards, Header, Main, Button, RadioButton, Loading, Error, CardItem } from '../components';
import ApiService from '../services/ApiService.service';
import FunctionsHelper from '../helpers/Functions.helper';

export default function ReactCards() {
  //States
  const [infoCards, setInfoCards] = useState([]);
  const [infoCardsStudy, setInfoCardsStudy] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [requestError, setRequestError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setInfoCards(await ApiService.getCards());
        setTimeout(() => setIsLoading(false), 500);
      } catch (error) {
        setRequestError(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    //prettier-ignore
    const studyCards = [...infoCards].map(card => ({...card, showTitle: true}));
    setInfoCardsStudy(studyCards);
  }, [infoCards]);

  //Eventos ABA ESTUDO
  //Botão embaralhar
  function handleButtonClick() {
    const shuffledData = FunctionsHelper.shuffleArray(infoCardsStudy);
    setInfoCardsStudy(shuffledData);
  }
  //Alternar entre o título e o conteúdo do card
  function handleFlashCardClick(id) {
    const updatedCards = [...infoCardsStudy];
    const indexCard = updatedCards.findIndex(card => card.id === id);
    updatedCards[indexCard].showTitle = !updatedCards[indexCard].showTitle;
    setInfoCardsStudy(updatedCards);
  }
  //Botão radio mostrar titulo
  function handleRadioTitleClick() {
    const array = [...infoCardsStudy].map(card => ({
      ...card,
      showTitle: true,
    }));
    setInfoCardsStudy(array);
    setIsChecked(true);
  }
  //Botão radio mostrar conteúdo
  function handleRadioDescriptionClick() {
    const array = [...infoCardsStudy].map(card => ({
      ...card,
      showTitle: false,
    }));
    setInfoCardsStudy(array);
    setIsChecked(false);
  }

  //Eventos ABA LISTAGEM
  //Botão excluir card
  function handleDeleteCard(idCard) {
    console.log(idCard);
  }

  //Renderização
  let mainJSX = (
    <div className="flex justify-center">
      <Loading />
    </div>
  );
  if (requestError) {
    mainJSX = <Error>{requestError}</Error>;
  }
  if (!isLoading) {
    mainJSX = (
      <>
        <Tabs>
          <TabList>
            <Tab>Listagem</Tab>
            <Tab>Cadastro</Tab>
            <Tab>Estudo</Tab>
          </TabList>

          <TabPanel>
            {infoCards.map(card => {
              return (
                <CardItem onDelete={handleDeleteCard} key={card.id}>
                  {card}
                </CardItem>
              );
            })}
          </TabPanel>
          <TabPanel>Cadastro</TabPanel>
          <TabPanel>
            <div className="m-2 text-center">
              <Button onButtonClick={handleButtonClick}>
                Embaralhar Cards
              </Button>
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
              {infoCardsStudy.map(({ id, title, description, showTitle }) => {
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
          </TabPanel>
        </Tabs>
      </>
    );
  }

  return (
    <>
      <Header>React-flash-cards</Header>
      <Main>{mainJSX}</Main>
    </>
  );
}
