/// <reference types="node" />
import { Writable } from "stream";
export declare const lp: (str: string, strm: Writable, beforeHook: Function, afterHook: Function) => () => void;
