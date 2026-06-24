import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { Discovery } from "../models/discoveries";

export const home = (req: Request, res: Response) => {
  const list = Discovery.getAll();

  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Descubra seu próximo álbum favorito",
    },
    list,
  });
};

export const rnb = (req: Request, res: Response) => {
  const list = Discovery.getByType("r&b");

  res.render("pages/page", {
    menu: createMenuObject("rnb"),
    bannerChild: {
      subheading: "R&B",
    },
    list,
  });
};

export const pop = (req: Request, res: Response) => {
  const list = Discovery.getByType("pop");

  res.render("pages/page", {
    menu: createMenuObject("pop"),
    bannerChild: {
      subheading: "Pop",
    },
    list,
  });
};

export const rock = (req: Request, res: Response) => {
  const list = Discovery.getByType("rock");

  res.render("pages/page", {
    menu: createMenuObject("rock"),
    bannerChild: {
      subheading: "Rock",
    },
    list,
  });
};

export const indie = (req: Request, res: Response) => {
  const list = Discovery.getByType("indie");

  res.render("pages/page", {
    menu: createMenuObject("indie"),
    bannerChild: {
      subheading: "Indie",
    },
    list,
  });
};

export const folk = (req: Request, res: Response) => {
  const list = Discovery.getByType("folk");

  res.render("pages/page", {
    menu: createMenuObject("folk"),
    bannerChild: {
      subheading: "Folk",
    },
    list,
  });
};

export const jazz = (req: Request, res: Response) => {
  const list = Discovery.getByType("jazz");

  res.render("pages/page", {
    menu: createMenuObject("jazz"),
    bannerChild: {
      subheading: "Jazz",
    },
    list,
  });
};
