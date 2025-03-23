<script setup lang="ts">
import { onMounted, ref, transformVNodeArgs } from 'vue';
import { useNuxtApp } from '#app';

const { $gsap } = useNuxtApp();

const visualBoxRef = ref<HTMLElement | null>(null);
const scene = ref<HTMLElement | null>(null);
const flagContainer = ref<HTMLElement | null>(null);

const flags = [
  {
    name: 'HTML',
    color: '#e34f26',
    bgColor: '#E55128',
    textColor: '#fff',
  },
  {
    name: 'CSS',
    color: '#264de4',
    bgColor: '#1472B6',
    textColor: '#fff',
  },
  {
    name: 'SCSS',
    color: '#c6538c',
    bgColor: '#D0649B',
    textColor: '#fff',
  },
  {
    name: 'Tailwind',
    color: '#38bdf8',
    bgColor: '#38BDF9',
    textColor: '#fff',
  },
  {
    name: 'Bootstrap',
    color: '#8512FB',
    bgColor: '#8512FB',
    textColor: '#fff',
  },
  {
    name: 'Quasar',
    color: '#00e5ff',
    bgColor: '#02B3FD',
    textColor: '#fff',
  },
  {
    name: 'React',
    color: '#61dafb',
    bgColor: '#4AD5FF',
    textColor: '#fff',
  },
  {
    name: 'Styled-Component',
    color: '#db7093',
    bgColor: '#F07E7F',
    textColor: '#fff',
  },
];

onMounted(async () => {
  await nextTick();
  if (!$gsap) return;

  const items = document.querySelectorAll('.visual__skill-item > div');

  setTimeout(() => {
    items.forEach((item, index) => {
      const tl = $gsap.timeline({
        delay: index * 0.05,
      });

      tl.fromTo(
        item,
        { scale: 0, opacity: 0 },
        { scale: 1.1, opacity: 1, duration: 0.5, ease: 'power1.out' }
      ).to(item, { scale: 1, duration: 0.5, ease: 'power1.out' });
    });
  }, 200);

  const spans = document.querySelectorAll('.visual__title span');

  $gsap.fromTo(
    spans,
    { scaleY: 0, opacity: 0, transformOrigin: 'bottom' },
    {
      scaleY: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
    }
  );
});

onMounted(async () => {
  if (process.client) {
    await nextTick();

    const canvasHeight = 700;
    const getCanvasWidth = () => {
      const screenWidth =
        typeof window !== 'undefined' ? window.innerWidth : 1920;

      if (screenWidth >= 1920) {
        return 1500;
      } else if (screenWidth >= 1024) {
        return 1100;
      } else {
        return screenWidth - 40;
      }
    };
    let canvasWidth = getCanvasWidth();

    const updateCanvasSize = () => {
      canvasWidth = getCanvasWidth();

      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.width = canvasWidth;
      }
    };

    // Resize 캔버스 크기 조정
    window.addEventListener('resize', updateCanvasSize);

    setTimeout(async () => {
      //Matter js 추가
      const Matter = await import('matter-js');
      const { Engine, Render, World, Bodies, Body, Composite } = Matter;

      const engine = Engine.create();
      const world = engine.world;

      engine.gravity.x = 0;
      engine.gravity.y = 1;

      world.gravity.y = 2;
      console.log('🌍 Gravity:', world.gravity);

      const render = Render.create({
        element: scene.value!,
        engine: engine,
        options: {
          width: canvasWidth,
          height: canvasHeight,
          wireframes: false,
          background: 'transparent',
        },
      });

      const measureTextWidth = (
        text: string,
        fontSize = 36,
        fontWeight = '500'
      ) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return 0;

        ctx.font = `${fontWeight} ${fontSize}px FuturaNowHeadline`;
        return ctx.measureText(text).width;
      };

      const elements = flagContainer.value
        ? flagContainer.value.querySelectorAll('.visual__flag-box')
        : [];

      const shuffledElements = Array.from(elements).sort(
        () => Math.random() - 0.5
      );

      const getFontSize = (screenWidth: number) => {
        if (screenWidth >= 1920) return 30;
        if (screenWidth >= 1200) return 25;
        return 16;
      };

      const bodies = shuffledElements.length
        ? shuffledElements.map((el) => {
            const text = (el as HTMLElement).innerText;
            const baseWidth = 1200;
            const scaleFactor = canvasWidth / baseWidth;
            const fontSize = getFontSize(window.innerWidth);
            const padding = 20;

            const textWidth = measureTextWidth(text, fontSize);
            const boxWidth = textWidth + padding;
            const boxHeight = 60;

            const bgColor = (el as HTMLElement).dataset.bgColor || '#ffffff';
            const textColor = (el as HTMLElement).dataset.textColor;

            const xPosition = Math.random() * canvasWidth;
            const yPosition = 50;

            const body = Bodies.rectangle(
              xPosition,
              yPosition,
              boxWidth,
              boxHeight,
              {
                restitution: 0.6,
                friction: 0.3,
                density: 0.001,
                isStatic: false,
                chamfer: { radius: 10 },
                render: {
                  fillStyle: bgColor,
                  strokeStyle: 'transparent',
                  lineWidth: 3,
                },
                label: text,
                customTextColor: textColor,
              }
            );

            Body.setPosition(body, { x: xPosition, y: yPosition });
            Body.setVelocity(body, { x: Math.random() * 2 - 1, y: 5 });
            Body.applyForce(body, body.position, {
              x: Math.random() * 0.02 - 0.01,
              y: 0.2,
            });

            return body;
          })
        : [];

      Matter.Events.on(render, 'afterRender', function () {
        const ctx = render.context;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        bodies.forEach((body) => {
          const { position, angle } = body;
          const text = body.label;
          const textColor = body.customTextColor || '#000';
          const fontWeight = body.customFontWeight || '500';

          // ✅ 반응형 폰트 크기 적용
          const fontSize = (body.customFontSize = getFontSize(
            window.innerWidth
          ));

          ctx.save();
          ctx.translate(position.x, position.y);
          ctx.rotate(angle);
          ctx.fillStyle = textColor;
          ctx.font = `${fontWeight} ${fontSize}px FuturaNowHeadline`;
          ctx.fillText(text, 0, 0);
          ctx.restore();
        });
      });

      let resizeTimeout: NodeJS.Timeout | null = null;

      const resizeBodies = () => {
        if (!bodies.length) return;

        const canvasWidth = window.innerWidth;

        // 🚀 1. 리사이즈 중에는 모든 요소 숨기기
        render.canvas.style.opacity = '0';

        const generateRandomPositions = (count: number, width: number) => {
          const step = width / count;
          let positions = Array.from(
            { length: count },
            (_, i) => step * i + Math.random() * step
          );
          return positions.sort(() => Math.random() - 0.5);
        };
        const randomXPositions = generateRandomPositions(
          elements.length,
          canvasWidth
        );

        bodies.forEach((body, index) => {
          const el = elements[index] as HTMLElement;
          if (!el) return;
          const xPosition = randomXPositions[index];
          const yPosition = 50;
          Body.setStatic(body, true);
          Body.setPosition(body, { x: xPosition, y: yPosition });
        });

        //리사이즈가 끝나면 다시 요소를 보이게 설정
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          // 다시 랜덤한 위치 생성
          const newRandomXPositions = generateRandomPositions(
            elements.length,
            window.innerWidth
          );

          bodies.forEach((body, index) => {
            const xPosition = newRandomXPositions[index];
            const yPosition = 50;

            Body.setPosition(body, { x: xPosition, y: yPosition });

            Body.setStatic(body, false);

            Body.setVelocity(body, { x: Math.random() * 2 - 1, y: 5 });
            Body.applyForce(body, body.position, {
              x: Math.random() * 0.02 - 0.01,
              y: 0.2,
            });
          });

          render.canvas.style.opacity = '1';
        }, 300);
      };

      window.addEventListener('resize', resizeBodies);

      const createWall = (
        x: number,
        y: number,
        width: number,
        height: number
      ) => {
        return Bodies.rectangle(
          x,
          y,
          width > 0 ? width : 100,
          height > 0 ? height : 50,

          {
            isStatic: true,
            render: {
              fillStyle: 'transparent', // 색상 지정
              strokeStyle: 'transparent',
              lineWidth: 3,
            },
          }
        );
      };

      function updateWalls() {
        const spanElements = document.querySelectorAll(
          '.visual__title.title-bottom span'
        );

        const canvasRect = scene.value!.getBoundingClientRect();
        const span1 = spanElements[0].getBoundingClientRect();
        const span2 = spanElements[1].getBoundingClientRect();

        const span1X = span1.left - canvasRect.left + span1.width / 2;
        const span1Y = span1.top - canvasRect.top + span1.height / 2;
        const span2X = span2.left - canvasRect.left + span2.width / 2;
        const span2Y = span2.top - canvasRect.top + span2.height / 2;

        Composite.remove(world, [wall1, wall2, wall3, leftWall, rightWall]);

        wall1 = createWall(span1X, span1Y, span1.width, span1.height);
        wall2 = createWall(span2X, span2Y, span2.width, span2.height);
        wall3 = createWall(canvasWidth / 2, canvasHeight, canvasWidth, 1);
        leftWall = Bodies.rectangle(0, canvasHeight / 2, 20, canvasHeight, {
          isStatic: true,
          label: 'ground',
          render: { fillStyle: 'transparent' },
        });
        rightWall = Bodies.rectangle(
          canvasWidth,
          canvasHeight / 2,
          20,
          canvasHeight,
          {
            isStatic: true,
            label: 'ground',
            render: { fillStyle: 'transparent' },
          }
        );
        Composite.add(world, [wall1, wall2, wall3, leftWall, rightWall]);
      }

      let wall1 = createWall(canvasWidth / 2, 650, 100, 50);
      let wall2 = createWall(canvasWidth / 2, 800, 100, 50);
      let wall3 = createWall(canvasWidth / 2, canvasHeight, canvasWidth, 1);

      Composite.add(world, [wall1, wall2, wall3]);

      const observer = new MutationObserver(updateWalls);
      const targetNode = document.querySelector('.visual__title.title-bottom');

      if (targetNode) {
        observer.observe(targetNode, {
          attributes: true,
          childList: true,
          subtree: true,
        });
      }

      // const ground = Bodies.rectangle(canvasWidth / 2, 800, 1100, 20, {
      //   isStatic: true,
      //   label: 'ground',
      //   render: { fillStyle: 'red' },
      // });
      let leftWall = Bodies.rectangle(0, canvasHeight / 2, 20, canvasHeight, {
        isStatic: true,
        label: 'ground',
        render: { fillStyle: 'transparent' },
      });
      let rightWall = Bodies.rectangle(
        canvasWidth,
        canvasHeight / 2,
        20,
        canvasHeight,
        {
          isStatic: true,
          label: 'ground',
          render: { fillStyle: 'transparent' },
        }
      );
      const topWall = Bodies.rectangle(canvasWidth / 2, 0, canvasWidth, 20, {
        isStatic: true,
        label: 'ground',
        render: { fillStyle: 'transparent' },
      });

      Composite.add(world, [wall1, wall2, wall3, leftWall, rightWall, topWall]);

      World.add(world, [...bodies]);

      window.addEventListener('resize', updateWalls);

      document.addEventListener('DOMContentLoaded', () => {
        let checkCount = 0;
        const checkWallsInterval = setInterval(() => {
          updateWalls();
          checkCount++;
          if (checkCount > 5) clearInterval(checkWallsInterval); // 5번 반복 후 종료
        }, 100);
      });
      Matter.Runner.run(engine);
      Render.run(render);

      function updatePhysics() {
        Engine.update(engine);
        requestAnimationFrame(updatePhysics);
      }
      updatePhysics();
    }, 1000);
  }
});
</script>

<template>
  <div class="section visual">
    <div class="inner">
      <div class="visual__box" ref="visualBoxRef">
        <h2 class="visual__title title-top">
          <span>WEB</span>
          <span>DEVELOPER</span>
        </h2>
        <div class="visual__skill">
          <div class="visual__skill-item">
            <div class="visual__skill-js"><span>Js</span></div>
            <div class="visual__skill-ts"><span>Ts</span></div>
            <div class="visual__skill-vue"><span>Vue</span></div>
            <div class="visual__skill-nuxt"><span>Nuxt</span></div>
          </div>
        </div>
        <div id="scene" ref="scene" class="visual__scene"></div>

        <div class="visual__flag">
          <div class="visual__flag-item" ref="flagContainer">
            <div
              v-for="(item, index) in flags"
              :key="index"
              class="visual__flag-box"
              style="display: none"
              :data-bg-color="item.bgColor"
              :data-text-color="item.textColor"
            >
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <h2 class="visual__title title-bottom">
          <span>PUBLISHER, </span>
          <span>WEB FRONT END</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
