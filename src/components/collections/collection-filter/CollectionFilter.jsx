const CollectionFilter = ({ showFilter, children }) => {
  return (
    <div>
      <div
        className={`border-borderColor3 transition-all ${showFilter ? "mt-6 h-auto border px-5 py-4" : "h-0 p-0"} w-64 space-y-3 overflow-hidden sm:mt-6 sm:h-auto sm:border sm:px-5 sm:py-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default CollectionFilter;
