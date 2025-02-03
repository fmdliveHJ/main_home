<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useNuxtApp } from '#app';
import Matter from 'matter-js';

const { $gsap } = useNuxtApp();

const visualBoxRef = ref<HTMLElement | null>(null);
const scene = ref<HTMLElement | null>(null);
const flagContainer = ref<HTMLElement | null>(null);

const flags = [
  'HTML',
  'CSS',
  'SCSS',
  'Tailwind',
  'Bootstrap',
  'Quasar',
  'React',
  'Styled-Component',
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

    world.gravity.y = 2;
    console.log('🌍 Gravity:', world.gravity);

    const render = Render.create({
      element: scene.value!,
      engine: engine,
      options: {
        width: 600,
        height: 400,
        wireframes: false,
        background: '#fff',
      },
    });

    const elements = flagContainer.value
      ? flagContainer.value.querySelectorAll('.flag-item--box')
      : [];

    const bodies = elements.length
      ? Array.from(elements).map((el, index) => {
          const body = Bodies.rectangle(100 + index * 50, 50, 80, 40, {
            restitution: 0.6,
            friction: 0.3,
            density: 0.001,
            isStatic: false,
            render: { fillStyle: 'red' },
          });

          Body.setVelocity(body, { x: Math.random() * 2 - 1, y: 5 });

          Body.applyForce(body, body.position, { x: 0, y: 0.2 });

          console.log(`🟢 Body ${index + 1} velocity:`, body.velocity);
          return body;
        })
      : [];

    console.log('✅ Bodies:', bodies);

    if (bodies.length === 0) {
      console.warn(
        '⚠️ Bodies 배열이 비어 있습니다. flag-item--box 요소가 존재하는지 확인하세요.'
      );
    }

    const ground = Bodies.rectangle(300, 390, 600, 20, {
      isStatic: true,
      render: { fillStyle: 'grey' },
    });

    const mouse = Mouse.create(scene.value!);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    World.add(world, [...bodies, ground, mouseConstraint]);

    Engine.run(engine);
    Render.run(render);

    function updatePhysics() {
      Engine.update(engine);
      requestAnimationFrame(updatePhysics);
    }
    updatePhysics();
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
        <div id="scene" ref="scene"></div>

        <div class="visual-box--flag">
          <div class="flag-item" ref="flagContainer">
            <div
              v-for="(item, index) in flags"
              :key="index"
              class="flag-item--box"
            >
              <span>{{ item }}</span>
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
