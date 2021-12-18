import Days from './components/Days';
import './App.css';
import Header from './components/Header';


export default function App() {
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
    
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
    <Header />
      <Days />
    </div>


  )
}


