function Error({ children: errorMessage }) {
  return (
    <div className="flex justify-center">
      <span className="bg-red-300 text-red-900 font-semibold p-2">
        {errorMessage}
      </span>
    </div>
  );
}

export { Error };
