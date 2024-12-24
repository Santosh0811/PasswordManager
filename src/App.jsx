import Footer from "./components/Footer";
import Manager from "./components/Manager";
import Navbar from "./components/Navbar";

function App() {
  return (
    // <div className="min-h-screen flex justify-center items-center bg-gray-100">
    //   <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
    // </div>
    <>
      <Navbar />

      <div className="bg-purple-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Manager />
      </div>

      <Footer />
    </>
  );
}

export default App;
