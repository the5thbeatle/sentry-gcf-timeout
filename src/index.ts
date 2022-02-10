import * as Sentry from "@sentry/serverless";
import { Request, Response } from "express";

/* ========================================================================== */

Sentry.GCPFunction.init();

export const unwrapped = async (_req: Request, res: Response) => {
  await (async () => void 0);
  return res.status(200).send("Success");
};

export const wrapped = Sentry.GCPFunction.wrapHttpFunction(unwrapped);

