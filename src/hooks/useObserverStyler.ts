"use client";
import { useEffect } from "react";

interface Props {
  styles: string;
  chivatoId: string;
  targetId: string;
  secondChivatoId?: string;
  threshold?: number;
  rootMargin?: number;
  inverse?: boolean;
}
export const useObserverStyler = (props: Props) => {
  const {
    chivatoId,
    targetId,
    threshold = 1,
    rootMargin = 0,
    inverse = 0,
    secondChivatoId,
    styles,
  } = props;

  // CAN'T USE INVERSE WITH SECOND CHIVATO, YOU SHOULD JUST INVERT THE ORDER OF CHIVATOS
  if (inverse && secondChivatoId != null)
    throw new Error(
      "CAN'T USE INVERSE WITH SECOND CHIVATO, YOU SHOULD JUST INVERT THE ORDER OF CHIVATOS"
    );
  useEffect(() => {
    const chivato = document.querySelector(`#${chivatoId}`) as Element;
    const secondChivato = document.querySelector(
      `#${secondChivatoId}`
    ) as Element;
    const target = document.querySelector(`#${targetId}`) as Element;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (typeof secondChivato !== "undefined") {
            // Si tenemos dos chivatos
            if (entry.target === chivato) {
              if (entry.isIntersecting) {
                target.classList.add(styles);
              }
            }
            if (entry.target === secondChivato) {
              if (entry.isIntersecting) {
                target.classList.remove(styles);
              }
            }
          } else {
            // Si solo hay un chivato
            if (!inverse) {
              // Y no es inverso
              if (entry.isIntersecting) target.classList.add(styles);
              else target.classList.remove(styles);
            } else {
              // Y es inverso
              if (entry.isIntersecting) target.classList.remove(styles);
              else target.classList.add(styles);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: `${rootMargin}%`,
        threshold,
      }
    );
    console.log(chivato, secondChivato);
    if (secondChivato != null) observer.observe(secondChivato);
    observer.observe(chivato);
  });
};
