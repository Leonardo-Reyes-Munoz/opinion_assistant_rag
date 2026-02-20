import { Button } from '@headlessui/react';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

export default function ChatInput({
  onSend,
}: {
  onSend: (message: string) => void;
}) {
  const [value, setValue] = useState('');

  function handleSend() {
    if (!value.trim()) return;
    onSend(value);
    setValue('');
  }

  return (
    <div className="border-t border-gray-700 p-4 bg-white">
      <div className="flex gap-2 justify-center">
        <input
          className="flex-1 bg-white p-2 border-gray-300  border rounded text-gray-700 max-w-[80%]"
          placeholder="Ask about Supreme Court case or opinion..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button
          onClick={handleSend}
          className="bg-mutedStrong hover:bg-secondary px-4 rounded text-white"
        >
          <SendIcon className="rotate-[-45deg]" />
        </Button>
      </div>
    </div>
  );
}
