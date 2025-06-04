'use client'
import { Live2DWidget } from 'next-live2d'

export default function Home() {
  return (
    <>
      <h1>Hello Live2D</h1>
      <Live2DWidget modelJsonPath="https://raw.githubusercontent.com/dangtranhuu/next-live2d/refs/heads/main/models/koharu/model.json" />
    </>
  );
}
