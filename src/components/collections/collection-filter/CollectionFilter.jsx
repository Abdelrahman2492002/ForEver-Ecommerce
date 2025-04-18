const CollectionFilter = ({ showFilter, children }) => {
  return (
    <div>
      <div
        className={`border-borderColor3 transition-all ${showFilter ? "mt-10 h-auto border px-5 py-4" : "h-0 p-0"} w-full space-y-3 overflow-hidden sm:mt-10 sm:h-auto sm:w-64 sm:border sm:px-5 sm:py-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default CollectionFilter;
