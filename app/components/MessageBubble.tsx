import { ChatMessage } from '../types/types';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BalanceIcon from '@mui/icons-material/Balance';

export default function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="h-fit bg-secondary rounded-full p-2 shadow-lg">
          <BalanceIcon />
        </div>
      )}
      <div
        className={`w-fit max-w-[60%] rounded-lg p-3 shadow-2xl 
            ${isUser ? 'bg-primary ml-auto text-white' : 'bg-white text-black'}`}
      >
        {message.content}
      </div>

      {isUser && (
        <div className="h-fit bg-accent rounded-full p-2 shadow-lg">
          <PersonOutlineIcon />
        </div>
      )}
    </div>
  );
}
