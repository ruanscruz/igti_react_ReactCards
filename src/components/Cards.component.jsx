function Cards({
  title = 'Titulo do card',
  description = 'Conteúdo completo do card',
  id = '',
  showFlashTitle = true,
  onToggleFlashCard = null,
}) {
  //functions
  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }
  //locals
  const fontSizeClass = showFlashTitle
    ? 'text-xl text-gray-600'
    : 'text-sm text-gray-700';
  return (
    <div
      className={`shadow-lg p-4 w-80 h-48 
      flex flex-row items-center justify-center
      font-semibold ${fontSizeClass} cursor-pointer`}
      style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
      onClick={handleCardClick}
    >
      {showFlashTitle ? title : description}
    </div>
  );
}

export { Cards };
