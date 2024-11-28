import { useState, DragEvent } from 'react';
import { ColumnProps } from './types';
import Card from './Card';
import DropIndicator from './DropIndicator';
import AddCard from './AddCard';
import { Task } from '@/components/TaskList/types';
import { Modal } from '@/components/Modal';
import { TaskListForm } from '@/components/TaskList/components/TaskListForm';

const Column = ({ title, cards, column, setCards, handleOnClick }: ColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDelete = (id: string | number) => {
    setCards((pv) => pv.filter((c) => c.id !== id));
  };

  const handleDragStart = (e: DragEvent, card: Task) => {
    if (e.dataTransfer) {
      e.dataTransfer.setData('cardId', card.id.toString());
    }
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer ? e.dataTransfer.getData('cardId') : '';

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || '-1';

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, columnKey: column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === '-1';

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = '0';
    });
  };

  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = '1';
  };

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      },
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`) as unknown as HTMLElement[]);
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.columnKey === column);

  return (
    <>
      <div className="w-72 shrink-0 bg-primary px-5">
        <div className="my-4 flex items-center justify-between">
          <h3 className={`font-medium`}>{title}</h3>
          <span className="rounded text-sm text-neutral-400">{filteredCards.length}</span>
        </div>
        <div onDrop={handleDragEnd} onDragOver={handleDragOver} onDragLeave={handleDragLeave} className={`w-full transition-colors ${active ? 'opacity-50' : 'bg-primary'}`}>
          {filteredCards.map((c) => {
            return <Card key={c.id} {...c} handleDragStart={handleDragStart} handleDelete={handleDelete} handleOnClick={() => handleOnClick(c)} />;
          })}
          <DropIndicator beforeId={null} column={column} />
          <AddCard column={column} setCards={setCards} />
        </div>
      </div>
    </>
  );
};

export default Column;
