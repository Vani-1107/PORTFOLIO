export const fadeIn = () => {
    return {
      hidden: {
        opacity: 0.1,
      },
      show: {
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 2,
        ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  