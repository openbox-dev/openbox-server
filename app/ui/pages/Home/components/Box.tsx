import React, { useEffect } from "react";
import { PrimitiveProps, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import gsap from "gsap";

export default function Box() {
  const model: THREE.Group = useLoader(
    GLTFLoader as any,
    "/assets/model/box.glb"
  ).scene;
  model.children.forEach((child: THREE.Mesh): void => {
    child.material = new THREE.MeshNormalMaterial();
  });

  let startEyeAnimation = 0;
  let canRotate: boolean = false;
  const startLeftEyePosition = {
    x: model.children[0].position.x,
    y: model.children[0].position.y,
  };
  const startRightEyePosition = {
    x: model.children[1].position.x,
    y: model.children[1].position.y,
  };
  const cursor = {
    x: 0,
    y: 0,
  };

  window.addEventListener("mousemove", (event: MouseEvent) => {
    cursor.x = event.clientX / window.innerWidth - 0.5;
    cursor.y = event.clientY / window.innerHeight - 0.5;
  });

  useEffect(() => {
    gsap.to(model.position, { duration: 1, y: 0 });
    gsap.to(model.rotation, { duration: 1, y: Math.PI });
    gsap.to(model.scale, {
      duration: 1,
      y: 1.5,
      x: 1.5,
      z: 1.5,
      onComplete: () => {
        canRotate = true;
      },
    });
  });

  useFrame((state, delta) => {
    if (canRotate) {
      model.rotation.y = Math.PI + Math.PI * cursor.x * 0.1;
      model.rotation.x = Math.PI * cursor.y * 0.1;
      model.children[0].position.x = startLeftEyePosition.x - cursor.x * 0.2;
      model.children[0].position.y = startLeftEyePosition.y - cursor.y * 0.2;
      model.children[1].position.x = startRightEyePosition.x - cursor.x * 0.2;
      model.children[1].position.y = startRightEyePosition.y - cursor.y * 0.2;
    }
    startEyeAnimation += delta;
    if (startEyeAnimation > 4) {
      gsap.to(model.children[0].scale, {
        duration: 0.25,
        z: 0.05,
        ease: "back.out(1)",
      });
      gsap.to(model.children[0].scale, {
        duration: 0.25,
        z: 1,
        delay: 0.25,
        ease: "back.out(1)",
      });
      gsap.to(model.children[1].scale, {
        duration: 0.25,
        z: 0.05,
        ease: "back.out(1)",
      });
      gsap.to(model.children[1].scale, {
        duration: 0.25,
        z: 1,
        delay: 0.25,
        ease: "back.out(1)",
      });
      startEyeAnimation = 0;
    }
  });

  const handleClick = () => {
    if (canRotate) {
      canRotate = false;
      gsap.to(model.rotation, {
        duration: 1,
        y: model.rotation.y + Math.PI * 2,
        ease: "back.out(1)",
        onComplete: () => {
          canRotate = true;
        },
      });
    }
  };

  return (
    <primitive
      position={[0, -7, 0]}
      rotation={[0, 0, 0]}
      object={model}
      onClick={handleClick}
    />
  );
}
