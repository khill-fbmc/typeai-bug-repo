import "dotenv/config";

import { toAIFunction } from "@typeai/core"

/** @description Given `text`, returns a number between 1 (positive) and -1 (negative) indicating its sentiment score. */
function sentimentSpec(text: string): number | void {}
const sentiment = toAIFunction(sentimentSpec)

const score = await sentiment('That was surprisingly easy!')

console.log(score);
