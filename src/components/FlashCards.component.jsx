function FlashCards({ children: cards }) {
  return (
    <div className="flex flex-row flex-wrap justify-center text-center ">
      {cards}
    </div>
  );
}

export { FlashCards };
