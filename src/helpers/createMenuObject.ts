type MenuOptions =
  | ""
  | "all"
  | "rnb"
  | "pop"
  | "rock"
  | "indie"
  | "folk"
  | "jazz";

export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnObject = {
    all: false,
    rnb: false,
    pop: false,
    rock: false,
    indie: false,
    folk: false,
    jazz: false,
  };

  if (activeMenu !== "") {
    returnObject[activeMenu] = true;
  }

  return returnObject;
};
