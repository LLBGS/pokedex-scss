type PaginatorProps = {
  sendOffsetToParent: (data: 'next' | 'previous') => void;
};
export function Paginator({ sendOffsetToParent }: PaginatorProps) {
  const sendOffset = (data: 'next' | 'previous') => {
    sendOffsetToParent(data);
  };
  return (
    <div>
      <button type='button' onClick={() => sendOffset('previous')}>
        Anterior
      </button>
      <button type='button' onClick={() => sendOffset('next')}>
        Próximo
      </button>
    </div>
  );
}
