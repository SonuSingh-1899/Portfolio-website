import { useEffect, useRef, useCallback } from 'react';

const useCursor = (options = {}) => {
  const {
    selector = '.hover-text',
    defaultSize = '40px',
    snapDuration = '0.45s',
    releaseDuration = '0.25s',
  } = options;

  const isHoveringRef = useRef(false);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const listenersRef = useRef([]);
  const rafRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  const getCursor = useCallback(() => {
    if (cursorRef.current) return cursorRef.current;
    let el = document.querySelector('.cursor');
    if (!el) {
      el = document.createElement('div');
      el.className = 'cursor';
      document.body.appendChild(el);
    }
    cursorRef.current = el;
    return el;
  }, []);

  const getCursorDot = useCallback(() => {
    if (cursorDotRef.current) return cursorDotRef.current;
    let el = document.querySelector('.cursor-dot');
    if (!el) {
      el = document.createElement('div');
      el.className = 'cursor-dot';
      document.body.appendChild(el);
    }
    cursorDotRef.current = el;
    return el;
  }, []);

  // Lerp helper
  const lerp = (a, b, t) => a + (b - a) * t;

  // Smooth follow loop using requestAnimationFrame
  const startFollowLoop = useCallback(() => {
    const cursor = getCursor();

    const loop = () => {
      if (!isHoveringRef.current) {
        cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.12);
        cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.12);
        cursor.style.left = `${cursorPos.current.x}px`;
        cursor.style.top = `${cursorPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
  }, [getCursor]);

  const onMouseMove = useCallback((e) => {
    const cursorDot = getCursorDot();
    mousePos.current = { x: e.clientX, y: e.clientY };
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
  }, [getCursorDot]);

  const onEnter = useCallback((el) => {
    const cursor = getCursor();
    const rect = el.getBoundingClientRect();
    isHoveringRef.current = true;
    cursor.classList.add('active');
    cursor.style.transition = `
      width ${snapDuration} cubic-bezier(0.25, 1, 0.5, 1),
      height ${snapDuration} cubic-bezier(0.25, 1, 0.5, 1),
      top ${snapDuration} cubic-bezier(0.25, 1, 0.5, 1),
      left ${snapDuration} cubic-bezier(0.25, 1, 0.5, 1),
      border-radius ${snapDuration} ease
    `;
    cursor.style.width = `${rect.width}px`;
    cursor.style.height = `${rect.height}px`;
    cursor.style.top = `${rect.top + rect.height / 2}px`;
    cursor.style.left = `${rect.left + rect.width / 2}px`;
  }, [getCursor, snapDuration]);

  const onLeave = useCallback(() => {
    const cursor = getCursor();
    isHoveringRef.current = false;
    cursor.classList.remove('active');
    cursor.style.transition = `
      width ${releaseDuration} cubic-bezier(0.25, 1, 0.5, 1),
      height ${releaseDuration} cubic-bezier(0.25, 1, 0.5, 1),
      border-radius ${releaseDuration} ease
    `;
    cursor.style.width = defaultSize;
    cursor.style.height = defaultSize;
  }, [getCursor, defaultSize, releaseDuration]);

  const attachListeners = useCallback(() => {
    listenersRef.current.forEach(({ el, enter, leave }) => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    });

    const elements = document.querySelectorAll(selector);
    listenersRef.current = [...elements].map((el) => {
      const enter = () => onEnter(el);
      const leave = () => onLeave();
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
      return { el, enter, leave };
    });
  }, [selector, onEnter, onLeave]);

  useEffect(() => {
    getCursor();
    getCursorDot();
    document.addEventListener('mousemove', onMouseMove);
    startFollowLoop();
    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      listenersRef.current.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [getCursor, getCursorDot, onMouseMove, startFollowLoop, attachListeners]);

  return { isHoveringRef, cursorRef, cursorDotRef };
};

export default useCursor;
