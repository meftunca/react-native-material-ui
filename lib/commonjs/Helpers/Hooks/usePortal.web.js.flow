import {useState, useRef, useEffect, useCallback} from 'react';
import {createPortal, findDOMNode} from 'react-dom';
let count = 0;
declare global {
  interface Window {
    // add you custom properties and methods
    portal: any;
  }
}
interface portalFace {
  closeOnOutsideClick?: boolean;
  closeOnEsc?: boolean;
  renderOnClickedElement?: any;
  renderBelowClickedElement?: any; // appear directly under the clicked element/node in the DOM
  bindTo?: any; // attach the portal to this node in the DOM
  isOpen?: boolean;
  stateful?: boolean;
}
export const usePortal = ({
  closeOnOutsideClick = true,
  closeOnEsc = true,
  renderOnClickedElement,
  renderBelowClickedElement, // appear directly under the clicked element/node in the DOM
  bindTo = document.body, // attach the portal to this node in the DOM
  isOpen: defaultIsOpen = false,
  stateful = true,
}: portalFace) => {
  const [isOpen, makeOpen] = useState(defaultIsOpen);
  const open = useRef(isOpen);
  const setOpen = v => {
    open.current = v;
    makeOpen(v);
  };

  // useEffect(() => {
  //   // runs whenever we call setState on `isOpen`
  //   console.log('IS OPEN? ', isOpen);
  //   makeOpen(!isOpen);
  // }, [isOpen]);

  const renderByRef = useRef();
  const portal = useRef<any>(document.createElement('div'));
  const elToMountTo =
    (bindTo && findDOMNode(bindTo)) || (document && document.body);
  window.portal = portal;

  const handleKeydown = useCallback(
    e => {
      var ESC = 27;
      if (!closeOnEsc) return;
      e.keyCode === ESC && stateful && setOpen(false);
    },
    [stateful],
  );

  const openPortal = e => {
    if (e == null) {
      setOpen(true);
      return;
    }
    if (e && e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
    if (renderOnClickedElement) {
      portal.current.style = `
        height: 100%;
        position: fixed;
        left: 0;
        right:0;
        bottom:0;
        top: 0;
      `;
    } else if (renderBelowClickedElement) {
      portal.current.style = `
      height: 100%;
      position: fixed;
      left: 0;
      right:0;
      bottom:0;
      top: 0;
      `;
    }
    stateful && setOpen(true);
  };

  const closePortal = useCallback(() => {
    open.current && setOpen(false);
  }, [isOpen, setOpen]);

  const handleOutsideMouseClick = ({target, button}) => {
    window[`target${count++}`] = target;
    if (
      portal.current.contains(target) ||
      !open.current ||
      button !== 0 ||
      !portal.current
    )
      return;
    stateful && closeOnOutsideClick && closePortal();
  };

  useEffect(() => {
    elToMountTo.appendChild(portal.current);
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleOutsideMouseClick);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('click', handleOutsideMouseClick);
      elToMountTo.removeChild(portal.current);
    };
  }, []);

  return {
    isOpen: open.current,
    openPortal,
    onMouseDown: handleKeydown,
    ref: renderByRef,
    closePortal,
    togglePortal: e => (isOpen ? setOpen(false) : openPortal(e)),
    Portal: ({children}) => createPortal(children, portal.current),
    bind: {
      onMouseDown: handleKeydown,
      ref: renderByRef,
    },
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
