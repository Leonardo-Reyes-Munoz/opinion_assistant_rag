import BalanceIcon from '@mui/icons-material/Balance';

export default function Banner() {
  return (
    <div className="bg-primary text-white font-medium p-6">
      <div className="flex">
        <BalanceIcon fontSize="large" />
        <div className="flex flex-col ml-2">
          <h1 className="text-2xl">Supreme Court Opinion Assistant</h1>
          <h3 className="text-muted">
            Ask questions about Supreme Court cases and decisions
          </h3>
        </div>
      </div>
    </div>
  );
}
