import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Descubra seu próximo álbum favorito",
    },
  });
};

export const rnb = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("rnb"),
    bannerChild: {
      subheading: "R&B",
    },
  });
};

export const pop = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("pop"),
    bannerChild: {
      subheading: "Pop",
    },
  });
};

export const rock = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("rock"),
    bannerChild: {
      subheading: "Rock",
    },
  });
};

export const indie = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("indie"),
    bannerChild: {
      subheading: "Indie",
    },
  });
};

export const folk = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("folk"),
    bannerChild: {
      subheading: "Folk",
    },
  });
};

export const jazz = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("jazz"),
    bannerChild: {
      subheading: "Jazz",
    },
  });
};
