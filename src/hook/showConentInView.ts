import { useInView } from "react-intersection-observer";

export const useShowConentInView = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const colorBackground = (color: string) => {
    const colorIs = color;

    const changeBackgroundInView = {
      background: inView ? colorIs : "#000000",
    }

    return changeBackgroundInView
  }


  const showContent = {
    transition: "800ms ease-in-out",
    opacity: inView ? 1 : 0,
  }

  return { showContent, colorBackground, ref, inView }
}
