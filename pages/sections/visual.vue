<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useNuxtApp } from '#app';
import Matter from 'matter-js';

const { $gsap } = useNuxtApp();

const visualBoxRef = ref<HTMLElement | null>(null);
const scene = ref<HTMLElement | null>(null);
const flagContainer = ref<HTMLElement | null>(null);
const canvasWidth = 1100;
const canvasHeight = 900;

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

onMounted(() => {
  if (!$gsap) return;

  const items = document.querySelectorAll('.skill-item > div');

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

  const spans = document.querySelectorAll('.visual-box--title span');

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
    setTimeout(async () => {
      const Matter = await import('matter-js');
      const {
        Engine,
        Render,
        World,
        Bodies,
        Body,
        Composite,
        Mouse,
        MouseConstraint,
      } = Matter;

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

      const elements = flagContainer.value
        ? flagContainer.value.querySelectorAll('.flag-item--box')
        : [];

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

      const bodies = elements.length
        ? Array.from(elements).map((el, index) => {
            const text = (el as HTMLElement).innerText;
            const fontSize = 36;
            const padding = 50;
            const textWidth = measureTextWidth(text, fontSize);
            const boxWidth = textWidth + padding;

            const bgColor = (el as HTMLElement).dataset.bgColor || '#ffffff';

            const textColor = (el as HTMLElement).dataset.textColor;

            const xPosition =
              canvasWidth / 2 -
              boxWidth / 2 +
              index * 60 -
              (elements.length - 1) * 30;

            const body = Bodies.rectangle(xPosition, 50, boxWidth, 80, {
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
            });

            Body.setVelocity(body, { x: Math.random() * 2 - 1, y: 5 });
            Body.applyForce(body, body.position, { x: 0, y: 0.2 });

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

          ctx.save();
          ctx.translate(position.x, position.y);
          ctx.rotate(angle);
          ctx.fillStyle = textColor;
          ctx.font = `${fontWeight} 36px FuturaNowHeadline`;
          ctx.fillText(text, 0, 0);
          ctx.restore();
        });
      });

      const createWall = (
        x: number,
        y: number,
        width: number,
        height: number
      ) => {
        return Bodies.rectangle(x, y, width, height, {
          isStatic: true,
          render: {
            fillStyle: 'transparent',
            strokeStyle: 'transparent',
            lineWidth: 3,
          },
        });
      };

      const wall1 = createWall(canvasWidth / 2, 650, 700, 144);

      const wall2 = createWall(canvasWidth / 2, 800, 1100, 144);

      Composite.add(world, [wall1, wall2]);

      const ground = Bodies.rectangle(canvasWidth / 2, 800, 1100, 20, {
        isStatic: true,
        label: 'ground',
        render: { fillStyle: 'transparent' },
      });
      const leftWall = Bodies.rectangle(0, canvasHeight / 2, 20, canvasHeight, {
        isStatic: true,
        label: 'ground',
        render: { fillStyle: 'transparent' },
      });
      const rightWall = Bodies.rectangle(
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

      Composite.add(world, [ground, leftWall, rightWall, topWall]);

      World.add(world, [...bodies, ground]);

      Engine.run(engine);
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
      <div class="visual-box" ref="visualBoxRef">
        <h1 class="visual-box--title title-top">
          <span>WEB</span>
          <span>DEVELOPER</span>
        </h1>
        <div class="visual-box--skill">
          <div class="skill-item">
            <div class="skill-item--js"><span>Js</span></div>
            <div class="skill-item--ts"><span>Ts</span></div>
            <div class="skill-item--vue"><span>Vue</span></div>
            <div class="skill-item--nuxt"><span>Nuxt</span></div>
          </div>
        </div>
        <div id="scene" ref="scene" class="visual-box--scene"></div>

        <div class="visual-box--flag">
          <div class="flag-item" ref="flagContainer">
            <div
              v-for="(item, index) in flags"
              :key="index"
              class="flag-item--box"
              style="display: none"
              :data-bg-color="item.bgColor"
              :data-text-color="item.textColor"
            >
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <h2 class="visual-box--title title-bottom">
          <span>PUBLISHER, </span>
          <span>WEB FRONT END</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
