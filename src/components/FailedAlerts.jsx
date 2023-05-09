function FailedAlert(props) {
  return (
    <div className="fixed inset-0 flex justify-center top-20">
      <section className="flex items-center justify-center rounded-xl shadow w-90 h-20 bg-white p-5">
        <img
          src="./src/components/assets/failded.png"
          alt="check"
          className="h-12 hover:scale-110 transition"
        />
        <section className="ml-5">
          <h1 className="font-bold text-left text-xl text-red-600">
            {props.title}
          </h1>
          <p className="text-left text-gray-700">{props.message}</p>
        </section>
        <img
          src="./src/components/assets/close.png"
          alt="check"
          className="h-8 ml-5 hover:scale-110 transition"
          onClick={() => {
            props.close(false);
          }}
        />
      </section>
    </div>
  );
}

export default FailedAlert;
