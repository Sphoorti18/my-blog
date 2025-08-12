/*import './App.css'*/

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}
export default function App() {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div className="md:shrink-0 h-14 bg-reactLogo">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="/assets/react.svg" alt="react logo"/>
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
          <a href="https://images.app.goo.gl/2TmTPpDzMEFLVVkT9" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
          <p className="mt-2 text-slate-500 font-serif">This is React!</p>
        </div>
      </div>
    </div>
  );

}


