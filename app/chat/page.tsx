import Banner from '../components/banner';

export default async function Chat() {
  return (
    <div className="bg-background flex flex-col flex-1">
      <Banner />
      <div className="flex-1 flex flex-col">Chat</div>
    </div>
  );
}
