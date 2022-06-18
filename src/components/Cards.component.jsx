import { useState } from 'react';

function Cards({
  title = 'Titulo do card',
  description = 'Conteúdo completo do card',
}) {
  //states
  const [showTitle, setShowTitle] = useState(true);
  //functions
  function handleCardClick() {
    setShowTitle(showTitle => !showTitle);
  }
  //locals
  const fontSizeClass = showTitle
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
      {showTitle ? title : description}
    </div>
  );
}

export { Cards };
