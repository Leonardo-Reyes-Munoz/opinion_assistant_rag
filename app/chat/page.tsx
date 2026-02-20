import Banner from '../components/banner';
import ChatContainer from '../components/ChatContainer';

export default async function Chat() {
  return (
    <div className="bg-background flex flex-col flex-1">
      <Banner />
      <ChatContainer />
    </div>
  );
}
