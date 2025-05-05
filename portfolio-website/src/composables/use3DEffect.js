import { ref, reactive, computed } from 'vue';

export function use3DEffect() {
  const cardState = reactive({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    brightness: 1
  });

  const handleMouseMove = (event, card) => {
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 10;
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * 10;

    cardState.rotateX = rotateX;
    cardState.rotateY = rotateY;
    cardState.scale = 1.05;
    cardState.brightness = 1.1;
  };

  const handleMouseLeave = () => {
    cardState.rotateX = 0;
    cardState.rotateY = 0;
    cardState.scale = 1;
    cardState.brightness = 1;
  };

  const cardStyle = computed(() => {
    const { rotateX, rotateY, scale, brightness } = cardState;
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      filter: `brightness(${brightness})`,
      transition: 'transform 0.1s ease, filter 0.3s ease'
    };
  });

  return {
    handleMouseMove,
    handleMouseLeave,
    cardStyle
  };
}