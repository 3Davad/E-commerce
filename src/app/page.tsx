import Image from "next/image";

export default function Home() {
  return (
    <div className="App">
      <nav className="nav bg-slate-700 w-100% p-5 flex items-center justify-between">
        <div className="logo flex gap-1 items-center">
          <Image
            src="/favicon.ico"
            alt="logo"
            width={50}
            height={50}
            className="icon w-12 h-12 md:w-15 md:h-15"
            priority
          />
          <h1 className="title text-2xl md:text-3xl text-white">E-commerce</h1>
        </div>
        <section className="search flex w-64 p-2">
          <div className="select relative">
            <select
              className="search-select  w-50 appearance-none p-2 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="category"
              id="category"
            >
              <option value="*">Todas las categorias</option>
              <option value="ropa">Ropa</option>
              <option value="cocina">cocina</option>
              <option value="electrodomesticos">electrodomesticos</option>
            </select>
            <span className="right-3 top-1/2 -translate-y-1/2 absolute text-gray-700">
              ▼
            </span>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          ></input>
          <button className="search-button">Search</button>
        </section>
        <section className="cart">
          <p className="font-bold">carrito</p>
        </section>
      </nav>
    </div>
  );
}
