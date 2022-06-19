import {
  AiOutlineEdit as EditIcon,
  AiOutlineDelete as DeleteIcon,
} from 'react-icons/ai';

function CardItem({ children: card, onDelete = null, onEdit = null }) {
  const { id, title, description } = card;
  function handleDeleteIcon() {
    if (onDelete) {
      onDelete(id);
    }
  }

  return (
    <div className="border p-2 m-2">
      <ul className="flex flex-col space-y-2">
        <li>
          <strong>Título:</strong> <span>{title}</span>
        </li>
        <li>
          <strong>Descrição:</strong> <span>{description}</span>
        </li>
      </ul>
      <div className="mt-4 flex flex-row items-center justify-end space-x-4">
        <EditIcon className="cursor-pointer" size={20} />
        <DeleteIcon
          onClick={handleDeleteIcon}
          className="cursor-pointer"
          size={20}
        />
      </div>
    </div>
  );
}

export { CardItem };
