// src/types/locomotive-scroll.d.ts
declare module "locomotive-scroll" {
    export interface LocomotiveScrollOptions {
      el: HTMLElement;
      smooth?: boolean;
      direction?: "vertical" | "horizontal";
      smartphone?: {
        smooth?: boolean;
      };
      tablet?: {
        smooth?: boolean;
      };
    }
  
    export default class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
  
      update(): void;
      destroy(): void;
  
      on(eventName: string, callback: () => void): void;
      off(eventName: string, callback: () => void): void;
    }
  }
  