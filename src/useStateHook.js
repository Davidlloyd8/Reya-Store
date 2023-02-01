const useStateHook = (param) => {
  let state = param;
  const setState = (param2) => {
    state = param2;
  };

  return [state, setState];
};

export default useStateHook;
