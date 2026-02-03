const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
      <section className="text-9xl text-center font-extrabold">
        <h1>Bienvenido a <br/>Dental Time</h1>
      </section>

      <section className="flex flex-row mt-42 gap-8 justify-between">
        <div className="text-7xl font-semibold flex flex-col justify-center">
          <p>Donde una sonrisa cobra vida.</p>
        </div>
        <div>
          <img src="/images/promo1.jpg" alt="Promo1" className="rounded-2xl"/>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
