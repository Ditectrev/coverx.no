import { ClassProvider, FactoryProvider, InjectionToken } from "@angular/core";

/**
 * Service to not reference the DOM directly by Angular, including the Window object.
 */

function _window(): any {
  return window;
}

export const WINDOW = new InjectionToken('WindowToken');

export abstract class WindowRef {
  get nativeWindow(): Window {
    throw new Error('Not implemented.');
  }
}

export class BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }

  get nativeWindow(): Window {
    return _window();
  }
}

const browserWindowProvider: ClassProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: _window,
  deps: []
};

export const WINDOW_PROVIDERS = [
  browserWindowProvider,
  windowProvider
];