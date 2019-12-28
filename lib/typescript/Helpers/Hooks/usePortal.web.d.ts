/// <reference types="react" />
declare global {
    interface Window {
        portal: any;
    }
}
interface portalFace {
    closeOnOutsideClick?: boolean;
    closeOnEsc?: boolean;
    renderOnClickedElement?: any;
    renderBelowClickedElement?: any;
    bindTo?: any;
    isOpen?: boolean;
    stateful?: boolean;
}
export declare const usePortal: ({ closeOnOutsideClick, closeOnEsc, renderOnClickedElement, renderBelowClickedElement, bindTo, isOpen: defaultIsOpen, stateful, }: portalFace) => {
    isOpen: boolean;
    openPortal: (e: any) => void;
    onMouseDown: (e: any) => void;
    ref: import("react").MutableRefObject<undefined>;
    closePortal: () => void;
    togglePortal: (e: any) => void;
    Portal: ({ children }: {
        children: any;
    }) => import("react").ReactPortal;
    bind: {
        onMouseDown: (e: any) => void;
        ref: import("react").MutableRefObject<undefined>;
    };
};
export default usePortal;
/**
 * @example
 * import React from "react";
 *   import { render } from "react-dom";
 *   import usePortal from "./usePortal";
 *
 *   const App = () => {
 *   const {
 *       openPortal: openFirstPortal,
 *       closePortal: closeFirstPortal,
 *       isOpen: isFirstOpen,
 *       Portal: FirstPortal
 *   } = usePortal();
 *   const {
 *       openPortal: openSecondPortal,
 *       closePortal: closeSecondPortal,
 *       isOpen: isSecondOpen,
 *       Portal: SecondPortal
 *   } = usePortal();
 *   // isSecondOpen is always false!
 *   console.log({ isFirstOpen, isSecondOpen });
 *
 *   return (
 *       <>
 *       <button onClick={openFirstPortal}>Open First</button>
 *       {isFirstOpen && (
 *           <FirstPortal>
 *           I'm First.
 *           <button
 *               onClick={() => {
 *               closeFirstPortal();
 *               openSecondPortal();
 *               }}
 *           >
 *               Close Me and Open Second
 *           </button>
 *           </FirstPortal>
 *       )}
 *       {isSecondOpen && (
 *           <SecondPortal>
 *           I'm Second<button onClick={closeSecondPortal}>Close Me</button>
 *           </SecondPortal>
 *       )}
 *       </>
 *   );
 *   };
 */
